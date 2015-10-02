var requireDir = require('require-dir')
global.browserSync = require('browser-sync').create();

// Path to dir config
global.path = {
    src: './src',
    scss: './src/_sass/**/*.scss',
    css: './src/css',
    js: './src/_app/**/*.js',
    html: ['./src/_pages/*.html', './src/_component/**/*.html', './src/_layout/*.html'],
    json: './src/+data+/*.json'
};

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./', {recurse: true})
