module.exports = function(config) {
    const path = require('path');

    config.set({
        basePath: path.resolve(__dirname, '../'),

        frameworks: ['jasmine', 'tap'],

        files: [
            'config/setup.spec.js',
        ],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'config/setup.spec.js': ['webpack', 'sourcemap'],
        },

        reportSlowerThan: 100,

        reporters: ['dots', 'coverage', 'spec', 'tap-pretty'],

        // optionally, configure the reporter
        coverageReporter: {
            dir: 'coverage',
            subdir: '.',

            reporters: [
                {type: 'text-summary'},
                {type: 'lcov', file: 'lcov.info'},
            ],

            check: {
                global: {
                    statements: 90,
                    branches: 90,
                    functions: 90,
                    lines: 90,
                },
            },
        },

        tapReporter: {
            prettifier: 'faucet',
        },

        webpack: {
            mode: 'production',

            node: {
                fs: 'empty',
            },

            devtool: 'inline-cheap-source-map',

            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: [
                                    ['istanbul', {ignore: '**/*.spec.js'}],
                                ],
                            },
                        },
                    },
                ],
            },

            resolve: {
                extensions: ['.js', '.json'],
            },
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
        singleRun: true,
    });
};
