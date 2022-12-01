import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'ts', 'd.ts', 'json'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
};

export default config;
