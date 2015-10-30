console.log("loading libs...");

var args = require("minimist")(process.argv.slice(2));

// console.log(args);
// return;

var browserify = require("browserify");
var babelify = require("babelify");
var stringify = require("stringify");
var fs = require("fs");
var uglify = require("uglify-js");

var footer = "\nconsole.log('Build Time: ', '" + (new Date()).toString() + "');";

var settings = {
    entries: ["./lib.js"],
    debug: true,
    paths: ['.'],
    transform: [
        [
            babelify,
            {
                loose: 'all',
                stage: 0,
                optional: 'runtime',
                blacklist: "flow",
                compact: false,
                ignore: /(lib|node_modules|external)\/.*/
            }
        ],
        [
            stringify,
            {extensions: ['.source']}
        ]
    ],
    extensions: [".js"]
};

var compiler = browserify(settings);
compiler.exclude("ipc");
console.log("compilng code...");
compiler.bundle(function (err, buffer) {
    console.log("saving compiled code...");
    // buffer.write(footer);
    fs.writeFile(
        "corinthian.js",
        buffer,
        {encoding: 'utf8'},
        function () {
            fs.appendFile("corinthian.js", footer, {encoding: 'utf8'});
            console.log("Done")
        }
    );
});
