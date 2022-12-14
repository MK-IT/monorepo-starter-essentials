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
- [x] 📂 **Clean folder structure**
- [x] 🚦 **Pre-commit hooks**
- [x] 🤝 **Commit message linting**
- [x] 🐛 **VSCode configuration**
- [x] 🚀 **Production ready**
- [x] 🧗🏻‍♂️ **Built-in `semver` automation**
- [x] 🍃 **Github releases automation**

### 🤝 Commit message linting

Keep your commit messages human- and robot-readable using a shared convention, i.e. [Commitlint](https://commitlint.js.org/#/).

[Husky's](https://github.com/typicode/husky) Git hooks make sure that your commit messages follow the convention.

_You can use [Commitlint's CLI](https://commitlint.js.org/#/guides-use-prompt?id=guide-use-prompt) for fast authoring of your commit messages._

### 🧗🏻‍♂️ Built-in `semver` automation

The [release-please](https://github.com/googleapis/release-please) package helps you generate changelogs, tags and automatically updates package versions by following the [semver](https://semver.org) convention.

When there are new changes merged to the default branch, the `release-please` GitHub action automatically creates a release PR containing updated package versions and changelogs. The PR gets updated automatically as more changes are merged. When you are ready to release, just merge the PR.

If you want to version track a package, you must define it in `release-please-config.json`.
On the next release, the newly defined packages will be automatically added to `release-please-manifest.json`.

### 🍃 Github releases automation

When you merge [release-please](https://github.com/googleapis/release-please)'s auto-generated PR, the GitHub action automatically creates tags and releases for each package.

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

<!-- ## Deploy -->

<!-- TODO -->
