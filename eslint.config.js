// .eslintrc.js
import globals from "globals";

export default {
  ignorePatterns: ["dist"],
  overrides: [
    {
      files: ["**/*.{js,jsx}"],
      env: {
        browser: true,
        es2020: true,
        node: true,
      },
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ["react-hooks", "react-refresh"],
      extends: [
        "eslint:recommended",
        "plugin:react-hooks/recommended",
        "plugin:react-refresh/recommended",
      ],
      rules: {
        // your custom tweaks:
        "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
  ],
};