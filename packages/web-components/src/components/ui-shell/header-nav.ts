/**
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from './header.scss?lit';

/**
 * Header.
 *
 * @element cds-header-nav
 * @csspart menu-body The menu body.
 * @csspart divider The divider.
 */
@customElement(`${prefix}-header-nav`)
class CDSHeaderNav extends LitElement {
  /**
   * The `aria-label` attribute for the menu bar UI.
   */
  @property({ attribute: 'menu-bar-label' })
  menuBarLabel!: string;

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'navigation');
    }
    super.connectedCallback();
  }

  render() {
    const { menuBarLabel } = this;
    return html`
      <div part="divider" class="${prefix}-ce--header__divider"></div>
      <ul
        part="menu-body"
        class="${prefix}--header__menu-bar"
        aria-label="${menuBarLabel}">
        <slot></slot>
      </ul>
    `;
  }

  static styles = styles;
}

export default CDSHeaderNav;
