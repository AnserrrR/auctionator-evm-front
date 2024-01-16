module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    ignorePatterns: [
        /* Src files */
        'src/api/generated.ts',
        /* Root files */
        '.eslintrc.js',
        'codegen.ts',
        'codegen-extend.js',
        'codegen-schema-loader.ts',
        'postcss.config.js',
        'tailwind.config.js',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
    ],
    plugins: [
        '@typescript-eslint',
        'react-refresh',
    ],
    root: true,
    rules: {
        'max-len': ['error', {code: 200}],
        'react/function-component-definition': ['off'],
        'react/jsx-no-useless-fragment': ['off'],
        'react/react-in-jsx-scope': ['off'],
        'react/button-has-type': ['off'],
        'arrow-parens': ['error', 'as-needed'],
        'react/jsx-key': 'error',
        'import/no-absolute-path': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-sort-props': ['warn', {
            callbacksLast: true,
            shorthandLast: true,
            multiline: 'last',
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true
        }],
        'react/jsx-max-props-per-line': ['warn', {
            maximum: {
                single: 3,
                multi: 1
            }
        }],
        'react/jsx-first-prop-new-line': ['warn', 'multiline'],
        // Отключение предупреждений о Unix или Windows окончаниях строк, т.к. их автоматически исправляет github
        // https://eslint.org/docs/latest/rules/linebreak-style
        'linebreak-style': 'off',
        'jsx-a11y/no-access-key': 'off',
        'no-nested-ternary': 'off',
        // 'semi': 'off',
        // '@typescript-eslint/semi': ['error', 'never'],
        "import/extensions": "off",
        'react/jsx-props-no-spreading': 'off',
        'no-void': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': ['warn'],
        // Deny default exports
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'import/no-anonymous-default-export': 'error',
        'no-restricted-exports': ['error', {"restrictDefaultExports": {"direct": true}}]
    },
}
