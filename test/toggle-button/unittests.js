const showroom = require('showroom/puppeteer')({headless:true})
const assert = require('assert')

describe('honey-toggle-button', function() {

    before( async function( ) {
         await showroom.start();
    });

    after( async function(  ) {
         await showroom.stop();
    })

    beforeEach( async function(  ) {
         await showroom.utils.setTestSubject('honey-toggle-button')
    })

    it('Prüfe initiale Darstellung', async function( ) {
        const innerButton =  await showroom.utils.find('// button');
        const text =  await showroom.utils.getTextContent(innerButton);
        assert.equal( text, 'loading...');
    })


})