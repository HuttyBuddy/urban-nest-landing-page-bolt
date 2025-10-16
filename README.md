## Deploying to Cloud Run manually

The service can be deployed by building an image with Cloud Build and pushing it to Artifact Registry. The commands below assume you want to deploy to Cloud Run in `us-west1` and that you have a build service account named `cb-builder@<PROJECT_ID>.iam.gserviceaccount.com`.

```bash
export PROJECT_ID="urban-nest-2"
export PROJECT_NUMBER="196412819693"
export REGION="us-west1"
export REPO="cloud-run-source-deploy"
export SERVICE="urbannest-landing"
export IMAGE="$REGION-docker.pkg.dev/$PROJECT_ID/$REPO/$SERVICE"
export BUILD_SA_EMAIL="cb-builder@$PROJECT_ID.iam.gserviceaccount.com"
export BUILD_SA_RESOURCE="projects/$PROJECT_ID/serviceAccounts/$BUILD_SA_EMAIL"
export TAG="$(date +%Y%m%d%H%M%S)"
```

Authenticate gcloud and select the project if you have not already:

```bash
gcloud config set project "$PROJECT_ID"
```

Build and push the container image:

```bash
gcloud builds submit \
  --tag "$IMAGE:$TAG" \
  --service-account="$BUILD_SA_RESOURCE"
```

> **Why use the resource path?** The latest `gcloud` release requires
> the service account to be specified using the full resource path in
> the form `projects/<PROJECT_ID>/serviceAccounts/<SERVICE_ACCOUNT>`.
> Using only the email address results in an `INVALID_ARGUMENT` error
> when Cloud Build parses the flag value.

> **Note:** Some CLI examples on the web use `--logging=CLOUD_LOGGING_ONLY`. The Cloud Shell gcloud version does not recognize that flag, and Cloud Build already streams the logs to Cloud Logging by default, so the flag is not required.

Deploy the image to Cloud Run:

```bash
gcloud run deploy "$SERVICE" \
  --image "$IMAGE:$TAG" \
  --region "$REGION" \
  --platform managed \
  --allow-unauthenticated
```

Verify that the image exists in Artifact Registry if needed:

```bash
gcloud artifacts docker images list "$REGION-docker.pkg.dev/$PROJECT_ID/$REPO" \
  --format="table(IMAGE, TAGS)" | grep "$SERVICE" || echo "IMAGE NOT FOUND"
```

These commands match the workflow used in the Cloud Run deployment pipeline and should prevent `Image not found` errors caused by skipping the build step or using unsupported gcloud flags.

## Troubleshooting load balancer cache invalidations

If you invalidate the external HTTP(S) load balancer cache with a command such as:

```bash
gcloud compute url-maps invalidate-cdn-cache urban-nest-final-lb \
  --path "/*"
```

and receive an `HTTP/2 404` response from the Google Front End, the url map name likely does not match an existing resource in the project. Confirm the available url maps before retrying:

```bash
gcloud compute url-maps list --format="table(name, defaultService)"
```

Use the exact `name` value from the list output in the invalidation command. The cache invalidation call will succeed once the command targets a url map that exists in the active project.

## Troubleshooting Cloud Run domain mapping errors

If a Cloud Run deployment fails with an error similar to
`Domain mapping <DOMAIN> is not ready or routing` the custom domain entry
referenced by the service is either missing or stuck in a pending state.
This typically happens when the external Application Load Balancer still
targets a domain mapping that was deleted or never finished verifying.

1. Check the current domain mapping status:

   ```bash
   gcloud beta run domain-mappings list \
     --region "$REGION" \
     --platform managed
   ```

2. If the mapping does not exist, remove the stale load balancer reference
   from the service (UI: **Cloud Run → Edit and deploy new revision → Ingress →
   Uncheck "Custom domains"**). Alternatively, delete the custom domain entry
   from the external HTTP(S) load balancer configuration.

3. If the mapping exists but is not ready, re-verify the domain ownership and
   ensure the required DNS records point to the Cloud Run load balancer. You
   can also delete and recreate the mapping once DNS is correct:

   ```bash
   gcloud beta run domain-mappings delete --domain <DOMAIN> --region "$REGION"
   gcloud beta run domain-mappings create --service "$SERVICE" --domain <DOMAIN> \
     --region "$REGION"
   ```

After the domain mapping reports a `Ready` status, re-run the deployment and
the service will route traffic successfully.

## Capturing startup errors on Cloud Run

When the service deploys successfully but the revision crashes during the
startup health check, follow the playbook in
[`docs/cloud-run-startup-debugging.md`](docs/cloud-run-startup-debugging.md).
It summarizes the confirmed working pieces of the pipeline and provides
commands for streaming container logs, running the production image locally,
and inspecting revision metadata so a freelancer can isolate the failing code
path quickly.
