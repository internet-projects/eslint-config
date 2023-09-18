module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-named-as-default-member': 'error',
    'vue/order-in-components': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'error',
    'vue/no-lone-template': 'error',
    'vue/html-closing-bracket-spacing': ['error', { selfClosingTag: 'never' }],
  }
}
