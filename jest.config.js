module.exports = {
    testEnvironment: 'node',
    collectCoverage: false,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
    ],
    testMatch: [
        '**/__tests__/**/*.{js,jsx,ts,tsx}',
        '**/?(*.)(spec|test).{js,jsx,ts,tsx}',
    ],
    testURL: 'http://localhost/',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/',
    ],
    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
    ],
};




