const showroom = require('showroom/puppeteer')({headless:true})
const assert = require('assert')
//const mocha = require('mocha')

describe('honey-toggle-button', () => {

    beforeAll( async () => {
        try{
            await showroom.start();
         }catch(e){

         }
    });

    afterAll( async () => {
         await showroom.stop();
    })

    beforeEach( async ()=> {
         await showroom.utils.setTestSubject('honey-toggle-button');
    })

    test('Prüfe initiale Darstellung', async () => {
        const innerButton =  await showroom.utils.find('// button');
        const text =  await showroom.utils.getTextContent(innerButton);
        assert.equal( text, 'loading...');
    })


})