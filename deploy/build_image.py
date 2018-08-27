import os 
from env_vars import get


os.system('''
    docker build  -t circleci-gcloud:latest  --build-arg GCLOUD_PROJECT_ID={project_id} --build-arg GCLOUD_CLUSTER_NAME={project_name} --build-arg GCLOUD_COMPUTE_ZONE={compute_zone} --build-arg GCLOUD_SERVICE_KEY="$(cat ~/.gcloud/key.json)" .
'''.format(**get()))