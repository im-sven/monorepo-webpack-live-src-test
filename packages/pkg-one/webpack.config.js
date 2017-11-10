const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    mainFields: ['ben:src', 'browser', 'main'],
  },
  watch: !!process.env.WATCH,
}