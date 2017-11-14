/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const HeaderView = ({actions}) =>
  <header class='mdc-toolbar mdc-toolbar--fixed'>
    <div class='mdc-toolbar__row'>
      <section class='mdc-toolbar__section mdc-toolbar__section--align-start'>
        <button onclick={actions.toggleDrawer} class='material-icons mdc-toolbar__menu-icon'>menu</button>
        <span class='mdc-toolbar__title'>starter</span>
      </section>
    </div>
  </header>
