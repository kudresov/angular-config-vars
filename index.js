'use strict';

var express = require('express');
var app = express();

var gulp = require('gulp'); // Load gulp
require('./gulpfile'); // Loads our config task


// Kick of gulp 'config' task, which generates angular const configuration
gulp.start('config'); 

// serve client side files
app.use(express.static('client'));

app.listen(3000);

console.log('Listening on port 3000');