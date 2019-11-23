const webdriver = require('selenium-webdriver');
const fs = require ('fs');

const babyDriver = new webdriver.Builder();
var driver = null;

async function initBrowser() {
    driver = babyDriver.forBrowser('safari').build(); // Build a new web session
    let navigateToPage = await driver.get('http://www.tfwiki.net'); // Open a URL
}



async function runASearch(str) {
    let searchForm = await driver.findElement(webdriver.By.id('searchform'));
    let searchForBot = await driver.findElement(webdriver.By.id('searchInput')).sendKeys(str);
    let searchForGoButton = await driver.findElement(webdriver.By.id('searchGoButton'));

    searchForGoButton.sendKeys(webdriver.Key.ENTER);
    let searchForNull = await driver.wait(webdriver.until.elementLocated(webdriver.By.linkText('Cyberverse!!'),50000));
}

initBrowser().then(function(){
    runASearch('megatron');
});
