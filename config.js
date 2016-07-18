var chai = require('chai');
var webdriverio = require('webdriverio');

var client = webdriverio.remote({
  desiredCapabilities: {
    browserName: 'chrome'
  }
});

module.exports = {
  options: {
    url: 'http://localhost:8080/'
  }
  , webdriverio : webdriverio
  , client: client
  , chai: chai
  , assert: chai.assert
  , webdrivercssConfig: function(screenshotRoot) {
    return {
      screenshotRoot: screenshotRoot + 'baseline'
      , failedComparisonsRoot: screenshotRoot + 'failed'
      , misMatchTolerance: 0.05
      , screenWidth: [1024]
    }
  }
}