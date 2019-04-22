const showroom = require('showroom/puppeteer')({headless:true})
const assert = require('assert')

describe('honey-toggle-button', () => {

    beforeAll( async (done) => {
         await showroom.start().then(()=>done()).catch(done);
    });

    afterAll( async (done) => {
         await showroom.stop().then(()=>done()).catch(done);
    })

    beforeEach( async (done)=> {
         await showroom.utils.setTestSubject('honey-toggle-button').then(()=>done()).catch(done);
    })

    test('Prüfe initiale Darstellung', async (done) => {
        const innerButton =  await showroom.utils.find('// button');
        const text =  await showroom.utils.getTextContent(innerButton);
        assert.equal( text, 'loading...');
        done();
    })


})