/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.(spec|test).[jt]s?(x)',
    '**/*.+(spec|test).[tj]s?(x)',
  ],
  transform: {
    '^.+\\.ts$': require.resolve('ts-jest'),
  },
};
