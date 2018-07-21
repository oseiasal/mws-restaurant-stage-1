/*
 * dar o npm init, instalar o gulp localmente, fazer o require
 * não precisa ficar dando npm init ou instal quando instalar mó-
 *los nas dependências.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    //Ok
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 8080,
        ui: {
            port: 8081
        }
    });

    gulp.watch("./*.*").on('change', browserSync.reload);
    gulp.watch("js/*.*").on('change', browserSync.reload);
    gulp.watch("css/*.*").on('change', browserSync.reload);
});
