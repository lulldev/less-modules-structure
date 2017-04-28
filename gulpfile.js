var gulp = require("gulp");
var argv = require("yargs").argv;
var copy = require('gulp-copy');

var evernotelessConfig = {
    evernotelessCorePath: "./evernoteless",
    evernotelessBlankProject: "./evernoteless/blank-project",
    evernotelessBlankPage: "./evernoteless/blank-page",
    evernotelessBlankModule: "./evernoteless/blank-module",
    lessSrc: "./src/less"
};

gulp.task("create-less-project", function() {
    var name = argv.name;
    if (!!name) {
        gulp.src(evernotelessConfig.evernotelessBlankProject + "/**/*")
             .pipe(gulp.dest(evernotelessConfig.lessSrc + "/" + name));
    }
});

gulp.task("create-less-page", function() {
    var project = argv.project;
    var name = argv.name;
    if (!!project && !!name) {
        gulp.src(evernotelessConfig.evernotelessBlankPage + "/**/*")
             .pipe(gulp.dest(evernotelessConfig.lessSrc + "/" + project + "/" + name));
    }
});

gulp.task("create-less-module", function() {
    var project = argv.project;
    var modulePath = !!argv.page ? argv.page + "/modules" : 'global-modules';
    var name = argv.name;

    if (!!project && !!name) {
            gulp.src(evernotelessConfig.evernotelessBlankModule + "/**/*")
                 .pipe(gulp.dest(evernotelessConfig.lessSrc + "/" + project + '/' + modulePath + "/" + name));
    }
});