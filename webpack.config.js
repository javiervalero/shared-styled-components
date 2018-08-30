const path = require('path');

const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shared-styled-components.js',
    library: 'sharedStyledComponents',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    glamorous: {
      commonjs: 'glamorous',
      commonjs2: 'glamorous',
      amd: 'glamorous'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;
