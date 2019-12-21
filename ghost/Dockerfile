FROM ghost:3.2.0
RUN apt-get update -y && \
    apt-get install -y mysql-client
RUN ghost config url https://ghost.bastiangeneugelijk.com
RUN npm install --save gatsby-source-ghost
RUN ghost update 3.2.0
COPY ./wait-for-it.sh /usr/local/bin/wait-for-it.sh