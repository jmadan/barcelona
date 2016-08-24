let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let validate = require('webpack-validator');

const PATHS = {
    app: path.join(__dirname, 'src'),
    style: path.join(__dirname, 'src/public/css'),
    build: path.join(__dirname, 'dist')
};

let config = {
    devtool: 'eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        PATHS.app + '/manhattan.js'
    ],
    output: {
        path: PATHS.build,
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /src\/.+.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                "presets": [
                    "react", "es2015", "stage-0"
                ]
            }
        }, {
            test: /src\/.css$ /,
            loader: 'style!css',
            include: PATHS.style
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ title: 'Barcelona' })
    ]
};

module.exports = validate(config);
