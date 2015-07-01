var browserSync = require('browser-sync').create();
var Builder = require('systemjs-builder');
var gulp = require('gulp');

gulp.task('serve', gulp.series(build, serve));

function serve() {
    browserSync.init({
        startPath: '/demo',
        open: false,
        server: {
            baseDir: ''
        }
    });

    gulp.watch(['lib/**/*.js', 'yolo.js'], gulp.series(build, browserSync.reload));
}

function build(done) {
    var builder = new Builder({
        transpiler: 'babel',
        paths: {
            '*': 'lib/*',
            'node_modules/*': 'node_modules/*'
        },
        map: {
            'zztop': 'node_modules/zztop'
        }
    });

    builder
        .buildSFX('SaltyGrid.js', 'build/bundle.js', {
            sourceMaps: true
        })
        .catch(function(error) {
            console.log(error);
        })
        .finally(function() {
            done();
        });
}