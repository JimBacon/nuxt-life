<template>
  <div class="row">
    <cell
      v-for="(cell, cellIdx) in row"
      :key="rowIdx * numCols + cellIdx + 1"
      :alive="cell"
      @click="setCell($event, value, key)"
    />
  </div>
</template>

<script>
import Cell from '~/components/Cell.vue'

export default {
  name: 'Row',
  components: {
    Cell
  },
  props: {
    row: {
      type: Array,
      default: function() {
        return Array(this.numCols).fill(false)
      }
    },
    rowIdx: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      numCols: this.$store.state.settings.cols
    }
  }
}
</script>

<style scoped>
</style>
