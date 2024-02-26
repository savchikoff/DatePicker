module.exports = {
    preset: "ts-jest",
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'ts-jest',
        "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: [
        "jest-localstorage-mock"
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/"]
}