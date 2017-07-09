# SQL Client for MongoDB

The main feature of the client is that you can write queries in it as declarative SQL, instead of the standard mongo syntax.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Tools and technologies used:

- [Docker](https://store.docker.com/editions/community/docker-ce-desktop-windows)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](https://www.vagrantup.com/downloads.html)
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### Installing

Run the next command to download the repository 

```
git clone -b develop https://github.com/oleh-polishchuk/mev.git
```

1. Download and install Java from [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Download and install NodeJS from [here](https://nodejs.org/dist/v6.11.0/node-v6.11.0-x64.msi)
3. Download and install Docker from [here](https://download.docker.com/win/stable/InstallDocker.msi)
4. Download and install VirtualBox from [here](http://download.virtualbox.org/virtualbox/5.1.4/VirtualBox-5.1.4-110228-Win.exe)
5. Download and install Vagrant from [here](https://releases.hashicorp.com/vagrant/1.9.6/vagrant_1.9.6_x86_64.msi?_ga=2.211839313.476271233.1499063593-471280060.1499063593)

### Run application

###### You an run the application from the *Intellij Idea* or just running the Docker *docker-compose.yml*

#### Run with docker-compose.yml

You can run the whole project with one command

```
docker-compose up --build
```

and visit: [localhost:80](http://localhost:80/#/)

#### Run with *Intellij Idea*

Or run each project separately:

- spring-server, click [here](https://github.com/oleh-polishchuk/mev/tree/develop/mev-api)

- node-server, click [here](https://github.com/oleh-polishchuk/mev/tree/develop/node-server)

- web-application, click [here](https://github.com/oleh-polishchuk/mev/tree/develop/web-app)

- java-cli, follow [here](https://github.com/oleh-polishchuk/mev/tree/develop/java-cli)
