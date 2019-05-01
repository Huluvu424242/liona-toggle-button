const AxeBuilder = require('axe-webdriverjs');
const WebDriver = require('selenium-webdriver');
const {getDriver} = require('./support/helpers');

describe('honey-toggle-button', function () {

  let driver;


  before(async function () {
    driver = getDriver();
  });

  after(async function () {
  })

  beforeEach(async function () {
  })

  it('Prüfe initiale Darstellung',   done => {
    driver
      .get('http://localhost:3000/simple-component.html')
      .then(()=> { return AxeBuilder(driver).analyze()
          .then((results)=> console.log(results))
          .catch(done);
      })
      .then(()=>done())
      .catch(done);

    // assert.equal( text, 'loading...');
  });


})



