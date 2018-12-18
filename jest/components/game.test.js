import { shallowMount, createLocalVue } from '@vue/test-utils'

import Game from '~/components/Game.vue'
import Row from '~/components/Row.vue'

const localVue = createLocalVue()

describe('Game component unit tests', () => {
  let mockStore

  beforeEach(() => {
    mockStore = {
      state: {
        playing: true,
        settings: {
          rows: 10
        }
      },
      commit: jest.fn()
    }
  })

  it('mounts', () => {
    const wrapper = shallowMount(Game, {
      mocks: {
        $store: mockStore
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the number of rows set', () => {
    const wrapper = shallowMount(Game, {
      mocks: {
        $store: mockStore
      }
    })
    expect(wrapper.findAll(Row).length).toBe(10)
  })

  it('hides a message when not extinct', () => {
    const wrapper = shallowMount(Game, {
      mocks: {
        $store: mockStore
      }
    })
    wrapper.vm.extinct = false
    expect(wrapper.contains('[data-test="extinct"]')).toBe(false)
  })

  it('shows a message when extinct', () => {
    const wrapper = shallowMount(Game, {
      mocks: {
        $store: mockStore
      }
    })
    wrapper.vm.extinct = true
    expect(wrapper.contains('[data-test="extinct"]')).toBe(true)
  })

  it('stops playing when extinct', () => {
    const wrapper = shallowMount(Game, {
      mocks: {
        $store: mockStore
      }
    })
    wrapper.vm.extinct = true
    expect(mockStore.commit).toHaveBeenCalledWith('setPlaying', false)
  })
})
