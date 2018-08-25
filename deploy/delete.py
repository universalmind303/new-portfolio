import os
from env_vars import get

os.system('kubectl delete deployments {project_name}'.format(**get()))
os.system('kubectl delete services {project_name}'.format(**get()))