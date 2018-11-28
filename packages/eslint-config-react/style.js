'use strict'

module.exports = {
  rules: {
    'jsx-quotes': ['warn', 'prefer-single'],
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-spacing': ['warn', { when: 'never', children: true }],
    'react/jsx-equals-spacing': ['warn'],
    'react/jsx-indent': ['warn'],
    'react/jsx-indent-props': ['warn'],
    'react/jsx-max-props-per-line': ['warn', { maximum: 2 }],
    'react/jsx-one-expression-per-line': 'warn',
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-wrap-multilines': 'warn',
  },
}
