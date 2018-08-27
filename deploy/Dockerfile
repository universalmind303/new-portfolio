FROM centos:7
ARG GCLOUD_SERVICE_KEY
ARG GCLOUD_CLUSTER_NAME
ARG GCLOUD_COMPUTE_ZONE
ARG GCLOUD_PROJECT_ID

ADD ./gcloud-install.sh /gcloud-install.sh 

RUN sh gcloud-install.sh
ADD ./gcloud-init.sh /gcloud-init.sh
RUN sh gcloud-init.sh
RUN yum install -y docker

CMD ["bash"]