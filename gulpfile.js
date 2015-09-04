var gulp;
var browserify;
var source;
var babelify;

gulp = require("gulp");
browserify = require("browserify");
source = require("vinyl-source-stream");
babelify = require("babelify");

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
        pipe(gulp.dest(".")).
        on('done', function(){console.log('woah')});
    }
);
