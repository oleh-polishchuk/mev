# Create image based on the official Node 6 image from dockerhub
FROM ubuntu:14.04

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY bootstrap.sh /usr/src/app

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y nano
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y git
RUN apt-get install -y g++
RUN apt-get install -y libkrb5-dev
RUN apt-get install -y dos2unix

# Install dependecies & nginx
RUN dos2unix /usr/src/app/bootstrap.sh
RUN /bin/bash -c "source ./bootstrap.sh"

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 80

# Serve the app
ENTRYPOINT pm2 start ./conf/ci/pm2.json && /bin/bash