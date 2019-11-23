const webdriver = require('selenium-webdriver');
const fs = require ('fs');

const babyDriver = new webdriver.Builder();

async function initBrowser() {
    let driver = babyDriver.forBrowser('safari').build(); // Build a new web session
    let navigateToPage = await driver.get('http://www.tfwiki.net'); // Open a URL


}





initBrowser().then(function(){
    console.log("Finished!");
});
