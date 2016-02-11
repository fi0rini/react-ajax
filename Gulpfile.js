// dependencies
var gulp = require('gulp')
  , browserSync = require('browser-sync').create()
  , browserify = require('browserify')
  , babelify = require('babelify')
  , source = require('vinyl-source-stream')
  , del = require('del')
  , server = require('./server');

gulp

.task('browserify', function () {
  return browserify({
    debug: true,
    entries: 'js/app.js',
    extensions: ['.js','.jsx'],
    basedir: './src',
    transform: [babelify]
  })
  .bundle()
  .on('error', function(err) {
    console.error(err.toString())
    this.emit('end');
  })
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/js'))
  .pipe(browserSync.stream());
})

.task('server', function () {
  browserSync.init({
    proxy: 'localhost:4000',
    port: 4000,
    open: false
  });
})

.task('clean:build', function () {
  return del.sync(['./build/**'])
})

.task('copy-html', function () {
  gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
})

.task('build', ['copy-html', 'browserify'])

.task('watch', ['build'], function () {
  gulp.watch(['./src/html/**/*.html'], ['copy-html']);
  gulp.watch(['./src/js/**/*.js?(x)'], ['browserify'])
})

.task('default', [
  'clean:build',
  'watch',
  'server'
]);
