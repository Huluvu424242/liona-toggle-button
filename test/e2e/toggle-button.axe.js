const AxeBuilder = require('axe-webdriverjs');
const {getDriver} = require('./support/helpers');

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;


describe('liona-toggle-button', function () {

  let driver;


  before(done => {
    driver = getDriver();
    done();
  });


  function printReport(results, expectedErrors) {
    if (results.violations.length > 0) {
      results.violations.forEach(function (violation) {
        const id = violation.id;
        const description = violation.description;
        console.error(`ERR: \[${id}\] ${description}`);
      });
    }
    assert.lengthOf(results.violations, expectedErrors);
  }


  it('Prüfe initiale Darstellung', done => {
    driver
      .get('http://localhost:3000/index.html')
      .then(() => AxeBuilder(driver)
      // .include('body')
      // .options({ checks: { 'valid-lang': { enabled: true} } })
        .withRules(['valid-lang', 'html-lang', 'image-alt'])
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'section508', 'best-practice'])
        .analyze()
        .then((results) => {
          printReport(results, 0);
          done();
        })
        .catch(done))
      .catch(done);
  });

  it('Prüfe invalide initiale Darstellung', done => {
    driver
      .get('http://localhost:3000/index-invalid.html')
      .then(() => AxeBuilder(driver)
        .withRules(['valid-lang', 'html-lang', 'image-alt'])
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'section508', 'best-practice'])
        .analyze()
        .then((results) => {
          printReport(results, 4);
          done();
        })
        .catch(done))
      .catch(done);
  });


})



