// Jest configuration for the project (CommonJS)
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleNameMapper: {
    '\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\.(png|jpg|jpeg|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/Assets/(.*)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/Assets/.*\\.(png|jpg|jpeg|svg)$',
    '/dist/'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
