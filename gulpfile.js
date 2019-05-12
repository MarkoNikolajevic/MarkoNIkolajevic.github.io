const gulp = require('gulp')
const webp = require('gulp-webp')

// Convert images into webp format
gulp.task('webpImg', () =>
  gulp.src('src/assets/img/*')
    .pipe(webp())
    .pipe(gulp.dest('src/assets/img'))
);
