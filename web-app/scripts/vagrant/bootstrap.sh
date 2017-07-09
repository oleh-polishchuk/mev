#!/bin/bash

if [ "$EUID" -ne 0 ]; then
  echo "Please run this script on behalf of root user"
  exit 1
fi

# ------------------- #
#       NodeJS        #
# ------------------- #

# install Node.js
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
apt-get install -y nodejs

# ------------------- #
#    Grunt & Bower    #
# ------------------- #

apt-get install -y g++
apt-get install -y libkrb5-dev

npm install -g grunt-cli
npm install -g bower

# ------------------- #
#        Gulp         #
# ------------------- #

npm install gulpjs/gulp-cli -g
npm install gulpjs/gulp#4.0 -D

# ------------------- #
#      dos2unix       #
# ------------------- #

apt-get install -y dos2unix

# ------------------- #
#       NGINX         #
# ------------------- #

apt-get install -y nginx

# configure default site
cat >/etc/nginx/sites-available/default <<EOL
server {
        listen 80 default_server;
        listen [::]:80 default_server ipv6only=on;

        ##
        # Basic Settings
        ##

        add_header Cache-Control no-cache;

        ##
        # Gzip Settings
        ##

        gzip on;
        gzip_disable "msie6";

        gzip_vary on;
        gzip_proxied any;
        gzip_comp_level 6;
        gzip_buffers 16 8k;
        gzip_http_version 1.1;
        gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

        location / {
            root /project/app;
            index index.html index.html;
            sendfile off;
        }

        ##
        # Application Settings
        ##

        location ~* .*\/app\/.*\.(css)$ {
            root /project;
            add_header Cache-Control "max-age=31536000";
            sendfile off;
        }

        location ~* .*\/app\/.*\.(js)$ {
            root /project;
            add_header Cache-Control "private, max-age=31536000";
            sendfile off;
        }

        location ~* .*\/app\/.*\.(jpg|png|gif|svg|ico)$ {
            root /project;
            add_header Cache-Control "max-age=86400";
            sendfile off;
        }

        location ~* .*\/app\/.*\.(otf|eot|ttf|woff|woff2)$ {
            root /project;
            sendfile off;
        }

        location ~ /api {
            proxy_pass http://172.16.1.1:3000;
        }

        # Max upload size
        client_max_body_size 100M;
}
EOL

# reload configuration
service nginx reload
