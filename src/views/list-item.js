/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {MDCRipple, MDCRippleFoundation, util} from '@material/ripple'

const ripple = (element) => MDCRipple.attachTo(element)

export const ListItem = ({actions, item}) =>
  <a href='#' oncreate={element => ripple(element)} class='mdc-list-item'>
    <span class='mdc-list-item__text'>
      {item.name.first}
      <span class='mdc-list-item__text__secondary'>
        {item.name.last}
      </span>
    </span>
    <i class='material-icons mdc-list-item__end-detail' aria-hidden='true'>arrow_forward</i>
  </a>
