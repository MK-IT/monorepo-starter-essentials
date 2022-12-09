<p align="center">
  <a href="https://nextjs.org">
    <img alt="NextJS" src="https://user-images.githubusercontent.com/4060187/196936123-f6e1db90-784d-4174-b774-92502b718836.png" width="60" />
  </a>
</p>
<h1 align="center">
  Monorepo Starter Essentials
</h1>

Monorepo project starter extended with tools to help you boost your development experience.

> Help us improve by [submitting suggestions and bug reports](https://github.com/MK-IT/monorepo-starter-essentials/issues).

## ⚙ Turborepo

The project is powered by [Turborepo](https://turbo.build/repo).  
We recommend that you get familiar with the basics of Turborepo before using our starter.

## 🚀 Getting Started

**1. Clone the project**

```
git clone git@github.com:MK-IT/monorepo-starter-essentials.git my-monorepo
```

**2. Go to the project directory**

```
cd my-monorepo
```

**3. Install Dependencies**

```
yarn install
```

**4. Run the projects**

```
yarn dev
```

**5. Edit some of the projects and see what happens!**

## 🔨 Usage

#### Workspaces

Each project inside the monorepo is called "workspace".

There's an array of strings property in `package.json` called "workspaces" which you can use to define where your workspaces live.

```json
{
  "workspaces": ["packages/project"] // /packages/projects
}
```

```json
{
  "workspaces": ["packages/*"] // every folder inside /packages
}
```

```json
{
  "workspaces": ["packages/*", "apps/*"] // every folder inside /packages and /apps
}
```

#### Create Workspace

As you can see, currently in our boilerplate code, we have configured to have every folder inside `/apps` and `/packages` to be workspace.

Now let's create a small React component package for practice purposes

**1. Go to packages**

```
cd ./packages
```

**2. Create a new folder that would be our new package**

```
mkdir my-package
```

**3. Initialize yarn**

> Every workspace must contain a `package.json` file, otherwise Yarn won't recognize it as a workspace

```
yarn init -y
```

**4. Create our entry point file**

```
touch index.tsx
```

**5. Specify the path to our entry point inside `package.json`**

> We also need to specify where the type definitions come from using the "types" property

```json
{
  // ...

  "main": "index.tsx",
  "types": "index.tsx"

  // ...
}
```

**6. Inside `index.ts`, create our component**

```ts
export function Button() {
  return <button>Click Me!</button>;
}
```

**7. Add our workspace package `tsconfig` as a dependency in our `package.json`**

> Each workspace is referred to as it's "name" property inside `package.json`

```json
{
  // ...

  "devDependencies": {
    // ...

    "@packages/tsconfig": "*"

    // ...
  }

  // ...
}
```

**8. Copy-paste the `tsconfig.json` file from our `ui` package**

```
cp ../ui/tsconfig.json ./tsconfig.json
```

You can see inside the file that we are extending the file `react-library.json` that's coming from `tsconfig` package

**9. Now let's add the workspace package "eslint-config-custom" to our dependencies so we can see how Turborepo works**

```json
{
  // ...

  "devDependencies": {
    // ...

    "@packages/eslint-config-custom": "*"

    // ...
  }

  // ...
}
```

**10. Add a new script inside `package.json`**

```json
{
  // ...

  "scripts": {
    "lint": "eslint \"**/*.ts*\""
  }

  // ...
}
```

**11. Run `yarn` to link the dependencies together**

```
yarn
```

**12. Now try to import our new package inside some of our workspaces inside `/apps`, try to use it and see what happens**

## ⭐ Features

- [x] 💪 **Latest TS support**
- [x] ⚡️ **ESLint, Prettier, EditorConfig**
- [x] 🤝 **Commit message linting**
- [x] 🚀 **Production ready**
- [x] 🚦 **Pre-commit hooks**
- [x] 📂 **Clean folder structure**
- [x] 🐛 **VSCode configuration**

## 👷‍♂️ Available Scripts

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

## 💫 Deploy

TODO
