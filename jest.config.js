/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "^@/components$": "<rootDir>/src/components/index.ts",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
