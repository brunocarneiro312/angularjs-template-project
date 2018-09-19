const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    mode: "development",
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        rules:
            [
                {
                    test: /.js?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query:
                        {
                            presets: ['@babel/preset-env']
                        },
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract(
                        {
                            fallback: 'style-loader',
                            use: ['css-loader']
                        }
                    )
                },
                {
                    test: /\.(svg|ttf|woff|woff2|eot)$/, loader: 'url-loader?limit=5000'
                },
            ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}