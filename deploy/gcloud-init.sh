#!/bin/sh 

set -eu

. ./set_env.sh

mkdir -p $HOME/.gcloud
echo $GCLOUD_SERVICE_KEY > ${HOME}/.gcloud/key.json
sudo gcloud auth activate-service-account --key-file ${HOME}/.gcloud/key.json
sudo gcloud config set project $GCLOUD_PROJECT_ID
sudo gcloud --quiet config set container/cluster $GCLOUD_PROJECT_NAME
sudo gcloud config set compute/zone ${GCLOUD_COMPUTE_ZONE}
sudo gcloud --quiet container clusters get-credentials $GCLOUD_PROJECT_NAME

