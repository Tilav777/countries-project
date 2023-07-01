const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
        about: path.resolve(__dirname, './src/js/about.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true

    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Countries | home',
            template: path.resolve(__dirname, 'indexTemp.html'),
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            title: 'Countries | about',
            template: path.resolve(__dirname, './src/pages/aboutTemp.html'),
            filename: 'about.html',
            chunks: ['about']
        }),
        new MiniCssExtractPlugin()
    ]
}