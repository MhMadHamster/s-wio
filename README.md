This is a few tests to show how selenium, webdriverio and webdrivercss are working together and could help you with UI testing.

The instructions below are assuming that you already have **nodejs**, **npm** and **java** installed on your machine and your **PATH** variable configured properly as well.

1. install selenium standalone package: `$ npm install selenium-standalone -g`
2. install [GraphicsMagick](http://www.graphicsmagick.org/README.html) for webdrivercss image processing
3. install mocha for testing: `$ npm install mocha -g`
4. clone this repo
5. run `npm install`
6. start selenium: `selenium-standalone start`
![selenium](http://image.prntscr.com/image/93a9d1e2c5cb4ca2a9699ffaa3832294.png)
7. start your local server with pages from this repo [https://github.com/MhMadHamster/simple-site](https://github.com/MhMadHamster/simple-site)
8. change `config.js` if you're running local server on different address
9. finally run `$ mocha tests`

### How it looks

dirs structure:
in the root directory you will have `screenshots` folder and in it folder for each test/file with baseline and failed screenshots in them  
![structure](http://image.prntscr.com/image/e12bef48bdf94021a90715e1be8ce45d.png)

console:  
![console](http://image.prntscr.com/image/501495ec82c64ad4a9790e9c819e9755.png)

failed tests:  
![failed](http://image.prntscr.com/image/739e718696d645e2bdcea8225adc26a9.png)

image diff:  
![diff](http://image.prntscr.com/image/9f4fca136ed74d19a3bfa43c7f529220.png)


###Additional Info
All usefull settings for webdriverio and webdrivercss are in config.js  
those are pretty much simple JavaScript objects so you can change them as you like even in config file or particular test.  
This example is using mocha with chai, but you can use webdriverio built in test runner [wdio](http://webdriver.io/guide/testrunner/gettingstarted.html) or whatever you like.  
**Important!**  
If you want to use webdriverio with webdrivercss, you need webdriverio v. < 3. **it wont work with version 3 and higher**

###Links
[webdriverio api](http://webdriver.io/api.html)  
[webdrivercss](https://github.com/webdriverio/webdrivercss)  
[mocha](https://mochajs.org/)  
[selenium-standalone](https://github.com/vvo/selenium-standalone)