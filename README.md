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
  --service-account="$BUILD_SA_EMAIL"
```

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
