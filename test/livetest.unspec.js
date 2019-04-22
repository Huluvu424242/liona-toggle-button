//// https://github.com/eavichay/showroom/wiki
//const ShowroomUtils = require('showroom/test-utils');
//
//// assuming puppeteer launch and page exists
//describe('My awesome Test Suite', async () => {
//   let showroom;
//   before(async () => {
//      // instantiate showroom helper linked to page instance
//      showroom = await ShowroomUtils(page);
//      // load showroom page and wait until all resources are loaded
//      await page.goto('http://localhost:3000', {"waitUntil" : "networkidle0"});
//   });
//
//   it('Awesome component test', async () => {
//      // assuming "awesome-component" is your custom element's tag name
//      const componentHandle = await showroom.setTestSubject('honey-toggle-button');
//      // use showroom to set properties, attributes, and take events from the component.
//      // ... the rest of the test
//   });
//});
