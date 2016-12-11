# TypeScript course, lab assignments


## [Lab 1 - Starter](lab1/README.md)  
This is about getting started with TypeScript.


## [Lab 2 - Typed JQuery](lab2/README.md)  
What does a simple web app with a well known third party library look like?

## [Lab 3 - ES2015 Modules](lab3/README.md)  
TypeScript is about maintainability of large applications. 
Large applications should be written as modules, how does TypeScript work with modules? 

## [Lab 4 - Angular 2](lab4/README.md)  
Angular 2 is written in TypeScript, let's take it for a spin! 

## About the labs
The labs require a fairly new version of npm (at least > 3.0), at least if you want 
typings installed with npm. If you have a good version of npm 
installed all is fine, you can compile the TypeScript code by running the npm scripts of the project:
```
>npm run tsc
```
(after installing typescript of course, ```npm install```, 
also, see the ``package.json`` file for the npm scripts available).
 
If you don't have a new version of npm you can install it 
locally by:
 ```
 >npm install npm
 ```
and to have that version first on your path:
 ```
 >export PATH=$(npm bin):$PATH
 ```
 Then you can run the npm commands as above, install all dependencies by 
```
 >npm install
```
and off you go!

(All this assumes a unix like environment. Are you on Windows? Well then 
you are probably up to date with the latest and greatest.)



