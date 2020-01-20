const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Говорит, где лежат все исходники приложения
  // После указания можно заменть пути ./src/analytics.js на ./analytics.js
  context: path.resolve(__dirname, 'src'),
  mode: 'development', // development - собираем все в режиме разработки (не минифицирует итоговые файлы)

  // Точка входа
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },

  // Куда складывать результат
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  // Плагины
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack App', // Если указан template, то title не работает
      template: './index.html' //Чтобы генерируемый файл брал контент из нашего файла
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        // test - Регулярное выражение
        // Если файл с расширением test попадает в Webpack, ему нужно использовать use
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};