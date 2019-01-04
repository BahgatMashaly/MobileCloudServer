
var path = require('path');
var webpack = require("webpack");
var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);

module.exports = {
    entry: {

        libs:[
            // path.normalize('es6-shim/es6-shim.min'),
            // 'reflect-metadata',
            // path.normalize('zone.js/dist/zone'),


            'ag-grid',
            'ag-grid-ng2',
            'ag-grid-enterprise',


            'rxjs',
            '@angular/core',
            '@angular/common',
            '@angular/compiler',
            '@angular/forms',
            '@angular/http',
            '@angular/platform-browser-dynamic',
            'ionic-angular',
            'ionic-native'

        ],
        app: path.resolve('src/app/main.ts')  ,

    },
    output: {
        path: path.resolve('www/build/js'),
        filename: 'app.bundle.js',
        pathinfo: false // show module paths in the bundle, handy for debugging
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        // "jquery": "jQuery",
        //
        // "datatables":"datatables",
        // "DataTable":"DataTable",
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),


        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle:false,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }

        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'libs', filename: 'libs.bundle.js', minChunks: Infinity }),


    ],
    module: {

        rules: [
            {
                test: /\.json$/,
                use: [
                    {
                        loader: 'json-loader'
                    }]
            },
            {
                //test: /\.(ts|ngfactory.js)$/,
                test: /\.ts$/,
                use: [
                    {
                        loader: process.env.IONIC_WEBPACK_LOADER
                    }]
            }
        ]

    },

    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.resolve('node_modules')]
    }
};
