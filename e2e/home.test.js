'use strict';

const assert = require('assert');
const {By, until} = require('selenium-webdriver');
const {getDriver} = require('./helpers');

describe('Home page', () => {
  let driver;

  before(() => {
    driver = getDriver();
  });

  it('has no accessibility issues', async () => {
    await driver.get(`http://localhost:3000`);

    // Wait until our content is visible, here we just wait for title
    await driver.wait(until.elementLocated(By.css('h1')));

    const title = await driver.findElement(By.css('h1')).getText();
    assert.equal(title, 'Welcome to React');
  });
});
