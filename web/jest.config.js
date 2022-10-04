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
  },
  transform: {
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx', // https://github.com/storybookjs/storybook/issues/11376#issuecomment-757417250
  },
  setupFilesAfterEnv: [`<rootDir>/web/test/mocks.js`],
}

module.exports = config
