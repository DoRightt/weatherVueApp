const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        fileName: '[name].js'
    },
    modules: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modukes/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    { loader: 'file-loader' }
                ]
            }
        ]
    },
    plugins: [

    ]
}