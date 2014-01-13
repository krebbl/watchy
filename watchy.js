var watch = require('watch'),
    fs = require('fs');

watch.createMonitor('/Users/mkre/Downloads', function (monitor) {
//    monitor.files['/home/mikeal/.zshrc'] // Stat object for my zshrc.

    monitor.on("created", function (f, stat) {
        fs.lstat(f, function(err, stats){
            console.log(stats);

        });
        // Handle new files
    });
    monitor.on("changed", function (f, curr, prev) {
        fs.lstat(f, function (err, stats) {
            console.log(stats);

        });
        // Handle file changes
    });
    monitor.on("removed", function (f, stat) {
        fs.lstat(f, function (err, stats) {
            console.log(stats);

        });
        // Handle removed files
    });
});