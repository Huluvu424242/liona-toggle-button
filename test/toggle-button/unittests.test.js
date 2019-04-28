/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../../src/components/toggle-button/ToggleButton.js';

/**
 * @typedef {import('../src/a11y-input.js').A11yInput} A11yInput
 */

describe('honey toggle-button input', () => {

it('is false by default', async () => {
    const el = await fixture(html `<honey-toggle-button options='{ "content": "test", "toggledContent": "blup"}'>leer</honey-toggle-button>`);
    expect(el.toggled).to.be.false;
  });


  it('has by default an empty string as label', async () => {
    const el = /** @type {ToggleButton} */ await fixture(html `<honey-toggle-button options='{"content": "click here to toggle", "toggledContent": "click here to untoggle"}'>leer</honey-toggle-button>`);
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">click here to toggle</button>');
  });
});