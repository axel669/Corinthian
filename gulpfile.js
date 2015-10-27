var gulp;
var browserify;
var source;
var babelify;
var uglify;
var buffer;
var concat;
var sass;
var stringify;
var gulpUtil;

var footer;

gulp = require("gulp");
browserify = require("browserify");
source = require("vinyl-source-stream");
babelify = require("babelify");
uglify = require("gulp-uglify");
buffer = require("vinyl-buffer");
concat = require("gulp-concat-util");
sass = require("gulp-sass");
stringify = require('stringify');
gulpUtil = require("gulp-util");

footer = "\nconsole.log('Build Time: ', '" + (new Date()).toString() + "');";
if (gulpUtil.env.footer === false) {
    footer = '';
}

var browserifyOptions = {
    entries: ["./" + gulpUtil.env.source + ".js"],
    debug: true,
    paths: ['.'],
    // exclude: 'ipc',
    // detectGlobals: false,
    // insertGlobals: true,
    // fast: true,
    // ig: true,
    // insertGlobalVars: ['__dirname', '__filename', 'process', 'global'],
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

gulp.task(
    "test-script",
    function () {
        return browserify(browserifyOptions).
        bundle().
        pipe(source("app.js")).
        pipe(gulp.dest("."));
    }
);

gulp.task(
    "compile-js",
    function () {
        var codez = browserify(browserifyOptions);
        codez.exclude('ipc');

        return codez.
        bundle().
        pipe(source(gulpUtil.env.dest + ".js")).
        pipe(buffer()).
        pipe(concat.footer(footer)).
        pipe(gulp.dest("."));
    }
);

gulp.task(
    "compile-js-min",
    function () {
        browserifyOptions.debug = false;
        return browserify(browserifyOptions).
        bundle().
        pipe(source(gulpUtil.env.dest + ".min.js")).
        pipe(buffer()).
        pipe(uglify()).
        pipe(concat.footer(footer)).
        pipe(gulp.dest("."));
    }
);

gulp.task(
    "library-min",
    function () {
        return browserify({
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
                        ignore: /(external|node_modules)\/.*/
                    }
                ]
            ],
            extensions: [".js"]
        }).
        bundle().
        pipe(source("corinthian.min.js")).
        pipe(buffer()).
        pipe(uglify()).
        pipe(concat.footer(footer)).
        pipe(gulp.dest("."));
    }
);

gulp.task(
    "css",
    function () {
        return gulp.src("sass/material.scss").
        pipe(sass()).
        pipe(gulp.dest("sass"));
    }
);

// gulp.run('compile-js');
