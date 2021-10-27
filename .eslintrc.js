module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ['error', 'never'],
    'curly': [2, 'all'],
    'indent': 'off',
    'newline-per-chained-call': 'error',
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'space-before-function-paren': ['error', 'always'],
    'space-before-blocks': 'error',
    'eqeqeq': ['error', 'always'],
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'brace-style': 'error',
    'key-spacing': ['error', { 'beforeColon': false }],
    'no-constant-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'generator-star-spacing': 'off',
    'max-len': ['error', { 'code': 120 }],
    'no-mixed-operators': 'off',
    'vue/order-in-components': 'error',
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    'vue/html-indent': ['error', 2],
    'vue/singleline-html-element-content-newline': 'off',
    'prefer-template': 'error',
    'no-undef': 'off',
    'quotes': ['error', 'single'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'object-curly-spacing': ['error', 'always']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
