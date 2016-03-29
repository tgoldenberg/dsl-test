# plumber

## Goals and spec
Image a graph of nodes that describes the users intent to transform data in various ways.
Assume the following 

* We have three types of node
	+ Data - describes a source of data 
	+ Join - joins two data sources using a merge strategy
	+ Filter - filters data

* The user is only interested in the results of some of these nodes. 

* The user can edit, add or remove nodes as they build their process.



Given a set of possibly connected nodes `G = [a, b, c, ...]` and a subset of output nodes `N = [b, c, ...]` optimally execute the graph and return the mapping of `{ node : result }` in some way

## Project setup

### Node.js
+ Install node.js we love using [nvm](https://github.com/creationix/nvm) to mange node versions
+ Install project dependencies `npm install`
+ Run the unit tests to make sure it worked `npm test`

### Webstorm
If you don't have a favorite editor I suggest webstorm setup as follows
+ Install [webstorm](https://www.jetbrains.com/webstorm/download)
+ Open webstorm and `file > open...` this projects directory
+ Setup es6 - `file > settings > Languages and Frameworks > Javascript` from the dropdown choose `ECMAScript 6`
+ Setup linter - `file > settings` in the search bar type `eslint` in the menu that comes up check the `enable` box at the top

### useful commands

Install the project dependencies
```
npm install 
```

Lint the code and run the tests on the commandline
```
npm test // lint and run tests
```

Start a development server and run the tests in the browser (useful for debugging)
```
npm run test-web
open localhost:8080/test.bundle // the tests are now running here
```

Start the development server with the app running
```
npm run serve
open localhost:8080 // your app is now running here
```

Compile into `bin`
```
npm run compile
```