<template>
  <form
    v-if="game.length"
    class="game">
    <row
      v-for="(row, rowIdx) in game"
      :row="row"
      :row-idx="rowIdx"
      :key="rowIdx + 1"
    />
    <p>This is generation {{ generation }}</p>
    <p
      v-if="extinct"
      data-test="extinct" >
      Too bad - you've gone extinct!!
    </p>
  </form>
</template>

<script>
import Row from '~/components/Row.vue'

export default {
  name: 'Game',
  components: {
    Row
  },
  data: function() {
    return {
      game: [],
      numRows: this.$store.state.settings.rows,
      numCols: this.$store.state.settings.cols,
      percentInitPop: this.$store.state.settings.initPop,
      interval: 1000,
      intervalID: null,
      generation: 0,
      extinct: false
    }
  },
  computed: {
    playing: function() {
      return this.$store.state.playing
    }
  },
  watch: {
    playing: function(val) {
      if (val) {
        this.intervalID = setInterval(() => {
          this.game = this.generate()
          this.generation++
        }, this.interval)
      } else {
        clearInterval(this.intervalID)
      }
    },
    extinct: function(val) {
      if (val === true) {
        this.$store.commit('setPlaying', false)
      }
    }
  },
  created: function() {
    this.game = this.init()
  },
  methods: {
    /**
     * Initialises the game array.
     *
     * @returns {Array} A two-dimensional array of rows and columns with each
     * element set to true or false indicating whether the given cell is alive.
     */
    init: function() {
      let game = []
      let row = []
      for (let rowIdx = 0; rowIdx < this.numRows; rowIdx++) {
        row = []
        for (let colIdx = 0; colIdx < this.numCols; colIdx++) {
          row.push(100 * Math.random() < this.percentInitPop)
        }
        game.push(row)
      }
      return game
    },
    /**
     * Creates the next generation of cells according to Conways rules.
     *
     * Any live cell with fewer than two live neighbors dies.
     * Any live cell with two or three live neighbors lives on to the next generation.
     * Any live cell with more than three live neighbors dies.
     * Any dead cell with exactly three live neighbors becomes a live cell.
     */
    generate: function() {
      let extinct = true
      let nextGen = []
      let row = []
      let prevRowIdx
      let nextRowIdx
      let prevColIdx
      let nextColIdx
      let numLiveNeighbours
      for (let rowIdx = 0; rowIdx < this.numRows; rowIdx++) {
        row = []
        // Wrap the rows around.
        prevRowIdx = rowIdx === 0 ? this.numRows - 1 : rowIdx - 1
        nextRowIdx = rowIdx === this.numRows - 1 ? 0 : rowIdx + 1
        for (let colIdx = 0; colIdx < this.numCols; colIdx++) {
          // And wrap the columns too.
          prevColIdx = colIdx === 0 ? this.numCols - 1 : colIdx - 1
          nextColIdx = colIdx === this.numCols - 1 ? 0 : colIdx + 1
          numLiveNeighbours =
            (this.game[prevRowIdx][prevColIdx] ? 1 : 0) +
            (this.game[prevRowIdx][colIdx] ? 1 : 0) +
            (this.game[prevRowIdx][nextColIdx] ? 1 : 0) +
            (this.game[rowIdx][prevColIdx] ? 1 : 0) +
            (this.game[rowIdx][nextColIdx] ? 1 : 0) +
            (this.game[nextRowIdx][prevColIdx] ? 1 : 0) +
            (this.game[nextRowIdx][colIdx] ? 1 : 0) +
            (this.game[nextRowIdx][nextColIdx] ? 1 : 0)
          if (this.game[rowIdx][colIdx]) {
            if (numLiveNeighbours < 2) {
              row.push(false)
            } else if (numLiveNeighbours < 4) {
              row.push(true)
              extinct = false
            } else {
              row.push(false)
            }
          } else {
            if (numLiveNeighbours === 3) {
              row.push(true)
              extinct = false
            } else {
              row.push(false)
            }
          }
        }
        nextGen.push(row)
      }
      this.extinct = extinct
      return nextGen
    }
  }
}
</script>

<style scoped>
</style>
