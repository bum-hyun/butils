module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: true,
    },
  },
  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
  moduleNameMapper: {
    "^test/(.*)": "<rootDir>/test/$1",
  },
  transformIgnorePatterns: ["./node_modules/"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/test/**/*.spec.(ts|tsx)"],
  testEnvironment: "node",
};
