#!/bin/sh 
set -eu

ENV="devl"
GCLOUD_COMPUTE_ZONE='us-central1-a'
GCLOUD_PROJECT_NAME="new-portfolio"
GCLOUD_PROJECT_ID="portfolio-203912"
IMAGE="new-portfolio-${ENV}"
TAG="$(git log -1 --pretty=%H)"
HOST_NAME="gcr.io"