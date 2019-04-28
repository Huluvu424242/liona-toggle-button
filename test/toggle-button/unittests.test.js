/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../../src/components/toggle-button/ToggleButton.js';

/**
 * @typedef {import('../src/a11y-input.js').A11yInput} A11yInput
 */

describe('honey toggle-button input', () => {

  it('toggled is false by default', async () => {
    const el = await fixture(html `<honey-toggle-button options='{ "content": "test", "toggledContent": "blup"}'>leer</honey-toggle-button>`);
    expect(el.toggled).to.be.false;
  });

  it('button was initialized by toggled default with options to content label', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to toggle</button>');
  });


  it('button was initialized to content label forced by attribut setting toggled to false', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button .toggled=${false} options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to toggle</button>');
  });

  it('button was initialized to toggledContent label forced by attribut setting toggled to true', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button .toggled=${true} options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to untoggle</button>');
  });
});
