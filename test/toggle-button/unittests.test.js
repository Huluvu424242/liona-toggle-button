/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../../src/components/toggle-button/ToggleButton.js';

/**
 * @typedef {import('../src/a11y-input.js').A11yInput} A11yInput
 */

describe('honey-toggle-button', () => {

  it('toggeld ist initial auf false gesetzt', async () => {
    const el = await fixture(html `<honey-toggle-button options='{ "content": "test", "toggledContent": "blup"}'>leer</honey-toggle-button>`);
    expect(el.toggled).to.be.false;
  });

  it('Der Button wird initial mit dem content label beschriftet', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to toggle</button>');
  });


  it('Der Button wird initial mit dem content label beschriftet, auch wenn toggled explizit mit false angegeben wurde', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button toggled="false" options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to toggle</button>');
  });

  it('Der Button wird initial mit dem content label beschriftet, auch wenn toggled explizit auf false gesetzt wurde', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button .toggled=${false} options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to toggle</button>');
  });

  it('Der Button wird initial mit dem toggledContent label beschriftet wenn toggled explizit mit true angegeben wurde.', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button toggled="true" options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to untoggle</button>');
  });

  it('Der Button wird initial mit dem toggledContent label beschriftet wenn toggled explizit auf true gesetzt wurde.', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button .toggled=${true} options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to untoggle</button>');
  });

  it('Der Button ändert die Beschriftung beim Klick', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to toggle</button>');
    el.button.click();
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to untoggle</button>');
    el.button.click();
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to toggle</button>');

  });
});
