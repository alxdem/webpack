const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // development - собираем все в режиме разработки (не минифицирует итоговые файлы)

  // Точка входа
  entry: {
    main: './src/index.js',
    analytics: './src/analytics.js'
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
      template: './src/index.html' //Чтобы генерируемый файл брал контент из нашего файла
    }),
    new CleanWebpackPlugin()
  ]
};