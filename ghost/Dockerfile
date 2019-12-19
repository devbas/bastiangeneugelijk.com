FROM ghost:2.28.0
RUN apt-get update -y && \
    apt-get install -y mysql-client
RUN npm install --save gatsby-source-ghost
COPY ./wait-for-it.sh /usr/local/bin/wait-for-it.sh