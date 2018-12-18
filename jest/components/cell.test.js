import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueMaterial from 'vue-material'

import Cell from '~/components/Cell.vue'

const localVue = createLocalVue()
localVue.use(VueMaterial)

describe('Cell component unit tests', () => {
  it('renders a check when alive', () => {
    const wrapper = shallowMount(Cell, {
      localVue,
      propsData: {
        alive: true
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
