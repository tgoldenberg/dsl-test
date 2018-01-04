# JavaScript Syntax
We use [es6](http://es6-features.org) which a more modern javascript as of ~2015. Almost all modern browsers support es6 features.

The [MDN resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript) on JS is pretty comprehensive.

MDN in general is great for reading about specific language features, such as [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).


## Literals
Strings can be single or double quoted, there is no difference there: `'1' === "1" // same`

There are template strings with the backtick: `` ` ``, everything between backticks is used, and you can use `${someVar}` to inser a variable into the string.
```
const greeter = (name) => `Hello, $name.`;
console.log(greeter('Dante')); // Hello, Dante.

const shoutGreeter = (name) => `HELLO, ${name.toUpperCase()}!`
console.log(greeter('Dante')); // HELLO, DANTE!
```

Numbers are as expected. There's no real difference between integers, longs, etc. in JS: `1123, 1.23, -123.2123`.

Booleans are `true` and `false`.

## [Variable Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Declarations)
In javascript, there are 3 ways to declare a variable: `var`, `const`, `let`. Don't use `var`.

Essentially, JS started with just `var`, which is "hoisted" to the highest scope possible. This is a problem, since you get some unexpected results.

`let` and `const` are [block scoped](http://es6-features.org/#BlockScopedVariables), meaning they only exist in their block and down. Example:

```
for (let i = 0; i < 10; i++) {
  console.log(i); // 1, 2, ..., 9
}
console.log(i); // throws a "ReferenceError: i is not defined" exception
```

Essentially, `const` cannot be re-assigned, but can be mutated. `let` can be re-assigned. Ex:
```
const point = {
  x: 10,
  y: 10,
};
console.log(point); // { x: 10, y: 10}
point.x = 100;
console.log(point); // { x: 100, y: 10}
point = { x: 10, y: 10 }; // Throws "TypeError: Assignment to constant variable"

let reAssignMe = 100;
console.log(reAssignMe); // 100
reAssignMe = { x: 10, y: 20 }; // don't do this in actual code!! Changing variable types is BAD!!
console.log(reAssignMe); // { x: 10, y: 20 }
```

## [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
Almost evertything in JS is an object. There are literal objects which are string key/value maps (think hash map):
```
// Declare objects with {} brackers:
const myObj = {
  someKey: 10,
  otherKey: 20,
  // Properties are case sensitive
  somekey: 'case-sensitive',
  // Can be nested
  subObj: {
    foo: 100,
    bar: 23,
  }, // you may notice trailing commas -- reduces the diffs when using git and adding/removing properties
};
console.log(myObj);

// Use the dot notation for property access:
console.log(myObj.someKey); // 10
console.log(myObj.somekey); // 'case-sensitive'
console.log(myObj.subOjb.foo); // 100

// For dynamic property access, use the bracket notation access:
console.log(myObj['someKey']); // 10

const accessVar = 'someKey';
console.log(myObj[accessVar]); // 10
console.log(myObj[accessVar.toLowerCase()]); // 'case-sensitive'


// You can get the keys of an object with Object.keys(myObj):
console.log(Object.keys(myObj)); // ['someKey', 'otherKey', 'somekey', 'subObj']
console.log(Object.keys(myObj.subObj)); // ['foo', 'bar']
```

When working with objects, you can use the spred `...` syntax to update/merge them:
```
const base = {
  foo: 10,
};
const extended = {
  ...base,
  bar: 25,
};
console.log(extended); // { foo: 10, bar: 25 }

// They get applied in order of appearence, and you can interleave declarations:
const secondExtend = {
  bar: 1000
  ...extended,
  baz: 'baz',
  ...base,
};
console.log(secondExtend); // { foo: 10, bar: 25, baz: 'baz' };
```

## [Equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
Since javascript came from a place of mistakes and auto-casting, you might think to use `==` to check equality.
Don't.
It is actually an "abstract" equality check -- it can cast the types on either side when checking. So, `'1' == 1 // true`

Always use `===` to check for equality -- it checks for "strict" equality: `1 === "1" // false`.

Objects in JS are compared and passed by refernece, not value!
```
const a = { x: 10 };
const b = { x: 10 };
const c = a; // by reference!

console.log(a === b); // false
console.log(a === c); // true
a.x = 100; // since c and a share a reference, this will touch c!
console.log(a === c); // true
console.log(c); // { x: 100 };
```

## Functions
Functions in javascript can be created and called as:
```
function myFnName(arg1, arg2, arg3) {
 // some body using args
 return arg1 * arg2 * arg3;
}

console.log(myFnName(1, 2, 3)); // 1 * 2 * 3 = 6
```

Alternatively, you can use the much more terse [arrow function](http://es6-features.org/#ExpressionBodies), which can ommit `return` when the function body is 1 expression:
```
const myFnName = (arg1, arg2, arg3) => arg1 * arg2 * arg3;
console.log(myFnName(1, 2, 3)); // 1 * 2 * 3 = 6

const multiLineFn = (arg1, arg2, arg3) => {
  const intermediate = arg1 * arg2;
  return intermediate * arg3;
};
console.log(multiLineFn(1, 2, 3)); // 1 * 2 * 3 = 6
```

The major difference between arrow functions `() => {}` and a regular function `function(){}` is the `this` binding of arrows shares the parent.
Since this project doens't use classes or `this`, that benefit isn't used. [MDN on this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)


## [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
Arrays are very, very useful in javascript. It is smart to keep arrays to a single type, as they are much easier to reason about and operate over.
```
// Declare arrays with [] brackets:
const myArr = [1, 2, 3, 4];

// Arrays can be extended with push/pop:
myArr.push(10);
console.log(myArr); // [1, 2, 3, 4, 10];

// You can map over an array to make a new one, arrow functions are nice here!
myArr.map(x => x * 2); // [2, 4, 6, 8, 20];

// You can filter arrays:
myArr.filter(x => x % 2 === 0); // [2, 4, 10];

// You can also reduce!
const out = myArr.reduce((acc, item) => acc + item, 0); // initial state 0
console.log(out); // 0 + 1 + 2 + 3 + 4 + 10 = 20
```

## [Modules](http://es6-features.org/#ValueExportImport)
You may have seen things like `var myLib = require('some-resource-library');`.
Instead of the `require` syntax, we use the ES6 [Modules](http://es6-features.org/#ValueExportImport) syntax.

Basically, any file can `export` bindings that can be referenced via `import` in another file. Avoid circular dependencies (`a.js` exports to and imports from `b.js`).

Example:
a.js
```
export const sum = (a, b) => a + b
export const dif = (a, b) => a - b
export default () => console.log('module-level default exported binding');
```

b.js
```
import { sum, diff } from './a'; // import select symbols
// import * as aFns from './a'; // import everything as 'aFns'
// import aDefault from './a'; // imports the 'module-level default exported binding' one

console.log(sum(1, 2)); // 3
console.log(diff(2, 1)); // 1
```
