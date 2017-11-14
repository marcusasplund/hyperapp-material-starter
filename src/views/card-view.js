/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const CardView = ({state, actions}) =>
  <div class='mdc-card demo-card demo-card--with-avatar'>
    <section class='mdc-card__primary'>
      <div class='demo-card__avatar' />
      <h1 class='mdc-card__title'>Title</h1>
      <h2 class='mdc-card__subtitle'>Subhead</h2>
    </section>
    <section class='mdc-card__media demo-card__16-9-media' />
    <section class='mdc-card__supporting-text'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
    </section>
    <section class='mdc-card__actions'>
      <button class='mdc-button mdc-button--compact mdc-card__action' onclick={e => actions.showDialog(e)}>show dialog</button>
      <button class='mdc-button mdc-button--compact mdc-card__action' onclick={actions.getUsers}>get users</button>
    </section>
  </div>
