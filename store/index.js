export const state = () => ({
  playing: false
})

export const mutations = {
  setPlaying(state, value) {
    state.playing = value
  }
}
