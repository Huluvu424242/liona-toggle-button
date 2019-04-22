const showroom = require('showroom/puppeteer')({headless:true})
//const expect = require('expect-puppeteer');
const assert = require('assert')
//const mocha = require('mocha')

describe('honey-toggle-button', () => {

    beforeAll( async () => {
        try{
            await showroom.start();
            console.log('### showroom gestartet: ');
         }catch(e){
            console.log('### exception: '+e);
         }
    });

    afterAll( async () => {
        try{
            await showroom.stop();
            console.log('### showroom gestoppt: ');
         }catch(e){
            console.log('### exception: '+e);
         }
    })

    beforeEach( async ()=> {
        try{
            const component = await showroom.setTestSubject('honey-toggle-button');
             assert.ok( component);

            console.log('### testobject gesetzt');
        }catch(e){
            console.log('### exception: '+e);
        }
    })

    test('Prüfe initiale Darstellung', async () => {
        console.log('### teste...');

        const buttonLoading =  await showroom.find('// button');
        const text =  await showroom.getTextContent(buttonLoading);
        assert.strictEqual( text, 'loading...' );
        const attrToggled = await showroom.getAttribute('toggled');
        assert.ifError(attrToggled);


        const innerButton =  await showroom.utils.find('// button');
        assert.ok(innerButton);
        await innerButton.click();
        const attrToggled1 = await showroom.utils.getAttribute('toggled');
//        assert.ok(attrToggled1);

    })
})