#!/bin/sh 

set -eu

. ./set_env.sh
docker login -u _json_key --password-stdin https://gcr.io < $GCLOUD_SERVICE_KEY

docker build -f ../docker/devl.Dockerfile -t ${IMAGE}:${TAG} ../
docker tag ${IMAGE} ${HOST_NAME}/${GCLOUD_PROJECT_ID}/${IMAGE}:${TAG}
docker push ${HOST_NAME}/${GCLOUD_PROJECT_ID}/${IMAGE}:${TAG}