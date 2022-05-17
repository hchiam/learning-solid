# Learning Solid.js [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://github.com/hchiam/learning-template/blob/main/LICENSE)

Just one of the things I'm learning. https://github.com/hchiam/learning

It looks mostly like React, but compiles to real DOM nodes and works directly with the real DOM without using a virtual DOM, and uses true reactivity (surgically updates just the DOM elements necessary, without needing to refresh entire components).

<!-- Add reference link(s) here -->

https://www.youtube.com/watch?v=hw3Bx5vxKl0

https://www.solidjs.com

https://github.com/solidjs/solid

## From scratch, with TypeScript

```sh
npx degit solidjs/templates/ts my-app # or npx degit solidjs/templates/js my-app
cd my-app
npm i # or yarn
npm run dev # or yarn dev
```

and in `.tsconfig`:

```json
"compilerOptions": {
  "jsx": "preserve",
  "jsxImportSource": "solid-js",
}
```

## Or installing as dependencies to existing project

```sh
npm install solid-js babel-preset-solid
```

and in `.babelrc`:

```json
"presets": ["solid"]
```

<!-- ## Starting by testing out this repo

Using [`yarn`](https://github.com/hchiam/learning-yarn): (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-solid.git && cd learning-solid && yarn; # and then ...
```

Or with `npm`: (triple-click to select all)

```bash
git clone https://github.com/hchiam/learning-solid.git && cd learning-solid && npm install; # and then ...
``` -->

## Learn more

https://www.solidjs.com
