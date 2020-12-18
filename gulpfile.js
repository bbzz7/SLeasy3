// var SLeasyPath = '../@GitHub/SLeasy3/',
var SLeasyPath = './',
    LocalPath = './',
    gulp = require('gulp'),
    $ = {},
    cdn = '';

$.del = require(SLeasyPath + 'node_modules/del');
$.rev = require(SLeasyPath + 'node_modules/gulp-rev-append');
$.concat = require(SLeasyPath + 'node_modules/gulp-concat');
$.uglify = require(SLeasyPath + 'node_modules/gulp-uglify');
$.replace = require(SLeasyPath + 'node_modules/gulp-replace');
$.tinypng = require(SLeasyPath + 'node_modules/gulp-tinypng');


gulp.task('build', function () {
    return gulp.src([
        'src/version.js',
        'lib/audio/howler.min.js',
        'lib/GSAP/Club.min.js',
        'lib/Hammer.js',
        'lib/director.js',
        'lib/store.js',
        'lib/jquery.cookie.js',
        'lib/iphone-inline-video.js',
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
    ].map(function (item) {
        return SLeasyPath + item;
    }))
        .pipe($.concat('SLeasy3.js'))
        .pipe(gulp.dest(SLeasyPath + 'build/'))
        .pipe($.uglify({
            output: {
                comments: function (n, c) {
                    if (c.value.indexOf('庄宇') != -1) return true
                }
            }
        }))
        .pipe($.concat('SLeasy3.min.js'))
        .pipe(gulp.dest(SLeasyPath + 'build/'))
})

gulp.task('SLeasy-publish', function () {
    return gulp.src([
        'build*/SLeasy3.min.js',
        'plugin*/*',
        'lib*/*',
        'lib*/canvas/*',
        'lib*/audio/*',
        'lib*/physics/*',
        'lib*/scrollmagic/*',
        'lib*/GSAP*/*',
        'lib*/GSAP*/easing*/*',
        'lib*/GSAP*/plugin*/*',
        'lib*/GSAP*/plugins*/*',
        'lib*/GSAP*/utils*/*',
        'lib*/css*/*',
        'lib*/utils*/*',
    ].map(function (item) {
        return SLeasyPath + item;
    })).pipe(gulp.dest(LocalPath + '@publish/SLeasy3/'))
});

gulp.task('clean', function (done) {
    return $.del([LocalPath + '@publish/index.html']);
});

gulp.task('replace', function () {
    var origin = /<!--SLeasy3-->\n(.*\n)*<!--SLeasy3 end-->/,
        replace = '<script src="' + cdn + 'SLeasy3/build/SLeasy3.min.js?' + ((new Date).getTime()) + '" charset="utf-8"></script>';

    var oldTime = /<!--timeStamp-->/,
        newTime = '<script>window.SLeasyTimeStamp=' + (new Date).getTime() + '</script>';

    return gulp.src(LocalPath + '*.html')
        .pipe($.replace(oldTime, newTime))
        .pipe($.replace(origin, replace))
        .pipe($.replace(SLeasyPath, cdn + 'SLeasy3/'))
        .pipe($.replace('app.js', 'app.js?' + (new Date).getTime()))
        .pipe(gulp.dest(LocalPath + '@publish/'))
});

gulp.task('img-publish', function () {
    return gulp.src(['images/*', 'images/*/*', 'images/*/*/*', 'images/*/*/*/*'].map(function (item) {
        return LocalPath + item;
    }))
        .pipe(gulp.dest(LocalPath + '@publish/images/'))
});

gulp.task('font-publish', function () {
    return gulp.src([LocalPath + 'font/*'])
        .pipe(gulp.dest(LocalPath + '@publish/font/'));
});

gulp.task('js-min', function (done) {
    var host = LocalPath + 'js/',
        dest = LocalPath + '@publish/js/',
        files = [
            'app'
        ];
    for (var i = 0; i < files.length; i++) {
        gulp.src([
            LocalPath + 'js/copyRight.js',
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
    ;
    done();
});

gulp.task('js-publish', function () {
    return gulp.src([LocalPath + 'js/*'])
        .pipe(gulp.dest(LocalPath + '@publish/js/'));
});

gulp.task('tinypng', function () {
    return gulp.src('images/*.png')
        .pipe($.tinypng('_m2Wv-QqrVpEh3pZaAdBJMBOXHS-wcqS'))
        .pipe(gulp.dest(LocalPath + 'images/'))
});

gulp.task('endReport', function (done) {
    console.log('======================== 报告老板,项目构建发布成功~! ========================');
    done();
});

gulp.task('js-build', gulp.series('js-min', 'js-publish'));
//gulp.task('js-build', gulp.series('js-publish'));
gulp.task('publish', gulp.series('clean', 'replace', 'img-publish', 'font-publish', 'build', 'SLeasy-publish', 'js-build', 'endReport'));