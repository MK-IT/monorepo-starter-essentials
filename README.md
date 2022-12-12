<p align="center">
  <a href="https://nextjs.org">
    <img alt="NextJS" src="https://user-images.githubusercontent.com/4060187/196936123-f6e1db90-784d-4174-b774-92502b718836.png" width="60" />
  </a>
</p>

<h1 align="center">
  Monorepo Starter Essentials
</h1>

Monorepo project starter extended with tools to help you boost your development experience. Powered by [Turborepo](https://turbo.build/repo)

_Help us improve by [submitting suggestions and bug reports](https://github.com/MK-IT/monorepo-starter-essentials/issues)._

## Table of Contents

* [Getting Started](#getting-started)
* [Features](#features)
  * [Main Features](#main-features)
  * [Extra Features](#extra-features)
* [What's inside](#whats-inside)
  * [Available Scripts](#️available-scripts)
  * [Folder Structure](#folder-structure)
* [Deploy](#deploy)

## Getting Started

> We recommend that you get familiar with the [Turborepo Documentation](https://google.com) before using our project.

1. **Clone the project**

```
git clone git@github.com:MK-IT/monorepo-starter-essentials.git my-monorepo
```

2. **Go to the project directory**

```
cd my-monorepo
```

3. **Install Dependencies**

```
yarn
```

4. **Run the projects**

```
yarn dev
```

5. **Now edit some of the projects and see what happens!**

## Features

### Main features

- [x] ⚡️ **ESLint, Prettier, EditorConfig**
- [x] 🤝 **Commit message linting**
- [x] 🚀 **Production ready**
- [x] 🚦 **Pre-commit hooks**
- [x] 📂 **Clean folder structure**
<!-- TODO -->
<!-- - [x] 🐛 **VSCode configuration** --> 

### Extra features

TODO

## What's inside?

### ️Available Scripts

```bash
# run all workspaces in parallel
yarn dev

# build all workspaces
yarn build

# test all workspaces
yarn test

# test all workspaces inside /apps
yarn test:apps

# test all workspaces inside /packages
yarn test:packages

# format all workspaces
yarn format

# lint all workspaces
yarn lint

# Run command of a specific workspace
yarn workspace <workspace-name> <workspace-command>
```

### Folder Structure

```bash
 .
 ├── apps                   # workspaces
 │   ├── docs                 # next app
 │   └── web                  # next app
 ├── LICENSE
 ├── package.json
 ├── packages               # workspaces
 │   ├── eslint-config-custom # eslint configuration
 │   ├── tsconfig             # typescript configurations
 │   └── ui                   # component library
 ├── README.md
 ├── turbo.json               # Turborepo configuration
 └── yarn.lock
```

## Deploy

TODO
