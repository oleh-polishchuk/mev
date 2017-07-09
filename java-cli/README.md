# SQL Client for MongoDB [CLI]

This cli application allows to make queries into mongodb by writing queries as declarative SQL, instead of the standard mongo syntax.

## Technologies

* Java
* Gradle

Getting started
---------------

Run the next command to download the repository

```
git clone -b develop https://github.com/oleh-polishchuk/mev.git
```

1. Download and install Java from [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Download and install Gradle 3.3 from [here](https://gradle.org/install/#manually)
3. Build a jar

```
cd mev/java-cli
gradle clean fatJar
```

4. Run it as a standalone jar

```
cd build/libs
java -jar java-cli-all-0.0.1.jar -i -h localhost:27017 -db test
```

or

```
cd build/libs
java -jar java-cli-all-0.0.1.jar -h localhost:27017 -db test -sql "select * from users"
```
You can use [-i] or [-sql <arg>] at one time

### Options

```
 -i,--interactiveMode         interactive mode
 -h,--host <arg>              hosts and ports in the following format (host:port), default port is 27017
 -db,--database <arg>         mongo database
 -sql,--sql <arg>             the sql select statement
```

## Acknowledgments
[vincentrussell](https://github.com/vincentrussell) for providing the [sql-to-mongo-db-query-converter](https://github.com/vincentrussell/sql-to-mongo-db-query-converter).