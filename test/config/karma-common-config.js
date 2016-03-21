module.exports = {
    basePath: '../../',

    files: [
        "bower_components/angular/angular.js",
        "bower_components/angular-mocks/angular-mocks.js",
        "src/**/*.js",
        "test/specs/**/*.js"
    ],

    frameworks: ['jasmine'],

    plugins: [
        'karma-babel-preprocessor',
        'karma-coverage',
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-threshold-reporter'
    ],

    babelPreprocessor: {
        options: {
            // sourceMap: 'inline'
        },
        sourceFileName(file) {
            return file.originalPath;
        }
    },

    preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'src/**/*.js': ['babel', 'coverage'],
        'test/specs/**/*.spec.js': ['babel']
    },

    reporters: ['progress', 'coverage', 'threshold'],

    // optionally, configure the reporter
    coverageReporter: {
        dir: 'test/reports/coverage/',
        reporters: [
            {type: 'html', subdir: 'html'},
            {type: 'lcov', subdir: 'lcov'}
        ]
    },

    thresholdReporter: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
    }
};
