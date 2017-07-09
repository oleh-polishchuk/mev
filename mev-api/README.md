# SQL Client for MongoDB [spring-app]

This application provides an API that is used by Node application to convert sql query to mongo query.

## Technologies

* Java
* Gradle
* Spring Boot
* etc...

## Installation

### Prepare en environment:

Run the next command to download the repository

```
git clone -b develop https://github.com/oleh-polishchuk/mev.git
```

1. Download and install Java from [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

### Run application

###### You an run the application from the *Intellij Idea* or just running the *gradlew.bat*

#### Run with gradlew.bat

The next command will download Gradle, all dependencies and run the application

###### For Windows:

```
gradlew.bat bootRun
```

###### For Ubuntu

```
gradlew bootRun
```

#### Run from Intellij Idea

1. Download and extract Gradle from [here](https://services.gradle.org/distributions/gradle-3.4.1-bin.zip). Tell to Intellij Idea where your gradle is located.
1. Open project from Intellij Idea. Download dependencies using Gradle.
1. Right click on **MevApiApplication.java** and select _**Run application**_

### Running via Docker

To build web-app via Dockerfile:

1. Build an image from Dockerfile

```
docker build -t spring-server:dev .
```
2. Create container from image

```
docker run -it -p 8080:8080 spring-server:dev
```

3. Start container

```
docker start [container name]
```

##### After application is launched, go to [localhost:8080](http://localhost:8080/) and try it.

## Running the tests

Use **gradle** to running the tests

```
gradle test
```
