module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^types$': '<rootDir>/src/types',
    '^utils$': '<rootDir>/src/utils',
    '^containers$': '<rootDir>/src/containers',
    '^interfaces$': '<rootDir>/src/interfaces',
  },
};
