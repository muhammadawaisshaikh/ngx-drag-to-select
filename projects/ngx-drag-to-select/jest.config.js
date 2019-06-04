module.exports = {
  preset: 'jest-preset-angular',
  rootDir: 'projects/ngx-drag-to-select',
  roots: ['src'],
  setupFilesAfterEnv: ['<rootDir>/test.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$'
    }
  }
};
