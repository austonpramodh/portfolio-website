import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ["next/core-web-vitals", "next/typescript"],
    }),
    {
        plugins: {
            prettier,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: tsParser,
            ecmaVersion: 12,
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "react/react-in-jsx-scope": "off",
            "prettier/prettier": [
                "error",
                {
                    endOfLine: "auto",
                    trailingComma: "es5",
                    tabWidth: 4,
                    semi: true,
                    singleQuote: false,
                },
            ],
        },
    },
];

export default eslintConfig;
