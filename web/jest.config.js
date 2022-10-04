// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  verbose: true,
  moduleNameMapper: {
    // mock redwood magic webpack aliases
    // see: https://github.com/redwoodjs/redwood/blob/main/packages/testing/config/storybook/preview.js
    '~__REDWOOD__USER_WEB_DEFAULT_CSS': 'identity-obj-proxy',
    '~__REDWOOD__USER_STORYBOOK_PREVIEW_CONFIG':
      '<rootDir>/web/config/storybook.preview.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
  transform: {
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx', // https://github.com/storybookjs/storybook/issues/11376#issuecomment-757417250
  },
  setupFilesAfterEnv: [`<rootDir>/web/test/mocks.js`],
}

module.exports = config
