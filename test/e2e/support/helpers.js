// const path = require('path');
// require('chromedriver').path('/home/huluvu/git/honey-toggle-button/node_modules/selenium-standalone/.selenium/chromedriver/2.43-x64-chromedriver.zip');
// const selenium = require('selenium-standalone');
// const {webdriver} = require("selenium-webdriver");

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

const http = require('http');
const express = require('express');
const path = require('path');


// let seleniumInstance;
let server;
let driver;

before(async () => {

  // await new Promise((resolve, reject) => {
  //   // Ensure selenium and default chromedriver are installed
  //   selenium.install(error => error ? reject(error) : resolve());
  // });
  //
  // seleniumInstance = await new Promise((resolve, reject) => {
  //   selenium.start((error, instance) => error ? reject(error) : resolve(instance));
  // });

  // const seleniumConfig = {
  //   // check for more recent versions of selenium here:
  //   // https://selenium-release.storage.googleapis.com/index.html
  //   version: '3.141.5',
  //   baseURL: 'https://selenium-release.storage.googleapis.com',
  //   drivers: {
  //     chrome: {
  //       version: '2.43',
  //       arch: process.arch,
  //       baseURL: 'https://chromedriver.storage.googleapis.com'
  //     },
  //     ie: {
  //       version: '3.14.0',
  //       arch: process.arch,
  //       baseURL: 'https://selenium-release.storage.googleapis.com'
  //     },
  //     firefox: {
  //       version: '0.23.0',
  //       arch: process.arch,
  //       baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
  //     },
  //     edge: {
  //       version: '17134'
  //     }
  //   },
  //   proxy: 'http://localproxy.com', // see https://github.com/request/request#proxies
  //   requestOpts: { // see https://github.com/request/request#requestoptions-callback
  //     timeout: 10000
  //   },
  //   logger: function (message) {
  //
  //   },
  //   progressCb: function (totalLength, progressLength, chunkLength) {
  //
  //   }
  // };
  //
  // selenium.install(seleniumConfig, error => error ? reject(error) : resolve());
  //
  // seleniumInstance = await new Promise((resolve, reject) => {
  //   selenium.start((error, instance) => error ? reject(error) : resolve(instance));
  // });

  const webroot = path.join( __dirname, '../sites/' )

  const app = express();
  app.use('/', express.static(webroot));

  server = http.createServer(app);

  server.listen(3000, () => {
    console.log('Running at http://localhost:3000');
  });

  // server = serve(path.join(__dirname, '..', 'build'), {
  //   port: 8080,
  // });
});


exports.getDriver =  () => {
  if (driver) {
    return driver;
  }

  driver =  new webdriver.Builder()
    .forBrowser('chrome')
    // .setChromeOptions(new chrome.Options().setChromeBinaryPath("/home/huluvu/git/honey-toggle-button/node_modules/chromedriver/lib/chromedriver/chromedriver"))
    .usingServer('http://localhost:4444/wd/hub')
    .build();

  driver
    .then((driver)=>{return driver;},(()=>{
      console.log('##################################################');
      console.log('F A I L E D:');
      console.log('Vor npm run e2e bitte manuell den senium container starten mit:');
      console.log('');
      console.log('sudo dockerd');
      console.log('docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome');
      console.log('');
      console.log('##################################################');
      process.exit(1)
    }));

  if( !driver){
    process.exit(1);
  }



  driver
    .manage()
    .window()
    .setSize(1280, 1024);




  return driver;
};

after(async () => {

  driver && driver.quit();

  server && server.close( ()=>{console.log("server stopping")});

  // seleniumInstance && seleniumInstance.kill();
});

