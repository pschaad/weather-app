const gulp = require('gulp');
const electron = require('electron-connect').server.create();

gulp.task('serve', function () {

    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('main.js', electron.restart);

    // Reload renderer process
    gulp.watch(['index.js', 'app/index.html'], electron.reload);
});
