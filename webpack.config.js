const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [
            'style-loader', {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: "[path][name]__[local]--[hash:base64:3]",
                    localIdentContext: path.resolve(__dirname, "src"),
                    exportLocalsConvention: "camelCase",
                },
            }
        }],
    },
    {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                '@babel/preset-react',
                '@babel/preset-env',
            ]
          }
        }
      }
  ],
},
  plugins: [
    new HtmlWebpackPlugin({
    template: './public/index.html',
    }),
  ],
};