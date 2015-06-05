#WebSPA.QuickStart - 2015
*Designed by [@Daniel NGUYEN](https://www.linkedin.com/in/nguyendaniel)*
==================================

*Simple Web Application using AngularJS and MongoDb *

### SETUP

> Pre-requisites: src may be copy in a short path in order to launch npm and bower.

> WEB Client - Go to WebSPA.QuickStart\Assets, type command:

```
npm install  
bower install  
```

To launch the WEB Client:

```
grunt serve
```

> WEB API - launch WEB API under VS with F5. Check the iis deployment url.

> Configure global variable "hostapi" to fit this WEB API deployment url.

```
WebSPA.QuickStart\Assets\app\scripts\app.js
```

> MongoDB Database.
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

Database will be automatically create while using the application under the following name:
```html
<add key="MongoDbDatabaseName" value="MongoDbDatabaseName" /> 
```

### USEFUL LINKS

www.pathtoolong.com
https://github.com/angular-ui/bower-ui-grid