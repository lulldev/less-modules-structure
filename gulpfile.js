var gulp = require("gulp");
var argv = require("yargs").argv;
var copy = require('gulp-copy');

var evernotelessConfig = {
    evernotelessCorePath: "./evernoteless",
    evernotelessBlankPage: "./evernoteless/blank-page",
    evernotelessBlankModule: "./evernoteless/blank-module",
    lessSrc: "./src/less"
};

gulp.task("create-less-page", function() {
    var path = argv.path;
    if (!!path) {
        gulp.src(evernotelessConfig.evernotelessBlankPage + "/**/*")
             .pipe(gulp.dest(evernotelessConfig.lessSrc + "/" + path));
    }
});

gulp.task("create-less-module", function() {
    var page = argv.page;
    var name = argv.name;
    if (!!page && !!name) {
        gulp.src(evernotelessConfig.evernotelessBlankModule + "/**/*")
             .pipe(gulp.dest(evernotelessConfig.lessSrc + "/" + page + "/modules/" + name));
    }
});