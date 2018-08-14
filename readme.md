This is one way of using yarn + lerna with typescript.

See `packages/someclient/src/main.ts` for top level.

There's no explicit support for having multiple build modes with different output directories.
To add that:
* create tsconfig.buildmode.json files in each package that creates a
different output directory.
* add scripts to package.jsons

Note that with multiple output directories, imports using index.ts probably don't work, because lib/index.js is explicitly pointed at by the package's package.json

The use of typescript references and some related structure are from [learn-a](https://github.com/RyanCavanaugh/learn-a).  See also the "References" section of [this Medium post](https://itnext.io/typescript-3-0-what-has-come-19f81d1fac60).
