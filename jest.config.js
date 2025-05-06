/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  testMatch: ['**/tests/unit/**/*.test.ts'],
  transform: {
    "^.+\.tsx?$": ["ts-jest", {}],
  },
};