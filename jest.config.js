module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
  },
  roots: ['<rootDir>/__tests__/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
}
