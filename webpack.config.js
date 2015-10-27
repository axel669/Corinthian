var path = require("path");

module.exports = {
    context: __dirname,
    entry: "./main.js",
    output: {
        filename: "app.js"
    },
    devtool: '#inline-source-map',
    resolve: {
        root: path.resolve(".")
        // modulesDirectories: ["node_modules", "."]
        // alias: {
        //     source: "./source"
        // },
        // root: [
        //     "node_modules",
        //     "."
        // ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|lib)/,
                loader: 'babel',
                query: {
                    optional: ['runtime'],
                    stage: 0
                }
            },
            {
                test: /\.source$/,
                exclude: /(node_modules)/,
                loader: 'url-loader'
            }
        ]
    }
};
