import { shallowMount } from '@vue/test-utils'

import Play from '~/pages/play.vue'

describe('Play page unit tests', () => {
  it('mounts', () => {
    const wrapper = shallowMount(Play)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
