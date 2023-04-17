const gulp = require('gulp')

const clean = require('./gulp-tasks/clean')
const styles = require('./gulp-tasks/styles')
const fonts = require('./gulp-tasks/fonts')
const js = require('./gulp-tasks/js')
const images = require('./gulp-tasks/images')
const svg = require('./gulp-tasks/svg')
const watch = require('./gulp-tasks/watch')
const server = require('./gulp-tasks/server')
const video = require('./gulp-tasks/video')
const publicAssets = require('./gulp-tasks/public')

gulp.task(
  'build',
  gulp.parallel(styles, fonts, images, svg, video, publicAssets, js)
)

gulp.task('production', gulp.series(clean, 'build', js))

gulp.task('default', gulp.parallel('build', watch, server))
