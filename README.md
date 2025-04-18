# eslint-config-x2d

Custom ESLint configuration used by the X2D company for maintaining code quality and consistency across all JavaScript/TypeScript and Vue projects.

## Features

- Enforces consistent code formatting with Prettier
- Automatically sorts imports using `eslint-plugin-sort-imports-es6-autofix`
- Supports `.js`, `.ts`, `.vue`, and other modern JavaScript/TypeScript files
- Environment-aware rules (e.g., disables console in production)
- Carefully selected rules for clean and maintainable code

## Installation

```bash
npm install --save-dev eslint eslint-config-x2d eslint-plugin-prettier eslint-plugin-sort-imports-es6-autofix
```

Or with `pnpm`:

```bash
pnpm add -D eslint eslint-config-x2d eslint-plugin-prettier eslint-plugin-sort-imports-es6-autofix
```

## Usage

In your `.eslintrc.js` or `eslint.config.js`, extend the configuration:

```js
import x2dConfig from '@x2d/eslint-config';

export default x2dConfig;
```

Or with a custom config:

```js
import { defineConfig } from 'eslint/config';
import x2dConfig from '@x2d/eslint-config';

export default defineConfig([...x2dConfig]);
```

## Included Plugins

- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- [`eslint-plugin-sort-imports-es6-autofix`](https://github.com/lydell/eslint-plugin-sort-imports-es6-autofix)

## Prettier Configuration

- `singleQuote: true`
- `trailingComma: all`
- `printWidth: 100`
- `arrowParens: avoid`
- `singleAttributePerLine: false`

## Example File Types

- `*.js`
- `*.ts`
- `*.vue`
- `*.mjs`
- `*.cjs`

## License

MIT – © X2D