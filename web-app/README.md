# SQL Client for MongoDB [Web app]


### Running via Vagrant

To start VM:

    $ npm run vagrant-start

To stop VM:

    $ npm run vagrant-stop

To reload VM:

    $ npm run vagrant-reload

To recreate VM:

    $ npm run vagrant-recreate

# Docker

To build web-app via Dockerfile:

1. Build an image from Dockerfile

    `docker build -t web-app:dev .`

2. Create container from image

    `docker run -it -p 80:80 web-app:dev`

3. Start container

    `docker start [container name]`
