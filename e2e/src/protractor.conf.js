'use strict';
// const JR = require('protractor-jasmine2-html-reporter');
// const testResultsDir = 'results';

exports.config = {
    framework: 'jasmine', //Type of Framework used 
    // allScriptsTimeout: 10000,

    parserOptions: {
        tsconfigRootDir: __dirname,
      },
    // baseUrl: 'https://www.huffpost.com/',  
    directConnect:true, 
    specs: ['./specs/header.spec.ts', './specs/menu.spec.ts'], //Name of the Specfile 
    // specs: ['./specs/menu.spec.ts'],

    capabilities:{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            args: [ '--window-size=1920x1080', '--headless'],
            prefs: {
                'profile.managed_default_content_settings.notifications': 1
            }
        }
    },

    // multiCapabilities:[{
    //     'browserName': 'chrome',
    //     shardTestFiles: true,
    //     maxInstances: 2,
    //     chromeOptions: {
    //         args: [ '--window-size=1920x1080', '--headless'],
    //         prefs: {
    //             'profile.managed_default_content_settings.notifications': 1
    //         }
    //     }, {
    //     'browserName': 'firefox',
    //     'moz:firefoxOptions': {
    //         'args': ['--safe-mode']
    //       }
    //     }

    // }],
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 30000,
        // print: function() {}
    },
    onPrepare: async () => { 
          require('ts-node').register({ 
          project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
        });

        // jasmine.getEnv().addReporter(
        //     new JR({
        //         takeScreenshotsOnlyOnFailures: true,
        //         savePath: testResultsDir,
        //     })
        // );
        browser.driver
        .manage()
        .window()
        .maximize();

    let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

    // jasmine.getEnv().addReporter(
    //     new SpecReporter({
    //         spec: {
    //             displayStacktrace: true,
    //             displayFailuresSummary: true,
    //             displaySpecDuration: true
    //         }
    //     })
    // );

    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'

      }));

      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });

    await browser.waitForAngularEnabled(false);
    }


};