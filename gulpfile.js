const gulp = require("gulp"),
  connect = require("gulp-connect"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify");

// Compile Pug Files
gulp.task("compile-pug", () =>
  gulp.src("./stage/index.pug").pipe(pug()).pipe(gulp.dest("./docs/")).pipe(connect.reload())
);

// Compile SASS Files With Prefixes
gulp.task("compile-sass", () =>
  gulp
    .src("./stage/sass/main.sass")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("./docs/assets/css/"))
    .pipe(connect.reload())
);

// Redirect JS
gulp.task("redirect-js", () =>
  gulp.src("./stage/assets/**/*.js").pipe(uglify()).pipe(gulp.dest("./docs/assets/")).pipe(connect.reload())
);

// Redirect Assets
gulp.task("redirect-assets", () =>
  gulp
    .src(["./stage/assets/**/*.*", "!./stage/assets/**/*.js"])
    .pipe(gulp.dest("./docs/assets/"))
    .pipe(connect.reload())
);

// Start Server & Watch Changes
gulp.task("default", () => {
  connect.server({
    root: "./docs/",
    livereload: true,
  });
  gulp.watch("./stage/**/*.pug", gulp.series("compile-pug"));
  gulp.watch("./stage/**/*.sass", gulp.series("compile-sass"));
  gulp.watch("./stage/assets/**/*.js", gulp.series("redirect-js"));
  gulp.watch(["./stage/assets", "!./stage/assets/**/*.js"], gulp.series("redirect-assets"));
});
