var gulp = require("gulp");
var argv = require("yargs").argv;
var copy = require('gulp-copy');

var gulp = require("gulp"),
  minify = require("gulp-clean-css"),
  lessImport = require('gulp-less-import'),
  less = require("gulp-less"),
  concat = require("gulp-concat");

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
             .pipe(gulp.dest(evernotelessConfig.lessSrc + "/" + project + "/pages/" + name));
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

gulp.task("minify-less", function () {
  return gulp.src(evernotelessConfig.lessSrc + '/**/*.less')
	.pipe(lessImport(evernotelessConfig.lessSrc + '/**/*.less'))
	.pipe(less())
    .pipe(concat("style.min.css"))
    .pipe(minify())
    .pipe(gulp.dest("./build"));
});

gulp.task("build", ["minify-less"], function () {
  return gulp.src(['!.'+ evernotelessConfig.lessSrc + '/**/*', './src/**/*', './src/*.html'])
  .pipe(gulp.dest('./build'));
});
