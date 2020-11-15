/* eslint-disable no-undef */
import { shallowMount, mount } from '@vue/test-utils'
import XInput from '../src/index'
import XIcon from '../../../lib/icon/src/index'
describe('input 存在', () => {
  it('存在', () => {
    const wrapper = shallowMount(XInput)
    expect(wrapper.exists()).toBe(true)
  })

  it('接受value', () => {
    const wrapper = shallowMount(XInput, {
      propsData: {
        value: '1233'
      }
    })
    expect(wrapper.props().value).toBe('1233')
  })
  it('接受 disabled', () => {
    const wrapper = shallowMount(XInput, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.props().disabled).toBe(true)
  })
  it('接受 readonly', () => {
    const wrapper = shallowMount(XInput, {
      propsData: {
        readonly: true
      }
    })
    expect(wrapper.props().readonly).toBe(true)
  })
  it('接受 error', () => {
    const wrapper = shallowMount(XInput, {
      propsData: {
        error: '你是错误的'
      }
    })
    expect(wrapper.findComponent(XIcon).props().name).toBe('error')
    expect(wrapper.props().error).toBe('你是错误的')
  })
})

describe('测试事件', () => {
  it('input change', () => {
    const wrapper = shallowMount(XInput, {
      propsData: {
        value: 'eeeeee'
      }
    })
    const input = wrapper.find('input')
    // await wrapper.trigger('change', {
    // })
    input.element.value = 100
    input.trigger('change')
  })
  it('input', () => {
    const wrapper = shallowMount(XInput, {
      propsData: {
        value: 'eeeeee'
      }
    })
    const input = wrapper.find('input')
    // await wrapper.trigger('change', {
    // })
    input.element.value = 100
    input.trigger('input')
  })
  it('focus', () => {
    const wrapper = shallowMount(XInput, {
      propsData: {
        value: 'eeeeee'
      }
    })
    const input = wrapper.find('input')
    // await wrapper.trigger('change', {
    // })
    input.element.value = 100
    input.trigger('focus')
  })
  it('blur', () => {
    const wrapper = shallowMount(XInput, {
      propsData: {
        value: 'eeeeee'
      }
    })
    const input = wrapper.find('input')
    // await wrapper.trigger('change', {
    // })
    input.element.value = 100
    input.trigger('blur')
  })
})
