const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const buildDate = new Date();
const mode = 'development';

module.exports = () => {
   console.log({ mode });

   return {
      mode,
      entry: './src/index',
      devtool: 'inline-source-map',
      devServer: {
         static: path.join(__dirname, 'dist'),
         port: 3001,
         open: false,
         headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
         },
      },
      output: {
         publicPath: 'auto',
      },
      resolve: {
         extensions: ['.ts', '.tsx', '.js'],
         alias: {
            '@': path.resolve(__dirname, '../'),
            'styled-components': path.resolve(__dirname, '../node_modules/styled-components'),
         },
      },
      performance: {
         hints: false,
      },
      module: {
         rules: [
            {
               test: /\.jsx?$/,
               loader: 'babel-loader',
               exclude: /node_modules/,
               options: {
                  presets: ['@babel/preset-react'],
               },
            },
            {
               test: /\.(js|jsx|tsx|ts)$/,
               loader: 'ts-loader',
               exclude: /node_modules/,
            },
         ],
      },
      plugins: [
         new webpack.EnvironmentPlugin({
            BUILD_DATE: buildDate.toISOString(),
         }),

         new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
         }),

         new ModuleFederationPlugin({
            name: 'harryPotter',
            filename: 'remoteEntry.js',
            exposes: {
               './CastList': './src/components/CastList',
            },
            shared: {
               react: { singleton: true, requiredVersion: '^18.2.0' },
               'react-dom': { singleton: true },
               'styled-components': { singleton: true },
               'react-i18next': { singleton: true },
            },
         }),

         new HtmlWebpackPlugin({
            template: './public/index.html',
         }),
      ],
   };
};
