const gulp = require('gulp');
const rev = require('gulp-rev');
 
gulp.task('default', () =>
    gulp.src('src/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist'))
);