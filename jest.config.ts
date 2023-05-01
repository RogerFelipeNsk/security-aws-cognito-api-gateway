import type { Config } from "jest";
import modulePaths from "./jest.paths.json";

const config: Config = {
  bail: 1,
  clearMocks: true,
  displayName: "unit-tests",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "src/**/*.ts"],
  coverageDirectory: "__tests__/coverage",
  coverageReporters: ["text-summary", "lcov"],
  testEnvironment: "node",
  testMatch: ["src/**/*.spec.js", "src/**/*.spec.ts"],
  verbose: true,
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
    "cjs",
    "mjs",
  ],
  moduleNameMapper: modulePaths,
  //setupFiles: ["<rootDir>/test/jest.setup.ts"],
  modulePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/.esbuild/",
    "<rootDir>/.serverless/",
    "<rootDir>/node_modules/",
  ],
};

export default config;
