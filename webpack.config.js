const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        // contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
          template: 'template/test.html'
        })
      ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'    
    }
};