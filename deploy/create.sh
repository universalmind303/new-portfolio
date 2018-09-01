#!/bin/sh 

set -eu

. ./set_env.sh

kubectl run ${GCLOUD_PROJECT_NAME} \
    --image=${HOST_NAME}/${GCLOUD_PROJECT_ID}/${IMAGE}:${TAG} \
    --port 80 
kubectl expose deployment ${GCLOUD_PROJECT_NAME} \
    --type=LoadBalancer \
    --port 80 \
    --target-port 80 
