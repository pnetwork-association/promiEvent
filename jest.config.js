module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  resetModules: true,
  testRegex: '/tests/.*\\.test\\.ts$',
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.(mt|t|cj|j)s$": [
      "ts-jest",
      {
        "useESM": true
      }
    ]
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    'dist',
  ],
  verbose: true,
  // moduleFileExtensions: ['ts', 'js'],
  // globals: {
  //   'ts-jest': {
  //     diagnostics: {
  //       // Do not fail on TS compilation errors
  //       // https://kulshekhar.github.io/ts-jest/user/config/diagnostics#do-not-fail-on-first-error
  //       warnOnly: true
  //     }
  //   }
  // },
}