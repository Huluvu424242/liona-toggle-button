// browser,page,context und expect werden deklariert durch die jest-pupeteer umgebung

const timeout = 10000;

describe('honey-toggle-button', () => {

    beforeAll(async () => {
        await page.setExtraHTTPHeaders({"accept-language": "en-US,en;q=0.9,en-UK;q=0.8,en;q=0.7"});
        await page.goto('https://google.com');
    }, timeout);

    afterAll(async () => {

    });


    test('should display "google" text on page', async () => {
        await expect(page).toMatch('Google Inc');
    }, timeout);

    test('should load without error', async () => {
      let text = await page.evaluate(() => document.querySelector("input[name='btnI']").getAttribute('aria-label'));
      expect(text).toContain("I'm Feeling Lucky");
    })

    test('two plus two is four', () => {
      expect(2 + 2).toBe(4);
    });

}, timeout)