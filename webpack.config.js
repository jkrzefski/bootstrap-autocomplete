const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: 'ts-loader',
        use: { loader: 'ts-loader', options: { transpileOnly: true } },
        include: path.resolve(__dirname, 'src'),
        // exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bootstrap-autocomplete.js',
    path: path.resolve(__dirname, 'dist/latest')
  },
  // mode: 'production'
  mode: 'development'
};
