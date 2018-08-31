#!/bin/bash
import os
from env_vars import get
from operator import itemgetter

project_id, compute_zone, project_name = itemgetter("project_id", "compute_zone", "project_name")(get())

os.system(f"mkdir -p $HOME/.gcloud")
os.system(f"echo $GCLOUD_SERVICE_KEY > $HOME/.gcloud/key.json")
os.system(f"gcloud auth activate-service-account --key-file $HOME/.gcloud/key.json")
os.system(f"gcloud config set project {project_id}")
os.system(f"gcloud --quiet config set container/cluster {project_name}")
os.system(f"gcloud config set compute/zone {compute_zone}")
os.system(f"gcloud --quiet container clusters get-credentials {project_name}")