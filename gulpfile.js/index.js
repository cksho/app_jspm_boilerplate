var requireDir = require('require-dir')
global.browserSync = require('browser-sync').create();

// Path to dir config
global.path = {
    src: './src',
    scss: './src/_sass/**/*.scss',
    css: './src/css',
    js: './src/_app/**/*.js',
    html: ['./src/_pages/*.html.twig', './src/_component/**/*.html.twig', './src/_layout/*.html.twig'],
    schema: './src/+schema/*.json',
    json: './src/json/'
};

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./', {recurse: true})
