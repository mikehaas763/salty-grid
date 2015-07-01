var esTranspiler = require('broccoli-babel-transpiler');
var funnel = require('broccoli-funnel');
var SystemJsBrocBuilder = require('broccoli-systemjs-builder/lib/SystemJsBrocBuilder.js');

var libOutputName = 'SaltyGrid';
var libRoot = 'lib';

var tree = funnel(libRoot, {
    destDir: libOutputName
});

var builder = new SystemJsBrocBuilder([tree], 'lib/SaltyGrid.js');

module.exports = builder;