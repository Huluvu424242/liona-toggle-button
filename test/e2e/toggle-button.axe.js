const AxeBuilder = require('axe-webdriverjs');
const {getDriver} = require('./support/helpers');

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;


describe('honey-toggle-button', function () {

  let driver;



  before( done =>{
    driver = getDriver();
    done();
  });


  // beforeEach(done => {
  //   const docker = new Docker();
  //   docker.command('ps')
  //     .then(() => done())
  //     .catch(done);
  // });

  function printReport(results) {
    if (results.violations.length > 0) {
      results.violations.forEach(function (violation) {
        const id = violation.id;
        const description = violation.description;
        console.error(`ERR: \[${id}\] ${description}`);
      });
    }
    assert.lengthOf(results.violations, 0);
  }


  it('Prüfe initiale Darstellung', done => {
    driver
      .get('http://localhost:3000/simple-component.html')
      .then(() => AxeBuilder(driver)
      // .include('body')
      // .options({ checks: { 'valid-lang': { options: ['bobbert'] } } })
        .withRules(['html-lang', 'image-alt'])
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'section508', 'best-practice'])
        .analyze()
        .then((results) => {
          printReport(results);
          done();
        })
        .catch(done))
      .catch(done);
  });


})



