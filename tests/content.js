var config = require('../config');
var webdriverio = config.webdriverio;
var assert = config.assert;
var url = config.options.url + 'content.html';

var path = require('path');
var filename = path.basename(__filename).split('.')[0]
var screenshotRoot = 'screenshots/' + filename + '/';
var webdrivercssConfig = config.webdrivercssConfig(screenshotRoot);

describe(filename, function() {

    this.timeout(99999999);
    var client

    before(function() {
        client = webdriverio.remote({
            desiredCapabilities: {
                browserName: 'chrome'
            }
        });
        require('webdrivercss').init(client, webdrivercssConfig);
        return client.init();
    });

    it('should open the ' + filename + ' page', function() {
        return client
            .url(url)
            .webdrivercss(filename, [
                {
                    name: 'header'
                    , elem: '#header'
                }
                , {
                    name: 'content'
                    , elem: '#content'
                }
            ], function(err, res) {
                assert.ifError(err);

                describe(filename + ' components', function() {
                    it('header test', function() {
                        assert.isOk(res.header[0].isWithinMisMatchTolerance, 'header');
                    });

                    it('content test', function() {
                        assert.isOk(res.content[0].isWithinMisMatchTolerance, 'content');
                    });
                });
            });
    });

    after(function() {
        return client.end();
    });

});