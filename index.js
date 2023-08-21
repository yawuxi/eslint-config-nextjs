const base = require("./lib/base.js");
const typescript = require("./lib/typescript.js");
const react = require("./lib/react.js");
const imports = require("./lib/import.js");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  ignorePatterns: ["node_modules", "dist", "build", "next"],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "import",
    "@typescript-eslint",
    "@next/eslint-plugin-next",
  ],
  extends: [
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
  ],
  rules: {
    ...base,
    ...typescript,
    ...react,
    ...imports,
  },
};
