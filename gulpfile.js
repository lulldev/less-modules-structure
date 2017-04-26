var gulp = require("gulp");
var argv = require("yargs").argv;
var copy = require('gulp-copy');

var evernotelessConfig = {
    evernotelessCorePath: "./evernoteless",
    evernotelessBlangPage: "./evernoteless/blank-page",
    lessSrc: "./src/less"
};

gulp.task("create-less-page", function() {
    var path = argv.path;
    if (!!path) {
        gulp.src(evernotelessConfig.evernotelessBlangPage + "/**/*")
             .pipe(gulp.dest(evernotelessConfig.lessSrc + "/" + path));
    }
});