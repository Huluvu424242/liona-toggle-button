/* eslint-disable no-unused-expressions */
import { html, fixture, expect } from '@open-wc/testing';

import '../src/components/toggle-button/ToggleButton.js';

/**
 * @typedef {import('../src/a11y-input.js').A11yInput} A11yInput
 */

describe('honey toggle-button input', () => {
  it('has by default an empty string as label', async () => {
    const el = /** @type {A11yInput} */ (await fixture('<honey-toggle-button options="{\"content\": \"click here to toggle\", \"toggledContent\": \"click here to untoggle\"}">leer</honey-toggle-button>'));
    expect(el).shadowDom.to.equal('<button id="toggleButton" toggled="false">loading...</button>');
  });
});