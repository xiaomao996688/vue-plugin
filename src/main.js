import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import { XButton, XButtonGroup } from './lib/button/src/index'
import XIcon from './lib/icon/src/index'
import XInput from './lib/Input/src/index'
import XRow from './lib/row/src/index'
import XCol from './lib/col/src/index'

Vue.component(XButton.name, XButton)
Vue.component(XButtonGroup.name, XButtonGroup)
Vue.component(XIcon.name, XIcon)
Vue.component(XInput.name, XInput)
Vue.component(XRow.name, XRow)
Vue.component(XCol.name, XCol)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
