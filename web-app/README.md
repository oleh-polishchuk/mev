# SQL Client for MongoDB [web-app]

Angular application that helps you write queries to Mongodb as declarative SQL, instead of the standard mongo syntax.

## Technologies

* Angular
* Gulp
* Yarn

Getting started
---------------

Run the next command to download the repository

```
git clone -b develop https://github.com/oleh-polishchuk/mev.git
```

1. Download and install NodeJS from [here](https://nodejs.org/en/download/)
2. Download and install VirtualBox from [here](https://www.virtualbox.org/wiki/Downloads)
3. Download and install Vagrant from [here](https://www.vagrantup.com/downloads.html)
3. Download required dependencies and build project:

```
cd web-app
npm install && bower install && gulp
```

### Running via Vagrant

To start VM:

    npm run vagrant-start

To stop VM:

    npm run vagrant-stop

To reload VM:

    npm run vagrant-reload

To recreate VM:

    npm run vagrant-recreate

### Running via Docker

To build web-app via Dockerfile:

1. Build an image from Dockerfile

```
docker build -t web-app:dev .
```
2. Create container from image

```
docker run -it -p 80:80 web-app:dev
```

3. Start container

```
docker start [container name]
```


## Running the tests

For running the unit tests (Karma+Jasmine)

```
npm run test
```

For running the end-to-end tests (Protractor)

1. Run whole project as explained [here](https://github.com/oleh-polishchuk/mev/tree/develop)

2. Run selenium-server

```
npm run selenium-server
```

3. Run tests

```
npm run selenium
```
