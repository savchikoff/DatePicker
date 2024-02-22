module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "plugin:react/recommended",
        "prettier",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "ignorePatterns": [".storybook", "src/**/*.stories.tsx", "src/**/*.test.tsx"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "react",
        "simple-import-sort"
    ],
    "rules": {
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "react/require-default-props": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "react/no-array-index-key": "off",
        "no-nested-ternary": "off",
        "no-param-reassign": "off",
        "@typescript-eslint/no-shadow": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "": "never",
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]

    }
}
