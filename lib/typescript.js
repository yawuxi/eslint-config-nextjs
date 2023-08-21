module.exports = {
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      caughtErrors: "none",
    },
  ],
  "@typescript-eslint/no-redeclare": "error",
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-use-before-define": [
    "error",
    {
      functions: false,
    },
  ],
};
