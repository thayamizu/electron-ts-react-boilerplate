module.exports = {
  roots: ["./__tests__"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
