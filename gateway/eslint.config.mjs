// @ts-check
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default tseslint.config(
    {
      ignores: ['eslint.config.mjs'],
    },

    // ESLint core rules
    eslint.configs.recommended,

    // TypeScript rules with type-checking
    ...tseslint.configs.recommendedTypeChecked,

    // Language and environment settings
    {
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.jest,
        },
        sourceType: 'commonjs',
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },

    // Your custom rules
    {
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
      },
    }
);
