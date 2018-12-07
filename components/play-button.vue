<template>
  <md-button
    class="md-raised md-accent"
    @click="clickPlay">
    <md-icon>{{ icon }}</md-icon>
    {{ text }}
  </md-button>
</template>

<script>
export default {
  name: 'PlayButton',
  data: function() {
    return {
      text: 'Play',
      icon: 'play_circle_filled'
    }
  },
  computed: {
    playing: function() {
      return this.$store.state.playing
    }
  },
  methods: {
    clickPlay: function(event) {
      if (this.playing) {
        this.$store.commit('setPlaying', false)
        this.text = 'Play'
        this.icon = 'play_circle_filled'
      } else {
        this.$store.commit('setPlaying', true)
        this.text = 'Stop'
        this.icon = 'pause_circle_filled'
      }
    }
  }
}
</script>

<style scoped>
</style>
