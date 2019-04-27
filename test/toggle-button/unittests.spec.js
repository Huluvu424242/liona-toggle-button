test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

////const showroom = require('showroom/puppeteer')({headless:true})
////const expect = require('expect-puppeteer');
////const assert = require('assert')
////const mocha = require('mocha')
//
//// browser,page,context und expect werden deklariert durch die jest-pupeteer umgebung
//
//const timeout = 10000;
//const optionText = "{'content': 'click here to toggle', 'toggledContent': 'click here to untoggle'}";
//const componentHTML = '<html><honey-toggle-button options="'+optionText+'" toggled="false"></honey-toggle-button></html>';
//
//describe('honey-toggle-button', () => {
//
//
//     beforeAll(async () => {
//        await page.setContent(componentHTML);
//        const content = await page.content();
//        console.log('### page-content'+content);
//     }, timeout);
//
//     afterAll(async () => {
//
//     });
//
//    test('should load without error', async () => {
//        console.log('### teste...');
//
//        const content = await page.content();
//        console.log('### page-content'+content);
//
//        const handle = await page.$('honey-toggle-button');
//        const text0 = await handle.getProperty('toggled');
//        expect( text0).toEqual('blah');
//        let text = await page.evaluate(() => document.querySelector("honey-toggle-button").getProperty('toggled'))
//        expect(text).toContain("I'm Feeling Lucky");
//    });
//
//
//
//
////    beforeEach( async ()=> {
////        try{
////            const component = await showroom.setTestSubject('honey-toggle-button');
////             assert.ok( component);
////
////            console.log('### testobject gesetzt');
////        }catch(e){
////            console.log('### exception: '+e);
////        }
////    })
//
//
////    test('Prüfe initiale Darstellung', async () => {
////        console.log('### teste...');
////
////        const buttonLoading =  await showroom.find('// button');
////        const text =  await showroom.getTextContent(buttonLoading);
////        assert.strictEqual( text, 'loading...' );
////        const attrToggled = await showroom.getAttribute('toggled');
////        assert.ifError(attrToggled);
////
////
////        const innerButton =  await showroom.utils.find('// button');
////        assert.ok(innerButton);
////        await innerButton.click();
////        const attrToggled1 = await showroom.utils.getAttribute('toggled');
//////        assert.ok(attrToggled1);
////
////    })
//
//}, timeout)