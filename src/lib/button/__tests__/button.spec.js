/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import Button from '../src/button.vue'
// import XIcon from '../../icon/src/icon.vue'
// console.log(Button, 'button')
describe('button test', () => {
  it('create button set icon', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    expect(wrapper.exists()).toBe(true)
    // console.log(shallowMount)
  })
})
