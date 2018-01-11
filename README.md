#WebSPA.QuickStart - 2015
> WebSPA.QuickStart is a simple Web Application using AngularJS and MongoDb.

## Prerequisites

* Install Node.js
* Launch nNde.js console to install grunt-cli and bower, using command :

```
npm install -g grunt-cli bower
```

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) -


## Installation

**Retrieval and install client packages**

This project was scaffolded with yeoman.
> src code may be copy in a short path in order to install client packages required.

> Go to directory WebSPA.QuickStart\Assets, type command:

```
npm install  
bower install  
```

This will retrieve all the package needed by this WEB application.

**Launch the MongoDB Database**

Check the web.config 

```html
<add key="DbConnectionString" value="mongodb://localhost:27017" />
```

Launch a MongoDB instance, type under console:

```
C:
cd C:\Program Files\MongoDB\Server\3.0\bin
mongod.exe --dbpath [\CustomMyDataPath]
```

While using the application, database will be automatically create under the name:
```html
<add key="MongoDbDatabaseName" value="MongoDbDatabaseName" /> 
```

## Launch the application

> To launch the WEB application, in nodejs console, type the command:

```
grunt serve
```

> To launch the WEB API. Under VS with F5. Check the iis deployment url.

> Configure global variable "myHostObject" to fit this WEB API deployment url.

```
WebSPA.QuickStart\Assets\app\scripts\app.js

    .value('myHostObject', {
        url: 'http://localhost:33652',
        port: "33652"
    });

```

## USEFUL LINKS

www.pathtoolong.com
https://github.com/angular-ui/bower-ui-grid
http://docs.mongolab.com/languages/


https://www.mongodb.com/blog/post/introducing-20-net-driver
mongodb.github.io/mongo-csharp-driver/2.0/getting_started/quick_tour/
https://github.com/mongolab/mongodb-driver-examples/blob/master/c%23/CSharpSimpleExample.cs
https://github.com/mongolab/mongodb-driver-examples
http://brianhann.com/6-ways-to-take-control-of-how-your-ui-grid-data-is-displayed/
