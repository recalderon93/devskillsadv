module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],

    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': [0, 'windows'],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'none'
            }
        ],
        'import/extensions': ['error', { ts: 'never', tsx: 'never' }],
        'react/function-component-definition': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'comma-dangle': ['error', 'never'],
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true
            }
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error']
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off'
            }
        }
    ]
};
