const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.svg$/,
        use: ['file-loader'],
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../public')
        ]
      }
    ]
  }
}
