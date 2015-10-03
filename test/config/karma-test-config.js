var fs = require('fs');
//Load all files from json file to prevent bloating of config file
var files = JSON.parse(fs.readFileSync("test/config/files.json"));

module.exports = function (config) {
    config.set({
        basePath : '../../',

        files : files,

        singleRun: true,
        colors: true,
        autoWatch: true,
        logLevel: config.LOG_ERROR,

        frameworks: ['jasmine'],

        browsers : ['PhantomJS'],

        plugins : [
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine'
        ],

        client: {
            captureConsole: false
        },

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
          'src/**/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
          type : 'html',
          dir : 'test/reports/coverage/'
        }
    });
};