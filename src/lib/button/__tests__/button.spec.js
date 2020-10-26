/* eslint-disable no-undef */
import { shallowMount, mount } from '@vue/test-utils'
import Button from '../src/button.vue'
// import XIcon from '../../icon/src/icon.vue'
console.log(Button, 'button')
describe('button test', () => {
  it('create button set icon', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    console.log(wrapper)
    // console.log(shallowMount)
  })
})
