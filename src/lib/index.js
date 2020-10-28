import Vue from 'vue'
import '../style/index.scss'
import { XButton, XButtonGroup } from './button/src/index'
import XIcon from './icon/src/index'

const Components = {
  XButton,
  XButtonGroup,
  XIcon
}
Object.keys(Components).forEach(item => {
  Vue.component(item.name, item)
})
export default Components
