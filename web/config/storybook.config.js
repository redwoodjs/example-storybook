const webpack = require('webpack')

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
  webpackFinal: async (config, { configType }) => {
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

    // see: https://github.com/redwoodjs/redwood/issues/5534#issuecomment-1474103316
    configType === 'PRODUCTION' &&
      config.plugins.push(
        new webpack.ProvidePlugin({
          mockGraphQLQuery: ['@redwoodjs/testing/web', 'mockGraphQLQuery'],
          mockGraphQLMutation: [
            '@redwoodjs/testing/web',
            'mockGraphQLMutation',
          ],
          mockCurrentUser: ['@redwoodjs/testing/web', 'mockCurrentUser'],
        })
      )

    return config
  },
}
