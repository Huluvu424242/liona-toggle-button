const AxeBuilder = require('axe-webdriverjs');
const WebDriver = require('selenium-webdriver');
const {getDriver} = require('./helpers');

describe('honey-toggle-button', function() {

  let driver;


  before( async function( ) {
    driver = getDriver();
  });

  after( async function(  ) {
  })

  beforeEach( async function(  ) {
  })

  it('Prüfe initiale Darstellung', async function( ) {
    driver
      .get('https://dequeuniversity.com/demo/mars/')
      .then(function () {
        AxeBuilder(driver).analyze(function (err, results) {
          if (err) {
            // Handle error somehow
          }
          console.log(results);
        });
      });

    // assert.equal( text, 'loading...');
  })


})



