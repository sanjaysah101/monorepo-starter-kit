import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      semi: ["error"],
      "no-console": ["warn"],
      "prefer-const": ["error"],
      "jsx-quotes": ["error", "prefer-double"],
      quotes: ["error", "double"],
      "no-unused-vars": ["error"],
    },
  },
  {
    ignores: ["dist/**"],
  },
];
