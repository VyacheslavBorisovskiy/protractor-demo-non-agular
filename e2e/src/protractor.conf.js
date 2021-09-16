'use strict';
// const JR = require('protractor-jasmine2-html-reporter');
const testResultsDir = 'results';
// const path = require('path');
// const tempDir = __dirname + path.sep + 'automationDownload' + path.sep + new Date().getTime();
// const downloadDir = path.resolve(tempDir);


exports.config = {
    framework: 'jasmine', //Type of Framework used 
    // allScriptsTimeout: 10000,

    parserOptions: {
        tsconfigRootDir: __dirname,
      },
    // baseUrl: 'https://www.huffpost.com/',  
    directConnect:true,
    // seleniumAddress: "http://localhost:4444/wd/hub",
    // specs: ['./specs/header.spec.ts', './specs/menu.spec.ts'], //Name of the Specfile
    specs: ['readJson.spec.ts'], 

    
    // SELENIUM_PROMISE_MANAGER: false,
    capabilities:{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [ '--window-size=1920x1080', '--headless'],
            prefs: {
                'profile.managed_default_content_settings.notifications': 1
            }
        }
    },


    // capabilities:{
    //     browserName: 'safari',
    //     shardTestFiles: true,
    //     maxInstances: 5,
    // //     'moz:firefoxOptions': {
    // //                 'args': ['--headless', '--safe-mode'],
    // //               },
    //             //   browserVersion: 'latest',

    // },

    

    // capabilities:{
    //     browserName: 'firefox',
    //     shardTestFiles: true,
    //     maxInstances: 5,
    //     'moz:firefoxOptions': {
    //                 'args': ['--headless', '--safe-mode'],
    //               },
    //               browserVersion: 'latest',

    // },

    
    // capabilities:{
    // browserName: 'firefox',
    // acceptInsecureCerts : true,
    // 'moz:firefoxOptions': {
    //     'args': ['-safe-mode', '-window-size=1920,1024', '-private'],
    //     'prefs': {
    //         'browser.download.folderList': 2,
    //         'browser.download.dir': downloadDir,
    //         'browser.download.useDownloadDir': true,
    //         'browser.download.manager.showWhenStarting': false,
    //         'browser.helperApps.neverAsk.saveToDisk': 'application/pdf, application/postscript, ' +
    //             'application/msword, application/wordperfect, application/rtf, ' +
    //             'application/vnd.ms-excel, application/vnd.ms-powerpoint, text/html, ' +
    //             'text/plain, application/x-troff, application/x-troff-man, application/x-dvi, ' +
    //             'application/mathematica, application/octet-stream'
    //     },
    //     'log': {'level': 'error'},
    // },

    // // multiCapabilities:[
    // //     { 
    // //         'browserName': 'chrome',
    // //     // 'chromeOptions': {
    // //     //     'args': [ '--window-size=1920x1080', '--headless'],
    // //     //     'prefs': {
    // //     //         'profile.managed_default_content_settings.notifications': 1
    // //     //     },
    // //     // //     'shardTestFiles': true,
    // //     // // 'maxInstances': 1,
    // //     // }
    // // }, 
    // //     { 
    // //         'browserName': 'firefox',
    // //     // 'moz:firefoxOptions': {
    // //     //     'args': ['--window-size=1920x1080', '--headless'],
    // //     //     'shardTestFiles': true,
    // //     // 'maxInstances': 1,
    // //     //   }
    // //     },

    // //     { 'browserName': 'Safari',
    // //     // 'moz:firefoxOptions': {
    // //     //     'args': ['--window-size=1920x1080', '--headless'],
    // //     //     'shardTestFiles': true,
    // //     // 'maxInstances': 1,
    // //     //   }
    // //     'browser_version': 'latest',
    // //  'os_version': 'Big Sur'
    // //     }
    // ],

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

    // let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

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
//TODO: new Buffer is deprecated
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

