module.exports = {
  testEnvironment: 'jsdom',
    "roots": [
      "<rootDir>/src"
    ],

    "transform": {
      "^.+\\.(j|t)sx?$": "ts-jest",
      "\\.(svg)$": "jest-raw-loader"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "coverageReporters": [
      "cobertura",
      "text",
      "html"
    ],
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/**/index.tsx",
      "!src/setupProxy.js",
      "!src/**/*.stories.{js,jsx,ts,tsx}"
    ],
    moduleNameMapper: {
     '\\.(scss|css)$': 'identity-obj-proxy',
     "axios": "axios/dist/node/axios.cjs"
    },
    
  }