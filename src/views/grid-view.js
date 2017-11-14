/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {CardView} from './card-view'

export const GridView = ({state, actions}) =>
  <div class='mdc-layout-grid' oncreate={actions.attachDialog}>
    <div class='mdc-layout-grid__inner'>
      <div class='mdc-layout-grid__cell'>
        <CardView state={state} actions={actions} />
      </div>
      <div class='mdc-layout-grid__cell'>
        <CardView state={state} actions={actions} />
      </div>
      <div class='mdc-layout-grid__cell'>
        <CardView state={state} actions={actions} />
      </div>
    </div>
  </div>
