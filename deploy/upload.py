import os
from env_vars import get

os.system('docker build -f ../docker/devl.Dockerfile -t {image}:{tag} ../ '.format(**get()))
os.system('docker tag {image} {host_name}/{project_id}/{image}:{tag}'.format(**get()))
os.system('docker push {host_name}/{project_id}/{image}:{tag}'.format(**get()))