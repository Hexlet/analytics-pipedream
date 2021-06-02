module.exports = {
  mode: process.env.NODE_ENV || 'production',
  output: {
    library: {
      name: 'analytics-plugin-pipedream',
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
