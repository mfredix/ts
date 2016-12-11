module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            {pattern: '**/*.js.map', included: false}
        ],
        exclude: [],
        reporters: ['progress'],
        port: 9876,
        logLevel: config.LOG_DEBUG,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatch: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]
    });
};