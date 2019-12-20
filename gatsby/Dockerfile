FROM node:alpine
RUN npm install --global gatsby-cli && gatsby telemetry --disable

WORKDIR /app

COPY ./package.json .
RUN npm install 

COPY . . 

CMD ["gatsby", "develop", "-H", "0.0.0.0"]

# FROM node:alpine

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

# RUN \
#   apk add --no-cache python make g++ && \
#   apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
#   rm -fR /var/cache/apk/*

# RUN npm install -g gatsby-cli

# WORKDIR /app
# COPY ./package.json .
# RUN npm install
# # COPY . .
# RUN npm run develop -H 0.0.0.0
# CMD ["npm", "run", "develop", "-H", "0.0.0.0" ]

# FROM node:12-alpine as builder
# # Get the necessary build tools
# RUN apk update && apk add build-base autoconf automake libtool pkgconfig nasm

# # Add the package.json file and build the node_modules folder
# WORKDIR /app
# COPY ./package*.json ./
# RUN mkdir node_modules && npm install

# # Get a clean image with gatsby-cli and the pre-built node modules
# FROM node:12-alpine
# RUN npm install --global gatsby-cli && gatsby telemetry --disable && mkdir /save
# COPY --from=builder /app/node_modules /save/node_modules