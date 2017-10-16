var gulp = require('gulp'),
  watch = require('gulp-watch'),
  liveReload = require('gulp-livereload'),
  nodemon = require('gulp-nodemon'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  moment = require('moment'),
  notify = require('gulp-notify'),
  less = require('gulp-less'),
  babel = require('gulp-babel'),
  ngAnnotate = require('gulp-ng-annotate');

require('gulp-help')(gulp, {
  description: 'Help listing.'
});

gulp.task(
  'uglify-js',
  'Concat, Ng-Annotate, Uglify JavaScript into a single app.min.js.',
  function() {
    gulp
      .src(['./src/**/*.js'])
      .pipe(concat('app'))
      .pipe(
        babel({
          presets: ['env']
        })
      )
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(
        rename({
          extname: '.min.js'
        })
      )
      .pipe(gulp.dest('public'))
      .pipe(
        liveReload({
          auto: false
        })
      );
  }
);

gulp.task('less', 'Compile less into a single app.css.', function() {
  gulp
    .src(['./src/styleSheet/**/*.css'])
    .pipe(concat('app.css'))
    .on('error', notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest('public'))
    .pipe(
      liveReload({
        auto: false
      })
    );
});

gulp.task(
  'watch',
  "Watch for changes and live reloads Chrome. Requires the Chrome extension 'LiveReload'.",
  function() {
    liveReload.listen();
    watch(
      {
        glob: 'src/**/*.js'
      },
      function() {
        gulp.start('uglify-js');
      }
    );

    watch(
      {
        glob: 'src/styleSheet/**/*.css'
      },
      function() {
        gulp.start('less');
      }
    );

    watch({
      glob: 'public/**/*.html'
    }).pipe(
      liveReload({
        auto: false
      })
    );

    nodemon({
      script: 'index.js',
      ext: 'js'
    }).on('restart', function() {
      gulp.src('index.js').pipe(liveReload());
    });
  }
);

gulp.task('default', ['watch']);
