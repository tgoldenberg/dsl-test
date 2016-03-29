# Plumber

## Goals and spec
Imagine a directed acyclic graph of nodes that describes the user's intent to transform data in various ways.

Assume the following:

* We have three types of nodes
	+ Data - a table data 
	+ Join - joins two tables of data using a merge strategy
	+ Filter - given a table of data filters it and returns a result

* The user is only interested in the results of certain `Interesting` nodes in the graph. 
* The user can edit, add or remove nodes as they build their process and want to be notified when the results of an `Interesting` node have changed.

![Graph](https://raw.githubusercontent.com/datavore-labs/plumber/master/graph.png)
Take the following graph as an example when the user is interested in **Data2** and **Filter2**.  We want the following

* When `Data1` changes we want to execute the parts of the graph necessary to show the new data passed through `Filter2`. 
* When `Data2` changes we want to execute the parts of the graph necessary to show the new data passed through `Data2` and `Filter2`
* We never want to execute more that the necessary number of steps to get the user new data

### Your task
Write a function (and tests) that given a graph, the set of `interesting` nodes, and a set of changed nodes returns a new graph containing just the operations we need to execute to display the new data.

##### One example
Given the above graph, with interest in node `Filter2` and a change in `Join` return this graph `[ 'Data1', 'Data2', 'Join', 'Filter2' ]`
 
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