#!/bin/sh 

set -eu

. ./set_env.sh

kubectl set image deployment/${GCLOUD_PROJECT_NAME} ${GCLOUD_PROJECT_NAME}=${HOST_NAME}/${GCLOUD_PROJECT_ID}/${IMAGE}:${TAG}
