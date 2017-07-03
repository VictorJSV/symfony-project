// assets/js/main.js

// loads the jquery package from node_modules
var $ = require('jquery');

// a CSS file with the same name as the entry js will be output
//require('../css/main.scss');
require('../css/test.styl');

// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file
var greet = require('./greet');

$(document).ready(function() {
    $('h1').html(greet('john'));
});