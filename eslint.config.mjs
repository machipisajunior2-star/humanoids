import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  globalIgnores([
    "build/**/*", // ignore all contents in and under `build/` directory but not the `build/` directory itself
    // "test.js", // unignore `test.js`
  ]),
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
]);
