module.exports = {
  extends: 'plugin:vue/recommended',
  rules: {
    'vue/order-in-components': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'error',
    'vue/no-lone-template': 'error',
    'vue/html-closing-bracket-spacing': ['error', { selfClosingTag: 'never' }],
    'vue/no-multiple-template-root': 'off',
  }
}
