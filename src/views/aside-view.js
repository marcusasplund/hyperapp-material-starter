/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const AsideView = ({state, actions}) =>
  <aside class='mdc-temporary-drawer mdc-toolbar-fixed-adjust' oncreate={actions.attachDrawer}>
    <nav class='mdc-temporary-drawer__drawer'>
      <header class='mdc-temporary-drawer__header'>
        <div class='mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary'>
          Header here
        </div>
      </header>
      <div class='mdc-temporary-drawer__content mdc-list-group'>
        <nav class='mdc-list' onclick={actions.toggleMenu}>
          <a class='mdc-list-item' href='#'>
            <i class='material-icons mdc-list-item__start-detail' aria-hidden='true'>map</i>Link
          </a>
          <a class='mdc-list-item' href='#'>
            <i class='material-icons mdc-list-item__start-detail' aria-hidden='true'>money</i>Link
          </a>
          <a class='mdc-list-item' href='#'>
            <i class='material-icons mdc-list-item__start-detail' aria-hidden='true'>info</i>Link
          </a>
        </nav>
      </div>
    </nav>
  </aside>
