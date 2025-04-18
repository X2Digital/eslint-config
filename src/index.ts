import { defineConfig } from "eslint/config";
import sortImport from "eslint-plugin-sort-imports-es6-autofix";
import prettier from "eslint-plugin-prettier";

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    plugins: { "sort-imports-es6-autofix": sortImport, prettier },
    rules: {
      "class-methods-use-this": OFF,
      "consistent-return": OFF,
      curly: ["error", "all"],
      "dot-notation": [ERROR, { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
      "global-require": OFF,
      "import/extensions": OFF,
      "import/no-extraneous-dependencies": OFF,
      "import/no-unresolved": OFF,
      "import/prefer-default-export": OFF,
      "linebreak-style":
        process.env.NODE_ENV !== "production" ? "off" : ["error", "unix"],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-mixed-operators": OFF,
      "no-param-reassign": ["error", { props: false }],
      "no-plusplus": OFF,
      "no-restricted-modules": ["error", "require"],
      "no-restricted-syntax": ["error", "WithStatement"],
      "no-return-assign": OFF,
      "no-undef": WARNING,
      "no-var-requires": OFF,
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: [
            "const",
            "let",
            "var",
            "import",
            "export",
            "default",
            "directive",
          ],
          next: "*",
        },
        {
          blankLine: "always",
          prev: "*",
          next: [
            "return",
            "var",
            "let",
            "const",
            "block",
            "block-like",
            "throw",
          ],
        },
        {
          blankLine: "never",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
        { blankLine: "never", prev: "import", next: "import" },
        { blankLine: "any", prev: "export", next: "export" },
      ],
      "prefer-destructuring": OFF,
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          trailingComma: "all",
          printWidth: 100,
          arrowParens: "avoid",
          singleAttributePerLine: false,
        },
      ],
      "sort-imports-es6-autofix/sort-imports-es6": ERROR,
      "spaced-comment": OFF,
      "@typescript-eslint/consistent-type-imports": ERROR,
    },
  },
]);
