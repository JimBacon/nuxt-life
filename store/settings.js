export const state = () => ({
  rows: 10,
  cols: 10,
  initPop: 50
})

export const mutations = {
  setRows(state, value) {
    state.rows = value
  },
  setCols(state, value) {
    state.cols = value
  },
  setInitPop(state, value) {
    state.initPop = value
  }
}
