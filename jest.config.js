module.exports={
    verbose: true,
    preset: 'jest-playwright-preset',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    }
}
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.ts'],
  };
  module.exports = {
    transform: {
      '^.+\\.tsx?$': 'babel-jest', // Transform TypeScript and JavaScript files using Babel
    },
  };