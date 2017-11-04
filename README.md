[![npm version](https://badge.fury.io/js/typescript-batch-compiler.svg)](https://badge.fury.io/js/typescript-batch-compiler)

# typescript-batch-compiler

> usecase: a batch, in contrast to a project, of ts files that must be watched and compiled. These all have individual scopes, for example see this blog post about Polymer 2 with TypeScript.

**work in progress**

Essentially, this is a wrapper around [node-typescript-compiler]() that watches TypeScript files in a directory
and runs the TypeScript compiler when one of the files changes with one important distinction from the normal compiler:
the files are not considered to be in each others scope.

This is particularly convenient when building Polymer 2 components with TypeScript. Each TypeScript file is scoped by its
Polymer component and are not one shared project. For more information 
read [this article](https://github.com/mdvanes/polygram/blob/TypeScript/BLOG.md) (work in progress).

Supports TSLint.


# Installation

`npm i -g typescript-batch-compiler typescript`


# Development

Run `node index.js`.