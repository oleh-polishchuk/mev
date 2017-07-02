#!/bin/bash

if [ "$EUID" -ne 0 ]; then
  echo "Please run this script on behalf of root user"
  exit 1
fi

# ------------------- #
#       NodeJS        #
# ------------------- #

curl -sL https://deb.nodesource.com/setup_6.x | sudo bash -
apt-get install -y nodejs

# ------------------- #
#         PM2         #
# ------------------- #

npm install -g pm2
