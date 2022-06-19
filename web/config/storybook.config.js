const { importStatementPath, getPaths } = require('@redwoodjs/internal')

const rwjsPaths = getPaths()

module.exports = {
  features: {
    interactionsDebugger: true,
  },
  addons: ['@storybook/addon-interactions'],
  stories: [
    `${importStatementPath(
      rwjsPaths.web.src
    )}/stories/Introduction.stories.mdx`,
  ],
}
