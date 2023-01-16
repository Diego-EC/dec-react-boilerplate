const path = require('path'); // dependencia nativa de node
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {
    const { mode } = argv;
    const isProduction = mode == 'production';
    let plugins = '';

    if (argv.mode === 'development') {
        plugins = [new HtmlWebpackPlugin({ 
            favicon: 'public/favicon.ico',
            template: 'public/index.html' }), new ReactRefreshWebpackPlugin()];
    } else {
        plugins = [new HtmlWebpackPlugin({ 
            favicon: 'public/favicon.ico',
            template: 'public/index.html' })];
    }
    
    return {
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        plugins: plugins,
        devServer: {
            open: true,
            port: 3000,
            hot: true,
        },
        devtool: 'source-map',
    }
}