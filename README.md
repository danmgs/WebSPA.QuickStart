#WebSPA.QuickStart - 2015
==================================

*Simple Web Application AngularJS and MongoDb *

### SETUP

> Pre-requisites: src may be copy in a short path in order to launch npm and bower.

> WEB Client - Go to WebSPA.QuickStart\Assets, type command:
npm install  
bower install  

grunt serve to launch the WEB Client.

> WEB API - launch WEB API under VS with F5. Check the iis deployment url.

> Configure global variable "hostapi" to fit this WEB API deployment url.
WebSPA.QuickStart\Assets\app\scripts\app.js

> MongoDB Database.
Check the web.config <add key="DbConnectionString" value="mongodb://localhost:27017" />
Launch a MongoDB instance.

<add key="MongoDbDatabaseName" value="MongoDbDatabaseName" /> 
Database will be automatically create while using the application.

### USEFUL LINKS

www.pathtoolong.com