import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'

import Index from '~/pages/index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueMaterial)

describe('Index page unit tests', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
  })

  it('mounts', () => {
    const wrapper = shallowMount(Index, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
