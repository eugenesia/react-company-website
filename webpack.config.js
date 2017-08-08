module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/assets',
    filename: 'bundle.js',
    publicPath: 'assets',
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
}

