var gulp;
var browserify;
var source;
var babelify;
var uglify;
var buffer;
var concat;
var sass;

var footer;

gulp = require("gulp");
browserify = require("browserify");
source = require("vinyl-source-stream");
babelify = require("babelify");
uglify = require("gulp-uglify");
buffer = require("vinyl-buffer");
concat = require("gulp-concat-util");
sass = require("gulp-sass");

footer = "\nconsole.log('Build Time: ', '" + (new Date()).toString() + "');";

gulp.task(
    "test-script",
    function () {
        return browserify({
            entries: ["./test.js"],
            debug: true,
            paths: ['.'],
            transform: [
                [
                    babelify, {loose: 'all', stage: 0, optional: 'runtime', blacklist: "flow", compact: false, ignore: /lib\/.*/}
                ]
            ],
            extensions: [".js"]
        }).
        bundle().
        pipe(source("app.js")).
        pipe(gulp.dest("."));
    }
);

gulp.task(
    "library",
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
        pipe(source("corinthian.js")).
        pipe(buffer()).
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
