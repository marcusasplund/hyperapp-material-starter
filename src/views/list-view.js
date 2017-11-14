/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {ListItem} from './list-item'

export const ListView = ({state, actions}) =>
  <div class='mdc-card demo-card'>
    <nav class='mdc-list mdc-list--two-line bordered-list'>
      {
      state.items
        .map(item => <ListItem actions={actions} item={item} />)
      }
    </nav>
  </div>
