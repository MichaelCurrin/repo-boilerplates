# Usage

## Run dev server

This will perform lint fixes, compile TS to JS and serve the app.

```sh
$ yarn start
```

Open in the browser:

- http:localhost:8080


## Lint

Apply ESLint and Prettier formatting fixes.

```sh
$ yarn lint:fix
```

Note that this is run as part of the `start` command above.


## Compile

The build and serve commands handle TypeScript as part of the Vue and Babel setup. But you can run the TypeScript compilation alone to check errors, as this is quicker to run.

```sh
$ yarn compile
```

That includes specifying parameters which are only needed for this command - they are kept out of the TS config as Vue doesn't need them.

See [Deploy](deploy.md) for using the build command.