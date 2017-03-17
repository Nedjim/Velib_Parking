var path = require('path');
var webpack = require('webpack');

var DIST_DIR = path.resolve(__dirname, 'app/dist');
var SRC_DIR = path.resolve(__dirname, 'app/src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [{
                test: /\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.s?css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.join(__dirname, 'app/src')
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[hash].[ext]',
                }
            }
        ]
    },
    devServer: {
        contentBase: './app/dist',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;