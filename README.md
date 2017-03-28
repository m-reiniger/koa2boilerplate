# Koa 2 Boilerplate

## Disclaimer

This is currently a work in progress, don't bother using this until I publish version 1.0.0

You are free to use it anyway and you are welcome to hint me flaws and wishes. Actually hints are most welcome. 

## Intention
I do this for a new project and possible future projects. I need a boilerplate, that covers the basics of koa 2 and gives me the possibility to just implement business logic, without bathering about process management, logging, routing, and other boilerplaty stuff.

## History
This is based on a Koa 1 boilerplate I made for the company I work for which was based on an Express boilerplate I made for the same company. So hang in there, this will eventually be all new and shiny, as soon as I get this done to my satisfaction.


## Structure

### Modules
Most of my backend/middleware Projects are microservices. Microservices tend to be scattered around. So I started to bundle them into packages that make up a suite of services that belong together.

Modules (resided in /application/Modules) are essentially individual processes that can rely on the same code base. You run them with pm2. They are still individual processes and they don't know anything about each other.

Each Module can have it's own Services and Adapters or use global Services and Adapters.

### Controller

Example: ```application/Modules/server/Controller/VersionController.js```

Controller are basic Request Handlers. This is the first place a request resides in your code.


### Service
Example: ```applicaction/Modules/server/Service/Version/VersionService.js```

Services do the actual work. They are the middleware and get called by Controllers.

### Adapter
Example: ```application/Adapter/EnvironmentAdapter.js```

Adapters - you might also call them Connector - are components which reside code that helps you access databases, other services, messaging systems etc.

### Configuration 

Idea from Zend2, although I hate PHP, Zend has some nice ideas. 

### Development Docker

is in there

### Deployment

to be done

### Testing
use jest