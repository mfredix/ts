#Lab 1 - A Collections Library for the Enterprise Developer
One of the TypeScript selling points is that is supposed to appeal to the "enterprise developer". Hey, you think, 
let's give them what they want: a TypeScript implementation of the Java collections library. You figure that this 
 something that can be sold for plenty of dollares to those dev organizations, kicking off your start up 
  on a nice path. If it crashes and burns you can open source the code and enjoy the open source fame.
  
A not totally reliable colleague even helped you by proposing the equivalent interfaces, see [collections.ts](collections.ts).

Note that this lab is about container classes, where generics are natural. If you come from a 
pure JavaScript (or other dynamically typed language) background you probably want to have a look at the 
documentation, see [Generics](https://www.typescriptlang.org/docs/handbook/generics.html).   
  
Feel free to comment out methods if you think there are to many. You can always return to them later.
   
You can start out with just adding code to ```collections.ts```, to compile just run 
 ```
>npm run tsc
 ```  
and execute the output by running the file in node:
   
 ```
>node collections.js
 ```  
However, you of course want test code, which you also write in TypeScript, see [collections-spec.ts](collections-spec.ts) 
for an embryo.
To run the tests:
 ```
>npm run test-once
 ```  
See [Jasmine](https://jasmine.github.io/) for docs on how to write assertions.
 
## Extras
 
 * Some say that functional is the way to go, and Java has some. A full streams implementation 
 is probably tricky, but some is straightforward, like a ```map()``` function that applies a lambda 
  on all elements and returns a new collection with the transformed values. And so on - 
  the ```Map``` interface in Java has several methods that has been omitted in the provided code, 
  why not add them -loads of fun!
 * After coding away for a while you perhaps wonder if this was such a good idea; what would a modern 
  TypeScript collections library look like? Also, how should it inter-operate with the JavaScript standard lib?
 
 If Java collections is not your bag, try the equivalent .NET or your other favourite framework.  
