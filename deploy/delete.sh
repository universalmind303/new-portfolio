#!/bin/sh 

set -eu

. ./set_env.sh


kubectl delete deployments ${GCLOUD_PROJECT_NAME}
kubectl delete services ${GCLOUD_PROJECT_NAME}