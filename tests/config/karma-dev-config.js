var fs = require('fs');
//Load all files from json file to prevent bloating of config file
var files = JSON.parse(fs.readFileSync("tests/config/files.json"));

module.exports = function (config) {
    config.set({
        basePath : '../../',
        files : files,
        singleRun: false,
        colors: true,
        autoWatch: true,
        logLevel: config.LOG_DISABLE,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        plugins : [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine'
        ],

        reporters: ['dots'],

        client: {
            captureConsole: false
        },
    });
};