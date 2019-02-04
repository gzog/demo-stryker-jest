module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: 'src/**/*.js',
        mutated: true,
        included: false
      },
      'test/**/*.js'
    ],
    testRunner: 'jest',
    mutator: 'javascript',
    transpilers: [],
    reporters: ['clear-text', 'progress', 'dots', 'html', 'dashboard'],
    coverageAnalysis: 'off',
    logLevel: 'info',
    fileLogLevel: 'info',
    allowConsoleColors: true
  });
};