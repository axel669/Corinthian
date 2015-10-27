var archiver = require("archiver");
var webpack = require("webpack");
var fs = require('fs');
var path = require("path");

var config = {
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

console.log('compiling...');
webpack(
    config,
    function () {
        console.log('zipping');
        fs.writeFile("version.json", Date.now().toString(), {encoding: 'utf8'});

        var zip;
        var output;

        output = fs.createWriteStream("app.zip");
        output.on("close", function() {console.log("done")});
        zip = archiver('zip');
        zip.pipe(output);
        zip.file("app.js", {name: "app.js"});
        zip.bulk([
            {src: ["images/**"]},
            {src: ["data/**"]},
            {src: ["media/**"]}
        ]);
        zip.finalize();
    }
);
