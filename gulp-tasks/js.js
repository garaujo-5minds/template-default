const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const PATHS = require('../paths');
var rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence').use(gulp);

module.exports = function scripts() {
return gulp.src(PATHS.src.scripts, { allowEmpty: true })
          .pipe(sourcemaps.init())
          .pipe(babel({
              presets: ['@babel/env']
          }))
          .pipe(uglify())
        .pipe(rename(function (path) {
          path.extname = '.min.js';
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(PATHS.build.scripts));
};
