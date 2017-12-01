// WEBPACK CONFIG 

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './imgpixels.js'
    ],
    output: {
        path: path.resolve(__dirname),
        filename: 'imgpixels.min.js',
        libraryTarget: 'var',
        library: 'ImgPixelsLibrary',
        libraryExport: 'default'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}