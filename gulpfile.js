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
$.useref = require(SLeasyPath + 'node_modules/gulp-useref');
$.if = require(SLeasyPath + 'node_modules/gulp-if');
$.rename = require(SLeasyPath + 'node_modules/gulp-rename');


gulp.task('build', function () {
    return gulp.src([
        'src/version.js',
        'lib/audio/howler.min.js',
        'lib/GSAP3/Club3.min.js',
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
    return $.del([LocalPath + '@publish/*.html']);
});

gulp.task('replace', function () {
    var t = (new Date).getTime();
    var origin = /<!--SLeasy3-->\n(.*\n)*<!--SLeasy3 end-->/,
        replace = '<script src="' + cdn + 'SLeasy3/build/SLeasy3.min.js?' + t + '" charset="utf-8"></script>';

    var oldTime = /<!--timeStamp-->/,
        newTime = '<script>window.SLeasyTimeStamp=' + t + '</script>';

    return gulp.src(LocalPath + '*.html')
        .pipe($.replace(oldTime, newTime))
        .pipe($.replace(origin, replace))
        .pipe($.replace(SLeasyPath, cdn + 'SLeasy3/'))
        .pipe($.replace('app.js', 'app.js?' + t))
        .pipe(gulp.dest(LocalPath + '@publish/'));
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

//js压缩任务组 ---------------------------------
var jsMinTasks = [];
creteJsMinTasks();

function creteJsMinTasks() {
    var host = LocalPath + 'js/',
        dest = LocalPath + '@publish/js/',
        files = [
            'app',
        ];
    for (var i = 0; i < files.length; i++) {
        (function (j) {
            gulp.task('js-min' + j, function (done) {
                gulp.src([
                    LocalPath + 'js/copyRight.js',
                    host + files[j] + '.js'
                ]).pipe($.uglify({
                    output: {
                        comments: function (n, c) {
                            if (c.value.indexOf('庄宇') != -1) return true
                        }
                    }
                })).pipe($.concat(files[j] + '.js')).pipe(gulp.dest(dest));
                done();
            })
            jsMinTasks.push('js-min' + j);
        })(i)
    }
}

gulp.task('js-min', gulp.series(...jsMinTasks));
// -----------------------------------------------

gulp.task('js-publish', function () {
    return gulp.src(['js/*', 'js/*/*', 'js/*/*/*', 'js/*/*/*/*', 'js/*/*/*/*/*'].map(function (item) {
        return LocalPath + item;
    })).pipe(gulp.dest(LocalPath + '@publish/js/'))
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

// gulp.task('js-build', gulp.series('js-publish', 'js-min'));
gulp.task('js-build', gulp.series('js-publish'));
gulp.task('publish', gulp.series('clean', 'img-publish', 'font-publish', 'build', 'SLeasy-publish', 'js-build', 'replace', 'endReport'));

// ！！！生产部署
function deploy(isMinify) {
    return async function () {
        //抽取、合并、压缩
        await new Promise(function (resolve) {
            console.log('① js抽取、合并、压缩执行中...')
            var timeStamp = new Date().getTime();
            gulp.src('*.html') // 输入源文件的路径
                .pipe($.replace(/(app\.js")/g, 'app.js?' + timeStamp + '" crossorigin="anonymous"'))
                .pipe($.useref())
                .pipe($.if('*.js', $.uglify()))// 压缩 JavaScript 文件（可选）
                .pipe($.replace(/(js\/SLeasy3.min\.js")/g, cdn + 'js/SLeasy3.min.js?' + timeStamp + '" crossorigin="anonymous"'))
                .pipe(gulp.dest(LocalPath + '@publish/')) // 输出到目标目录
                .on('end', resolve)
        })

        //移动js
        await new Promise(function (resolve) {
            console.log('② js抽复制执行中...')
            gulp.src('@publish/*.js')
                .pipe(gulp.dest('@publish/js/'))
                .on('end', resolve)
        })

        //复制js
        await new Promise(function (resolve) {
            if (isMinify) {
                console.log('③ app、copyright合并、压缩、复制执行中...')
                gulp.src(['js/copyRight.js', 'js/app.js'])
                    .pipe($.uglify({
                        output: {
                            comments: function (n, c) {
                                if (c.value.indexOf('庄宇') != -1) return true
                            }
                        }
                    })).pipe($.concat('app.js'))
                    .pipe(gulp.dest('@publish/js/'))
                    .on('end', resolve)
            } else {
                console.log('③ app、copyright合并、复制执行中...')
                gulp.src(['js/copyRight.js', 'js/app.js'])
                    .pipe($.concat('app.js'))
                    .pipe(gulp.dest('@publish/js/'))
                    .on('end', resolve)
            }
        })
        //复制images
        await new Promise(function (resolve) {
            console.log('④ images下文件复制执行中...')
            gulp.src('images/**/*')
                .pipe(gulp.dest('@publish/images/'))
                .on('end', resolve)
        })
        //清理@publish下的原始js文件
        await $.del(['@publish/*.js']).then(function () {
            console.log('--------------- 生产部署打包完成！---------------');
        });
    }
}

gulp.task('deploy', deploy(true));
gulp.task('deploy-noMin', deploy(false));