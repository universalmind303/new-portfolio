#!/bin/bash

ENV=devl
PROJECT_ID="$(gcloud config get-value project -q)"
IMAGE=new-portfolio-$ENV
TAG=latest
HOST_NAME=gcr.io

docker build -f ../../devl.Dockerfile -t $IMAGE:$TAG ../../
docker tag $IMAGE $HOST_NAME/$PROJECT_ID/$IMAGE:$TAG
docker push $HOST_NAME/$PROJECT_ID/$IMAGE:$TAG

gcloud container images list-tags $HOST_NAME/$PROJECT_ID/$IMAGE
