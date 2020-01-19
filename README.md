# webpack

## Инициализация
Для создания файла package.json в консоле пишем 
```html
yarn init
```
Отвечаем на вопросы.

## Установка Webpack
```html
yarn add -D webpack webpack-cli
```
- webpack-cli отвечает за команды, которые доступны в консоле

Создаес в корне файл webpack.config.js

## Запуск
Минимальный конфиг:
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js', // Точка входа

  // Куда складывать результат
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

Для запуска пишем:
```javascript
yarn webpack
```

- Благодаря Webpack мы можем использовать export и import.
- Переносим index.html в dist и подключием вместо всех скриптов одни bundle.js

## Подключение внешних скриптов
В entry может быть несколько точек входа:

При двух файлах в точке входа и одном в точке выхода могут возникнуть конфликты. Чтобы этого избежать используем паттерны:
```javascript
output: {
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    },
    filename: '[name].bundle.js',
  }
```
[name] будет динамически указывать на названия файлов в точке входа

## Проблемы с кэшем
Когда мы обновляем файлы и пересобираем, из-за кэша файл на сайте может остаться старым.
Чтобы этого избежать:
```javascript
filename: '[name].[contenthash].js',
```

Чтобы пути автоматически менялись в index.html установим плагин html-webpack-plugin. Он позволяет взаимодействовать с html через Webpack
```javascript
yarn add -D html-webpack-plugin
```

Подключаем его в Webpack:
```javascript
const HTMLWebpackPlugin = require('html-webpack-plugin');
```

Вносим в массив плагинов (В скобках передаем опции):
```javascript
plugins: [
  new HTMLWebpackPlugin({
    title: "Webpack App", // Если указан template, то title не работает
    template: './src/index.html' //Чтобы генерируемый файл брал контент из нашего файла
  })
]
```

## Очистка папки dist
Установим плагин:
```javascript
yarn add -D clean-webpack-plugin
```

