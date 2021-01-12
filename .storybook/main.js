const path = require('path')

module.exports = {
  stories: ['../**/*.story.js'],
  addons: [
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    process.env.STORYBOOK_DSM
      ? '@invisionapp/dsm-storybook'
      : '@whitespace/storybook-addon-html'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, '../src')
        ]
      },
      {
        test: /\.svg$/,
        use: ['file-loader'],
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../public')
        ]
      }
    )

    return config
  }
}
