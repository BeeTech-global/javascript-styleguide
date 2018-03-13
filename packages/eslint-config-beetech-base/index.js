module.exports = {
  extends: [
    'eslint-config-airbnb-base'
  ].map(require.resolve),
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: ['const', 'let'],
      next: 'return'
    }]
  }
};
