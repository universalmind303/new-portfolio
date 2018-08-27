#!/bin/bash
set -eu

mkdir -p $HOME/.gcloud
echo $GCLOUD_SERVICE_KEY | base64 -d > ${HOME}/.gcloud/key.json
gcloud auth activate-service-account --key-file ${HOME}/.gcloud/key.json
gcloud config set project $GCLOUD_PROJECT_ID
gcloud --quiet config set container/cluster $GCLOUD_CLUSTER_NAME
gcloud config set compute/zone ${GCLOUD_COMPUTE_ZONE}
gcloud --quiet container clusters get-credentials $GCLOUD_CLUSTER_NAME