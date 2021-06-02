module.exports = {
  mode: process.env.NODE_ENV || 'production',
  output: {
    library: {
      name: 'PipedreamPlugin',
      type: 'window',
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
