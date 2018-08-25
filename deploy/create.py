import os
from env_vars import get

os.system("gcloud compute instances list")

os.system('''
    kubectl run {project_name} 
        --image={host_name}/{project_id}/{image}:{tag} 
        --port 80 
    kubectl expose deployment {project_name} 
        --type=LoadBalancer 
        --port 80 
        --target-port 80 
'''.format(**get()))
