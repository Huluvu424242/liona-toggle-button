const AxeBuilder = require('axe-webdriverjs');
const {getDriver} = require('./support/helpers');

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;

var dockerCLI = require('docker-cli-js');
var DockerOptions = dockerCLI.Options;
var Docker = dockerCLI.Docker;


describe('honey-toggle-button', function () {

  let driver;

  // before(done => {
  //   // const docker = new Docker({socketPath: '/var/run/docker.sock'});
  //   const docker = new Docker();
  //   docker.command('run --rm -p 4444:5555  -e "ACTION=start" -i -v /var/run/docker.sock:/var/run/docker.sock funthomas424242/liona.docker')
  //     .then(function (data) {
  //       console.log('data = ', data);
  //     })
  //     .then(function (value) {
  //       driver = getDriver();
  //     })
  //     .then(function (retValue) {
  //       done();
  //     })
  //     .catch(done);
  // });

  before( done =>{
    driver = getDriver();
    done();
  });

  // after(done => {
  //   // const docker = new Docker({socketPath: '/var/run/docker.sock'});
  //   const docker = new Docker();
  //   docker.command('run -e "ACTION=stop" -i -v /var/run/docker.sock:/var/run/docker.sock funthomas424242/liona.docker')
  //     .then(function (data) {
  //       console.log('data = ', data);
  //       done();
  //     }).catch(done);
  // });

  beforeEach(done => {
    const docker = new Docker();
    docker.command('ps')
      .then(() => done())
      .catch(done);
  });

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

    // assert.equal( text, 'loading...');
  });


})



