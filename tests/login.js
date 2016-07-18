var config = require('../config');
var webdriverio = config.webdriverio;
var assert = config.assert
var url = config.options.url + 'login.html';
var client = config.client;

var path = require('path');
var filename = path.basename(__filename).split('.')[0]
var screenshotRoot = 'screenshots/' + filename + '/';
var webdrivercssConfig = config.webdrivercssConfig(screenshotRoot);

describe(filename, function() {

    this.timeout(99999999);
    var client;

    before(function() {
        client = webdriverio.remote({
            desiredCapabilities: {
                browserName: 'chrome'
            }
        });
        require('webdrivercss').init(client, webdrivercssConfig);
        return client.init();
    });

    it(filename + ' page test', function() {
      return client
        .url(url)
        .webdrivercss(filename, [
          {
            name: 'signin'
            , elem: '.form-signin'
          }
        ], function(err, res) {
          assert.ifError(err);
          assert.isOk(res.signin[0].isWithinMisMatchTolerance, 'signin')
        })
        .setValue('#inputEmail', 'example@mail')
        .setValue('#inputPassword', '123456')
        .click('button[type="submit"]')
        .isVisible('.signout').then(function(isVisible) {
          assert.isOk(isVisible, 'signout visibility')
        })
        .webdrivercss(filename, [
          {
            name: 'signout'
            , elem: '.signout'
          }
        ], function(err, res) {
          assert.ifError(err);
          assert.isOk(res.signout[0].isWithinMisMatchTolerance, 'signout')
        })
        .click('button[type="button"]')
        .isVisible('.form-signin').then(function(isVisible) {
          assert.isOk(isVisible, 'sigin visibility');
        });
    });

    after(function() {
        return client.end();
    });

});