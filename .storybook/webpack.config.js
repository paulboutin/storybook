module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [
      require.resolve('@whitespace/storybook-addon-code/loader'),
    ],
    enforce: 'pre',
  })

  return config
}