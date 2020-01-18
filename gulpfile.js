const gulp = require('gulp');
const webp = require('gulp-webp');

// Coverts images in webp format
gulp.task('webpImg', () =>
  gulp
    .src('src/assets/img/*')
    .pipe(webp())
    .pipe(gulp.dest('src/assets/img'))
);
