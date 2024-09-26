// SPDX-License-Identifier: Apache-2.0

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/*"],
  coverageDirectory: "<rootDir>/coverage/",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "./__tests__",
    "./jest.config.ts",
  ],
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  errorOnDeprecated: false,
  notify: false,
  preset: "ts-jest",
  resetMocks: true,
  roots: ["<rootDir>/__tests__/"],
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  verbose: true,
};

export default config;
