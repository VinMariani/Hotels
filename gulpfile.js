import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

const config = {
  mode: {
    symbol: {
      sprite: '../sprite.svg',
      render: {
        css: false
      }
    }
  }
};

export const sprite = () => {
  return gulp.src(['./public/assets/vectors/**/*.svg', '!./public/assets/vectors/sprite.svg'])
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./public/assets/vectors/'));
};

const defaultTask = gulp.series(sprite);

export default defaultTask;