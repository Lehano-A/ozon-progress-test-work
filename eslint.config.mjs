import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    "ignores": ["webpack.config.js", "devServer.config"],
  },
  pluginJs.configs.recommended,
];