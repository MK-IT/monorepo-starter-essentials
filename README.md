<p align="center">
  <a href="https://turbo.build/repo">
    <img alt="Turborepo Logo" src="https://user-images.githubusercontent.com/4060187/196936123-f6e1db90-784d-4174-b774-92502b718836.png" width="60" />
  </a>
</p>

<h1 align="center">
  Monorepo Starter Essentials
</h1>

Monorepo project starter extended with tools to help you boost your development experience. Powered by [Turborepo](https://turbo.build/repo).

_Help us improve by [submitting suggestions and bug reports](https://github.com/MK-IT/monorepo-starter-essentials/issues)._

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
  - [Main Features](#main-features)
  - [Extra Features](#extra-features)
- [What's inside](#whats-inside)
  - [Available Scripts](#️available-scripts)
  - [Folder Structure](#folder-structure)
- [Deploy](#deploy)

## 🚀 Getting Started

_We recommend that you get familiar with the [Turborepo Documentation](https://turbo.build/repo/docs) before getting started._

1. **Create a new Monorepo app.**

   Straightforward project scaffold using [degit](https://github.com/Rich-Harris/degit).

   ```
   npx degit https://github.com/MK-IT/monorepo-starter-essentials hello-world
   ```

   Or alternatively, clone this repository.

   ```
   git clone https://github.com/MK-IT/monorepo-starter-essentials hello-world
   ```

   Navigate to your new monorepo and install its dependencies.

   ```
   # replace `yarn` with `npm` if it works better for you
   cd hello-world && yarn
   ```

2. **Configure.**

   Edit the default configuration of your new monorepo if necessary.

   - `package.json`
   - `apps/**/package.json`
   - `packages/**/package.json`
   - `turbo.json`

3. **Develop.**

   Start the monorepo apps.

   ```
   # parallel monorepo development mode
   yarn dev
   ```

   _Note: You can change the contents of `apps/` and `packages/` in any way you like. Most pre-defined apps are for demo purposes only._

## Features

### Main features

- [x] ⚙ **Turborepo Build System**
- [x] ⚡️ **ESLint, Prettier, EditorConfig**
- [x] 🤝 **Commit message linting**
- [x] 🚀 **Production ready**
- [x] 🚦 **Pre-commit hooks**
- [x] 📂 **Clean folder structure**
- [x] 🧗🏻‍♂️ **Built-in `semver` automation**
- [x] 🍃 **Github releases automation**
- [x] 🐛 **VSCode configuration** 

<!-- ### Extra features -->

<!-- TODO -->

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
├── .github                # GitHub configuration
├── .husky                 # Husky configuration
├── apps                   # Workspaces
│   ├── docs                 # NextJS app
│   └── web                  # NextJS app
├── packages               # Workspaces
│   ├── eslint-config-custom # ESLint configuration
│   ├── tsconfig             # TypeScript configuration
│   └── ui                   # Component library
├── .commitlintrc.js
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .release-please-manifest.json # Release-Please manifest file
├── LICENSE
├── README.md
├── package.json
├── release-please-config.json # Release-Please configuration file
├── turbo.json               # Turborepo configuration
└── yarn.lock
```

## Deploy

[NextJS](https://nextjs.org/) apps can be easily deployed to custom Node.js servers, as Docker images, static HTML exports, and [Vercel](https://vercel.com/) (recommended).

For automated Vercel deployment and more on the topic refer to [deployment guide](https://vercel.com/docs/concepts/monorepos).

It's highly recommended to build and run your apps before deployment as a local preview.

<!-- TODO: once we have clear release workflow, mention it here, same way as our other starters -->
