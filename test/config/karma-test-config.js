module.exports = config => {
    const commonConfig = require('./karma-common-config');

    config.set({
        basePath: commonConfig.basePath,

        files: commonConfig.files,

        singleRun: true,
        colors: true,
        autoWatch: true,
        logLevel: config.LOG_ERROR,

        frameworks: commonConfig.frameworks,

        browsers: ['PhantomJS'],

        plugins: commonConfig.plugins,

        // coverage reporter generates the coverage
        reporters: commonConfig.reporters,

        babelPreprocessor: commonConfig.babelPreprocessor,

        preprocessors: commonConfig.preprocessors,

        // optionally, configure the reporter
        coverageReporter: commonConfig.coverageReporter,

        thresholdReporter: commonConfig.thresholdReporter,

        client: {
            captureConsole: false
        }
    });
};
