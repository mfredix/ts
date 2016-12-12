#Lab 3 - Formula One Configuration Tool
Congratulations - you have landed the coolest project in your career! 
The famous formula one team Ferrari has contracted you for their secret 
weapon in the upcoming season. They have developed a machine learning 
tool, called Enzo, that, based on years of collected data from race tracks around the 
world, will help them configure their cars in an optimal way. Your job 
is to integrate the ML into a web application the engineers will use 
during race preparations. Your are looking forward to sipping champagne 
during the Monaco Grand Prix, but as the requirements are discussed
you realize that this is far more complex than you expected and time is short...
  
So you need to get up to speed and develop a prototype, and you decide to 
go all in on ES 2015 modules.

The web app projects has lite-server as lab2, but also uses [SystemJS](https://github.com/systemjs/systemjs) 
for module loading. Skeletons for two modules have been implemented (not much but they load see [main.ts](app/main.ts)). 

## Design of Prototype
The web app should handle:
  
  * Select a track from a list of tracks (provided by Enzo)
  * Select a weather prognosis from a list of weather services (meteorology 
  is tricky and it is best to make an informed decision from multiple sources)
  * Submit of conditions to Enzo.
  * Enzo will return a car configuration

You figure that this maps well to a set of modules that will handle the communication 
with the data sources. For the prototype you will need to stub the services:
    
The track service returns a list of tracks, Barcelona (Spain), Spa Francorchamps (Belgium) and 
    Suzuka (Japan). The JSON should be something like:
    
``` 
    {
        "name": "Barcelona",
        "country": "Spain"
    }
``` 
    
 The weather service returns, at least for the prototype, a fixed set of 
     descriptors (SUNNY, CLOUDY, DRIZZLE, RAIN, HEAVY RAIN) and a temperature:
     
 
``` 
    {
        "conditions": "SUNNY",
        "temperature": 28
    }
``` 
    
  Enzo will return a car configuration, this will be complex because there are 
  many things you can adjust on a F1 car, but for the prototype we will use front and back wing 
  setting, the suspension and tires to use. Something like
  
``` 
    {
        "configuration": {
        
            "frontwing": 5,
            "backwing": 8,
            "suspension": 
            [
                {
                  "stiffness": 90,
                  "damping": 47
                },
                {  
                  "stiffness": 90,
                  "damping": 47
                },
                {
                  "stiffness": 90,
                  "damping": 47
                },
                {
                  "stiffness": 90,
                  "damping": 47
                }
                                                },
            ],
            "tire": "SOFT"
        }
    }
```   
The wing settings are angles, tire is one of "SUPER_SOFT", "SOFT", "HARD" or "RAIN". The most complex setting is 
the suspension, we have four on the car and they may be adjusted individually. The numbers are 0-100 for now. 
Many more parameters will be added as the project evolves, parameters for the engine, gearbox etc.

## Extras

* TypeScript has built-in support for [React](https://facebook.github.io/react/), if React is your thing you 
perhaps want to try it with TypeScript.
* [VueJS](https://vuejs.org/) also plays well with TypeScript (typings are included in the frameworks npm package).
* [Aurelia](http://aurelia.io/) is another framework that supports TypeScript. 
* [Angular2](https://angular.io/) is written in TypeScript from scratch. Lab 4 is all about Angular2!