/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {HeaderView} from './header-view'
import {AsideView} from './aside-view'
import {GridView} from './grid-view'
import {DialogView} from './dialog-view'
import {ListView} from './list-view'

export const view = (state, actions) =>
  <div class='body'>
    <AsideView state={state} actions={actions} />
    <div class='content'>
      <HeaderView state={state} actions={actions} />
      <main>
        <GridView state={state} actions={actions} />
        <ListView state={state} actions={actions} />
      </main>
    </div>
    <DialogView state={state} actions={actions} />
  </div>
