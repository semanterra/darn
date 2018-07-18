This is one way of using yarn + lerna.

Builds are always

See `packages/someclient/src/main.ts` for top level.

There's no explicit support for having multiple build modes with different output directories.
To add that:
* create tsconfig.buildmode.json files in each package that creates a
different output directory.
* add scripts to package.jsons

Note that with multiple buildmodes, imports using index.ts don't work, because lib/index.js is explicitly pointed at by the package's package.json

