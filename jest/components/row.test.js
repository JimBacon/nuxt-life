import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import Row from '~/components/Row.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Row component unit tests', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        settings: {}
      }
    })
  })

  it('mounts', () => {
    const wrapper = shallowMount(Row, { store, localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
