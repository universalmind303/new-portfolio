#!/bin/bash


echo 'verify\n\n'
gcloud compute instances list

PROJECT_ID="$(gcloud config get-value project -q)"
ENV=devl
IMAGE=new-portfolio-$ENV

kubectl run new-portfolio \
    --image=gcr.io/$PROJECT_ID/$IMAGE:latest \
    --port 80 \
    --env=DNS_DOMAIN=corygrinstead.io

kubectl expose deployment new-portfolio \
    --type=LoadBalancer \
    --port 80 \
    --target-port 80 \
    -o yaml > ./deployments.yml
