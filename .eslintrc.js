module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': [2, 'never'],
        indent: [
            0,
            4,
            {
                SwitchCase: 1
            }
        ],
        'vue/no-side-effects-in-computed-properties': 'off',
        'no-useless-escape': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
