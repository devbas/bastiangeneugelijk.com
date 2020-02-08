FROM ghost:3.2.0
RUN apt-get update -y && \
    apt-get install -y mysql-client
RUN ghost config url https://ghost.bastiangeneugelijk.com
RUN npm install --save gatsby-source-ghost

COPY ./robots.txt /var/lib/ghost/content/themes/casper/robots.txt

# Github token: 166ddbd80d463c62142fbda8dc2056c460ca3f74

COPY ./wait-for-it.sh /usr/local/bin/wait-for-it.sh