module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setupTests.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg|webp|ico|bmp|tiff)$": "jest-transform-stub", 
    "\\.(css|scss|sass)$": "jest-transform-stub", 
  },
};
