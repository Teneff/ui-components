const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  process.env.BABEL_ENV = argv.mode;
  return {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
    },
    devServer: {
      contentBase: [
        path.join(__dirname, 'dist'),
        path.resolve(__dirname, 'public'),
      ],
      inline: true,
      port: 3000,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    externals: {
      // Don't bundle react or react-dom
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'ReactDOM',
        root: 'ReactDOM',
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
