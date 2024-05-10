module.exports = {
    "moduleNameMapper": {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js"
    },
    "setupFilesAfterEnv": ["whack-a-goblin/src/setupTests.js"]
};
