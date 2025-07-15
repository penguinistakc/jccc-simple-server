module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script", // Change to "module" if using ES modules
  },
  rules: {
    "one-var": ["error", "never"], // 🚫 Disallow multiple const/let/var in a single declaration
    "prettier/prettier": "error",  // ✅ Show Prettier issues as ESLint errors
  },
};