# SQL Client for MongoDB [node-server]

This application provides an API that is used by Angular application for SQL Client for MongoDB.

## Technologies

* Node
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
3. Download required dependencies:

```
cd node-server
npm install
```

### Run application

###### You an run the application from the *Intellij Idea* or just use the *PM2*

#### Run with PM2

The next command will run node server

###### For Windows/Ubuntu:

```
pm2 start ./conf/dev/pm2.json
```

#### Run from Intellij Idea

1. Open Run > Edit Configurations... and add new Node.js configuration.
2. Tell to Intellij Idea where your app.js is located *(ex. node-server\app.js)*.
3. In Application parameters enter where your pm2.json is located *(ex. -c ./conf/dev/pm2.json)*.
4. Use **Shift + F10** to run the application.

### Running via Docker

To build web-app via Dockerfile:

1. Build an image from Dockerfile

```
docker build -t node-server:dev .
```
2. Create container from image

```
docker run -it -p 3000:3000 node-server:dev
```

3. Start container

```
docker start [container name]
```

##### After application is launched, go to [localhost:3000](http://localhost:3000/) and try it.
