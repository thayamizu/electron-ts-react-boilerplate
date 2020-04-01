module.exports = {
    // --------
    // basic options
    roots: ["__tests__"],
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
        },
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    verbose: true,

    // ------
    // module resolution
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ["./src", "./node_modules"],

    modulePathIgnorePatterns: ["__data__", "__mock__"],

    // --------
    // coverage
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/build/**",
        "!**/dist/**",
        "!**/docs/**",
        "!**/.vscode/**",
        "!**/stories/**",
    ],
    coverageDirectory: "./dist/coverage",
};
