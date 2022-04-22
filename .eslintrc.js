module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard',
        'eslint-config-prettier'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: ['warn', 4],
        quotes: ['warn', 'single'],
        'no-unused-vars': ['warn'],
        // semi: ['warn', 'always'],
        'react/prop-types': ['off']
    }
};
