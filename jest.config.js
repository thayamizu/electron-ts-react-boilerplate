module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
        },
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
};
