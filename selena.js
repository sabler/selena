const webdriver = require('selenium-webdriver');
const fs = require ('fs');


async function initBrowser() {
    let driver = await new webdriver.Builder().forBrowser('safari').build();
    let navigateToPpage = await driver.get('http://www.tfwiki.net');
}


initBrowser();
