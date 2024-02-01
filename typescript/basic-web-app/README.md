# Basic typescript

```
pnpm init
```


After initializing the package.json file, add the Express and DotEnv packages to the project. In the terminal window, run the following command, where npm i is an alias to npm install:

```bash
pnpm i express dotenv
```

you need an env

for imports you can't simply write

```typescript
require('dotenv').config({ path: '../.env' });
```
as it gives this error

Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

instead write imports like

```typescript
import * as dotenv from 'dotenv';
```

## Generating tsconfig.json
Every TypeScript project utilizes a configuration file to manage various project settings. The tsconfig.json file, which serves as the TypeScript configuration file, outlines these default options and offers the flexibility to modify or customize compiler settings to suit your needs.

The tsconfig.json file is usually placed at the project’s root. To generate this file, use the following tsc command, initiating the TypeScript Compiler:

```bash
npx tsc --init
```

# Run

```bash
npx ts-node ./src/index.ts
```
