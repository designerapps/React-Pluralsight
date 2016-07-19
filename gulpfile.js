var gulp = require('gulp');
var browerify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var browserSync = require('browser-sync');
var liveServer = require('gulp-live-server');

gulp.task('live-server',function(){
  var server = new liveServer('server/main.js');
  server.start();
})

gulp.task('bundle',function(){
  return browerify({
    entries: 'app/main.jsx',
    debug: true
  }).transform('reactify')
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'));
})

gulp.task('serve',['live-server'],function(){
  browserSync.init(null,{
    proxy:'http://localhost:7777',
    port: 9001
  })
})
