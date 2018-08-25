import os
from env_vars import get

os.system('''
    kubectl set image deployment/{project_name} {project_name}={host_name}/{project_id}/{image}:{tag}
'''.format(**get()))
