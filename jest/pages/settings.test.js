import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'

import Settings from '~/pages/settings.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueMaterial)

describe('Settings page unit tests', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        settings: {}
      }
    })
  })

  it('mounts', () => {
    const wrapper = shallowMount(Settings, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
