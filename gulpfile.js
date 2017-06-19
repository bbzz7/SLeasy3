var gulp = require('gulp'),
    del = require('del'),
    $ = require('gulp-load-plugins')();


gulp.task('build', function () {
    return gulp.src([
        'src/version.js',
        // 'lib/GSAP/Club.js',
        'lib/Hammer.js',
        'lib/director.js',
        'lib/store.js',
        'lib/jquery.cookie.js',
        'lib/device.js',
        'src/config.js',
        'src/scope.js',
        'src/cache.js',
        'src/viewport.js',
        'src/slider.js',
        'src/imgToDiv.js',
        'src/position.js',
        'src/subMotion.js',
        'src/motionFX.js',
        'src/transition.js',
        'src/detail.js',
        'src/eventBind.js',
        'src/float.js',
        'src/music.js',
        'src/arrow.js',
        'src/boot.js',
        'src/loader.js',
        'src/router.js',
        'src/init.js'
    ])
        .pipe($.concat('SLeasy3.js'))
        .pipe(gulp.dest('build/'))
        // .pipe($.uglify())
        .pipe($.uglify({
            output: {
                comments: function (n, c) {
                    if (c.value.indexOf('庄宇') != -1) return true
                }
            }
        }))
        .pipe($.concat('SLeasy3.min.js'))
        .pipe(gulp.dest('build/'))
})


gulp.task('publish', ['clean', 'replace', 'img-publish', 'font-publish', 'SLeasy-publish', 'js-min'], function () {
    console.log('======================== 报告老板,项目构建发布成功~! ========================')
})


gulp.task('clean', function () {
    //return del.sync(['../@publish/*'],{force:true});
})


gulp.task('js-min', ['js-publish'], function () {
    var host = '../js/',
        dest = '../@publish/js/',
        files = [
            'app'
        ];
    for (var i = 0; i < files.length; i++) {
        gulp.src([
            '../js/copyRight.js',
            host + files[i] + '.js'
        ])
            .pipe($.uglify({
                output: {
                    comments: function (n, c) {
                        if (c.value.indexOf('庄宇') != -1) return true
                    }
                }
            }))
            .pipe($.concat(files[i] + '.js'))
            .pipe(gulp.dest(dest))
    }
})

gulp.task('replace', function () {
    var origin = /<!--SLeasy3-->\n(.*\n)*<!--SLeasy3 end-->/,
        replace = '<script src="SLeasy3/build/SLeasy3.min.js" charset="utf-8"></script>';

    return gulp.src('../*.html')
        .pipe($.replace(origin, replace))
        .pipe(gulp.dest('../@publish/'))
})

gulp.task('js-publish', function () {
    return gulp.src(['../js/*'])
        .pipe(gulp.dest('../@publish/js/'));
})

gulp.task('font-publish', function () {
    return gulp.src(['../font/*'])
        .pipe(gulp.dest('../@publish/font/'));
})

gulp.task('img-publish', function () {
    return gulp.src(['../images/*', '../images/*/*', '../images/*/*/*', '../images/*/*/*/*'])
        .pipe(gulp.dest('../@publish/images/'))
})

gulp.task('SLeasy-publish', ['build'], function () {
    return gulp.src(['build*/SLeasy3.min.js', 'plugin*/*', 'lib*/*', 'lib*/canvas/*', 'lib*/physics/*', 'lib*/GSAP*/*', 'lib*/GSAP*/easing*/*', 'lib*/GSAP*/plugin*/*', 'lib*/GSAP*/plugins*/*', 'lib*/GSAP*/utils*/*'])
        .pipe(gulp.dest('../@publish/SLeasy3/'))
})

gulp.task('tinypng', function () {
    return gulp.src('images/*.png')
        .pipe($.tinypng('_m2Wv-QqrVpEh3pZaAdBJMBOXHS-wcqS'))
        .pipe(gulp.dest(LocalPath + 'images/'))
})