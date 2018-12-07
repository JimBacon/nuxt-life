<template>
  <div class="cell">
    <md-checkbox
      v-model="myAlive"
    />
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    alive: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      myAlive: this.alive
    }
  },
  watch: {
    // It seems that md-checkbox must model a data value and
    // cannot bind to a computed value
    alive: function() {
      this.myAlive = this.alive
    }
  }
}
</script>

<style scoped lang="scss">
.cell {
  display: inline-block;
}
</style>
