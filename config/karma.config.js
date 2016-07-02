module.exports = function(config) {
    const path = require('path');

    config.set({
        basePath: path.resolve(__dirname, '../'),

        frameworks: ['jasmine'],

        files: [
            'config/setup.spec.js'
        ],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'config/setup.spec.js': ['webpack', 'sourcemap']
        },

        reporters: ['dots', 'coverage', 'spec'],

        // optionally, configure the reporter
        coverageReporter: {
            dir: 'coverage',
            subdir: '.',

            reporters: [
                {type: 'text-summary'},
                {type: 'html', subdir: 'html'},
                {type: 'lcov', file: 'lcov.info'}
            ],

            check: {
                global: {
                    statements: 90,
                    branches: 90,
                    functions: 90,
                    lines: 90
                }
            }
        },

        webpack: {
            devtool: 'inline-cheap-source-map',

            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        exclude: /(node_modules)/,
                        query: {
                            presets: ['es2015'],
                            plugins: [
                                ['__coverage__', {ignore: '**/*.spec.js'}]
                            ]
                        }
                    }
                ]
            },

            resolve: {
                root: __dirname,
                extensions: ['', '.js', '.json']
            }
        },

        webpackServer: {noInfo: true},

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS'],

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity,

        autoWatch: false,
        singleRun: true
    });
};
