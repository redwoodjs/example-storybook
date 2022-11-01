const { importStatementPath, getPaths } = require('@redwoodjs/internal')

const rwjsPaths = getPaths()

module.exports = {
  features: {
    interactionsDebugger: true,
  },
  addons: ['@storybook/addon-interactions', '@storybook/addon-coverage'],
  stories: [
    `${importStatementPath(
      rwjsPaths.web.src
    )}/stories/Introduction.stories.mdx`,
  ],
  webpackFinal: async (config) => {
    const rules = config.module?.rules || []
    rules.push({
      test: /\.(js|ts)$/,
      loader: 'istanbul-instrumenter-loader',
      options: { esModules: true },
      enforce: 'post',
      include: require('path').join(__dirname, '..', 'src'),
      exclude: [
        /\.(e2e|spec|stories)\.ts$/,
        /node_modules/,
        /polyfills\.ts/,
        /preview\.js/,
        /(ngfactory|ngstyle)\.js/,
      ],
    })

    config.module = config.module || {}
    config.module.rules = rules

    return config
  },
}
