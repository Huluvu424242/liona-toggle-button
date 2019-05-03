'use strict';

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

const {startServer, stopServer} = require('./serverHelper');

let driverChromeDesktop;

before(async () => {
  startServer();
});

after(async () => {
  driverChromeDesktop && driverChromeDesktop.quit();
  stopServer();
});


exports.getDriver = () => {
  if (driverChromeDesktop) {
    return driverChromeDesktop;
  }

  driverChromeDesktop = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

  driverChromeDesktop
    .then((driver) => {
      return driver;
    }, (() => {
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

  if (!driverChromeDesktop) {
    process.exit(1);
  }

  // screensize
  driverChromeDesktop
    .manage()
    .window()
    .setSize(1280, 1024);


  return driverChromeDesktop;
};


