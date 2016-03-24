# web-base
Use this to start other web projects. It gives you a good base to start from including
+ has an .editorconfig to enforce typographic style like tabs instead of spaces and no trailing whitespace
+ uses eslint to enforce javascript coding conventions such as no `var`s perfer arrow functions, etc
+ compiles es6 using babel and webpack (includes sourcemaps)
+ compiles jade -> html or strings (.tpl) 
+ compiles less -> css adding browser specific prefixes where necessary


## Setup and develop
```
npm install
npm test // run tests
npm run lint // lint and auto fix formatting errors
npm run test-web //  run tests in browser with webpack-dev-server
npm run serve // run webpack-dev-server with hot module reloading
open localhost:8080
```

Compile into `bin`
```
npm run compile
```
