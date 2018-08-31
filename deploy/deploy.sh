#!/bin/sh 

set -eu

. ./set_env.sh

kubectl set image deployment/${PROJECT_NAME} ${PROJECT_NAME}=${HOST_NAME}/${PROJECT_ID}/${IMAGE}:${TAG}
