#!/bin/sh 

set -eu

. ./set_env.sh

docker build -f ../docker/devl.Dockerfile -t ${IMAGE}:latest ../

echo "tagging ${IMAGE} ${HOST_NAME}/${GCLOUD_PROJECT_ID}/${IMAGE}:${TAG}"
docker tag ${IMAGE} ${HOST_NAME}/${GCLOUD_PROJECT_ID}/${IMAGE}:${TAG}

echo "pushing ${IMAGE} ${HOST_NAME}/${GCLOUD_PROJECT_ID}/${IMAGE}:${TAG}"
docker push ${HOST_NAME}/${GCLOUD_PROJECT_ID}/${IMAGE}:${TAG}
