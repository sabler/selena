
const webdriver = require('selenium-webdriver');
const safari = require('selenium-webdriver/safari')
// const chrome = require('selenium-webdriver/chrome');
// const firefox = require('selenium-webdriver/firefox');

var driver = null;

const initBrowser = new Promise(function(resolve, reject) {
    driver = new webdriver.Builder()
        .forBrowser('safari')
        .build();

    resolve('https://hillcity.gap.com');
    reject('Webdriver failed');

});




initBrowser.then(function(url) {
    console.log("Browser successfully built!")
    driver.get(url);
});
