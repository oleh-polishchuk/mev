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
1. Download and install Gradle 3.3 from [here](https://services.gradle.org/distributions/gradle-3.3-all.zip)
2. Download and install NodeJS from [here](https://nodejs.org/dist/v6.11.0/node-v6.11.0-x64.msi)
2. Download and install MongoDB from [here](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.4.5-signed.msi/download)
2. Download and install VirtualBox 5.1.4 from [here](http://download.virtualbox.org/virtualbox/5.1.4/VirtualBox-5.1.4-110228-Win.exe)
2. Download and install Docker from [here](https://download.docker.com/win/stable/InstallDocker.msi)
2. Download and install Vagrant from [here](https://releases.hashicorp.com/vagrant/1.9.6/vagrant_1.9.6_x86_64.msi?_ga=2.211839313.476271233.1499063593-471280060.1499063593)

### Run application

###### You an run the application from the *Intellij Idea* or just running the Docker *docker-compose.yml*

#### Run with docker-compose.yml

The next command will build all required images and run the application

```
docker-compose up --build
```
