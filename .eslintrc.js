// Root, i.e. baseline ESLint configuration and all apps or packages would extend it
module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@packages/eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
