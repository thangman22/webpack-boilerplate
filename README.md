Webpack 4 Boilerplate
===========

[![Dependency Status](https://david-dm.org/cvgellhorn/webpack-boilerplate.svg)](https://david-dm.org/cvgellhorn/webpack-boilerplate)
[![devDependency Status](https://david-dm.org/cvgellhorn/webpack-boilerplate/dev-status.svg)](https://david-dm.org/cvgellhorn/webpack-boilerplate)

> Plain webpack 4 boilerplate with Babel, SASS on board

## Requirements
You only need <b>node.js</b> pre-installed and you’re good to go.

## Download
Download in current directory
```sh
$ curl -L -o master.zip https://github.com/thangman22/webpack-boilerplate/archive/1.0.zip && unzip master.zip && rm master.zip && mv ./webpack-boilerplate-master/{.,}* ./ && rm -r ./webpack-boilerplate-master
```

## Setup
Install dependencies
```sh
$ yarn
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8080/](http://localhost:8080/)
```sh
$ yarn dev
```
## Deployment
Build the current application
```sh
$ yarn build
```

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
