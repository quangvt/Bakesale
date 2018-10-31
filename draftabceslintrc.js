module.exports = {
  parser: 'babel-eslint',
  //env: {
  //  browser: true,
  //  commonjs: true,
  //  es6: true,
  //  node: true,
  //  jest: true,
  //},
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  //parserOptions: {
  //  ecmaFeatures: {
      //experimentalObjectRestSpread: true,
  //    jsx: true,
  //  },
    //sourceType: 'module',
  //},
  plugins: ['react'],
  rules: {
    "max-len": [1, 70, 2, {ignoreComments: true}],
    "prop-types" [2],
    //'react/prop-types': ['off'],
    //indent: ['error', 2, { SwitchCase: 1 }],
    //'linebreak-style': ['error', 'unix'],
    //quotes: ['error', 'single'],
    //semi: ['error', 'always'],
    //'no-console': ['warn', { allow: ['info', 'error'] }],
    //'arrow-parens': ['error', 'always'],
  },
};
