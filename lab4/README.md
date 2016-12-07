
# Lab 4 
 This lab is based on the Angular 2 "Tour of Heroes" example, see [ToH](https://angular.io/docs/ts/latest/tutorial/).
 While marvelling over the ingenuity and richness of Angular 2, you realize something 
 really strange: the dashboard's display of top heroes is rather ad hoc. You decide to enhance 
 the application:
 
 * Users should be able to vote on their favourite heroes
 * The dashboard's hero display should be based on who has the most votes
  
## Noteworthy
 This lab requires a fairly new version of (at least npm) (> 3.0). If you have it 
 installed all is fine, you can compile the TypeScript code by
 ```
  >npm run tsc
 ```
 and start the server by
 ```
 >npm run lite
 ```

(see the package.json file for the npm scripts available) and then visit 

```
http://localhost:3000/dashboard
```
If you don't have (I don't) a new version of npm you can install it 
locally by:
 ```
 >npm install npm
 ```
and to have that version first on your path:
 ```
 >export PATH=$(npm bin):$PATH
 ```
(All this assumes a unix like environment. Are you on Windows? Well then 
you are probably up to date with the latest and greatest.)
