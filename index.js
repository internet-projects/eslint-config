module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-named-as-default-member': 'error',
  }
}
