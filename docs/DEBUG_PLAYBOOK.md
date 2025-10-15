# Cloud Run startup debugging playbook

This playbook summarizes what already works in production and the remaining
information we need from logs in order to identify the root cause of the
container crash.

## Confirmed working pieces

* **Source:** GitHub repository `HuttyBuddy/urban-nest-landing-page-bolt`.
* **CI/CD:** Cloud Build trigger publishes the container artifact and deploys
  it to the Cloud Run service.
* **Docker image:** `npm install` and `npm run build` succeed inside the
  Dockerfile. The resulting Nginx image runs locally.
* **Local dev:** `npm run dev` works on a developer workstation.

## Symptom

* Cloud Run reports `DEADLINE_EXCEEDED` during the startup health check.
* The container exits during startup. Cloud Run restarts it without serving
  traffic.
* Current Cloud Logging entries do not show the application-level error that
  explains the crash.

## Immediate next steps for deeper logs

1. **Confirm the container entrypoint.**
   The Dockerfile should run `/docker-entrypoint.sh` from the base Nginx image.
   Validate the generated command:

   ```bash
   gcloud run services describe urbannest-landing \
     --region us-west1 \
     --format='value(spec.template.spec.containers[0].command)' \
     --format='value(spec.template.spec.containers[0].args)'
   ```

   If either field is non-empty, Cloud Run might be overriding the default
   command. A blank result indicates the Docker image entrypoint is used.

2. **Stream logs during startup.**
   Cloud Run buffers startup logs. Use `gcloud beta run services proxy` to
   attach a proxy locally, then tail the logs while triggering a revision:

   ```bash
   gcloud beta run services proxy urbannest-landing \
     --region us-west1 \
     --port 8080 \
     --project urban-nest-2
   ```

   In a separate terminal, deploy the image or trigger a revision. While the
   proxy command runs, fetch the latest logs and include the `--max-log-entries`
   flag so that the startup messages are not truncated:

   ```bash
   gcloud logging read \
     'resource.type="cloud_run_revision" AND resource.labels.service_name="urbannest-landing"' \
     --limit=50 \
     --freshness=1h \
     --format=json | jq '.[].textPayload'
   ```

   This captures stdout/stderr from the container while the revision is still
   initializing.

3. **Run the production image locally.**
   Pull the Cloud Build image and run it with the same environment variables
   Cloud Run injects. Capture the console output during startup:

   ```bash
   docker pull us-west1-docker.pkg.dev/urban-nest-2/cloud-run-source-deploy/urbannest-landing:latest

   docker run --rm -p 8080:8080 \
     -e PORT=8080 \
     -e NODE_ENV=production \
     us-west1-docker.pkg.dev/urban-nest-2/cloud-run-source-deploy/urbannest-landing:latest
   ```

   If the container exits, the console will show the reason immediately. Attach
   `-it` to keep the terminal open if the process stops.

4. **Inspect revision details for env vars and volumes.**
   A mismatch between expected environment variables and the Cloud Run
   configuration can crash the app. Dump the environment settings:

   ```bash
   gcloud run services describe urbannest-landing \
     --region us-west1 \
     --format='value(spec.template.spec.containers[0].env)'
   ```

   Compare the output to the `.env` or Supabase configuration the app expects.

5. **Check container exit codes.**
   Fetch the most recent revision and inspect the termination status:

   ```bash
   gcloud run revisions list \
     --service urbannest-landing \
     --region us-west1 \
     --sort-by="~createTime" \
     --limit=1 \
     --format='value(status.conditions[?type="Ready"].message)'
   ```

   If the message references an exit code (for example `Container failed with
   exit code 1`), re-run the container locally with `--entrypoint` to override
   the startup script and insert debug commands.

## Hand-off summary for freelancers

* Everything in the build and deployment pipeline is correct.
* The remaining task is to surface the container's startup logs. The steps
  above provide commands that should reveal the failing code path.
* Share any stack traces or error lines the commands uncover, so we can decide
  whether the issue belongs to the frontend build, the Nginx config, or the
  runtime environment.
