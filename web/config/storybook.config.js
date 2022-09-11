const { importStatementPath, getPaths } = require('@redwoodjs/internal')

const rwjsPaths = getPaths()

module.exports = {
  features: {
    interactionsDebugger: true,
  },
  addons: ['@storybook/addon-interactions'],
  stories: [
    `${importStatementPath(`${rwjsPaths.base}/design-system/src`)}/**/*.stories.@(js|jsx|ts|tsx|mdx)`
  ],
}
