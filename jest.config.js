module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/prepare.js'],
  moduleNameMapper: {
    '^vs/(.*)$': '<rootDir>/src/vs/$1',
    '^static/(.*)$': '<rootDir>/static/$1'
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
};