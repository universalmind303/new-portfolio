FROM centos:7
ARG GCLOUD_SERVICE_KEY
ARG GCLOUD_CLUSTER_NAME
ARG GCLOUD_COMPUTE_ZONE
ARG GCLOUD_PROJECT_ID


# GCloud
ADD ./gcloud-install.sh /gcloud-install.sh 
RUN sh gcloud-install.sh
ADD ./gcloud-init.sh /gcloud-init.sh
RUN sh gcloud-init.sh

# Docker
RUN yum install -y docker

# Python 3
RUN yum install -y  https://centos7.iuscommunity.org/ius-release.rpm
RUN yum install -y python36u
RUN alias python3='python3.6'
CMD ["bash"]