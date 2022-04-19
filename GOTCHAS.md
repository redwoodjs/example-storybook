# GOTCHAS

Miscellaneous notes on potential issues and possible workarounds.

---

If Prisma errors, make sure there are not duplicate clients. Various version combinations of `yarn`/`prisma`/`redwoodjs` have been known to cause issues.

- https://github.com/prisma/prisma/issues/9553
- https://github.com/redwoodjs/redwood/issues/4605

**CORRECT**

`node_modules/.prisma`

**WRONG**

`api/node_modules/.prisma`

---

## TODO

- [ ] Look into Jest tests not picking up transitive dependencies, e.g. ArticleCell -> Article -> CommentForm when using "only changed" mode.

---

```sh
node ➜ /workspaces/example-storybook (feat/devcontainer) $ yarn redwood dev
/workspaces/example-storybook/node_modules/@prisma/client/runtime/index.js:35890
      throw new PrismaClientInitializationError(errorText, this.config.clientVersion);
            ^

PrismaClientInitializationError: Query engine library for current platform "debian-openssl-1.1.x" could not be found.
You incorrectly pinned it to debian-openssl-1.1.x

This probably happens, because you built Prisma Client on a different platform.
(Prisma Client looked in "/workspaces/example-storybook/node_modules/@prisma/client/runtime/libquery_engine-debian-openssl-1.1.x.so.node")

Searched Locations:

  /workspaces/example-storybook/node_modules/.prisma/client
  /workspaces/example-storybook/node_modules/@prisma/client
  /workspaces/example-storybook/node_modules/.prisma/client
  /workspaces/example-storybook/api/db
  /tmp/prisma-engines
  /workspaces/example-storybook/node_modules/.prisma/client


To solve this problem, add the platform "debian-openssl-1.1.x" to the "binaryTargets" attribute in the "generator" block in the "schema.prisma" file:
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "darwin"]
}

Then run "prisma generate" for your changes to take effect.
Read more about deploying Prisma Client: https://pris.ly/d/client-generator
    at Object.getLibQueryEnginePath (/workspaces/example-storybook/node_modules/@prisma/client/runtime/index.js:35890:13)
    at async Object.loadEngine (/workspaces/example-storybook/node_modules/@prisma/client/runtime/index.js:35554:33)
    at async Object.instantiateLibrary (/workspaces/example-storybook/node_modules/@prisma/client/runtime/index.js:35520:5) {
  clientVersion: '3.11.1',
  errorCode: undefined
}
```

https://github.com/microsoft/vscode-remote-release/issues/620
sudo chown -R node:node /workspaces/example-storybook/node_modules
https://stackoverflow.com/questions/66496890/vs-code-nopermissions-filesystemerror-error-eacces-permission-denied

https://stackoverflow.com/questions/48960320/locked-package-json-files-in-docker-container-using-docker-compose/58880425#58880425

---

```sh
web | <e> [webpack-dev-server] [HPM] Error occurred while proxying request localhost:8910/auth?method=getToken to http://[::1]:8911/ [EADDRNOTAVAIL] (https://nodejs.org/api/errors.html#errors_common_system_errors)
```