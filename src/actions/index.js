/* eslint-disable camelcase */
import axios from 'axios/dist/axios'
import {MDCTemporaryDrawer} from '@material/drawer'
import {MDCDialog} from '@material/dialog'

let drawer

let dialog

const showDialog = (e) => {
  dialog.lastFocusedTarget = e.target
  dialog.show()
}

const toggleDrawer = () => {
  drawer.open = !drawer.open
}

const attachDrawer = () => {
  drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'))
}

const attachDialog = () => {
  dialog = new MDCDialog(document.querySelector('#my-mdc-dialog'))
  dialog.listen('MDCDialog:accept', () => console.log('accepted'))
  dialog.listen('MDCDialog:cancel', () => console.log('canceled'))
}

export const actions = {

  setItems: state => items => ({items: items.concat(items)}),

  getUsers: (state, actions) => {
    axios(`https://randomuser.me/api/?inc=name,&results=10`)
      .then(({data}) => {
        data.results && actions.setItems(data.results)
      })
  },

  toggleDrawer: state => {
    toggleDrawer()
  },

  attachDrawer: state => {
    attachDrawer()
  },

  attachDialog: state => {
    attachDialog()
  },

  showDialog: (state, actions) => (e) => {
    showDialog(e)
  }
}
