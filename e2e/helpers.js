// in e2e/helpers.js
const selenium = require('selenium-standalone');
const serve = require('serve');
const path = require('path');


let seleniumInstance;
let server;
let driver;

before(async () => {
  await new Promise((resolve, reject) => {
    // Ensure selenium and default chromedriver are installed
    selenium.install(error => error ? reject(error) : resolve());
  });

  seleniumInstance = await new Promise((resolve, reject) => {
    selenium.start((error, instance) => error ? reject(error) : resolve(instance));
  });

  server = serve(path.join(__dirname, '..', 'build'), {
    port: 8080,
  });
});



exports.getDriver = () => {
  if (driver) {
    return driver;
  }

  driver = new Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

  driver
    .manage()
    .window()
    .setSize(1280, 1024);

  return driver;
};

after(async () => {
  seleniumInstance && seleniumInstance.kill();

  server && server.stop();

  driver && driver.quit();
});

