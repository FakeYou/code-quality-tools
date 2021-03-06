'use strict'

module.exports = {
  extends: [
    './packages/commitlint-config',
  ],

  rules: {
    'scope-enum': [1, 'always', [
      'commitlint',
      'eslint-base',
      'eslint-node',
      'eslint-react',
      'eslint-react-native',
      'prettier',
      'remark',
      'stylelint',
    ]],
  },
}
