// const {defaults} = require('jest-config');

// /** @type {import('jest').Config} */
// const config = {
//   moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
// };

// module.exports = config;
module.exports = {
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
};
