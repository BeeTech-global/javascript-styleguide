module.exports = {
  extends: [
    'eslint-config-airbnb'
  ].map(require.resolve),
  rules: {
    'comma-dangle': 'off',
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: ['const', 'let'],
      next: 'return'
    }]
  }
};
