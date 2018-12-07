<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <h1 class="md-title">Nuxt Life</h1>
      <div class="md-toolbar-row">
        <play-button />
        <md-button
          to="/settings"
          class="md-raised">
          Settings
        </md-button>

      </div>
    </md-app-toolbar>
    <md-app-content>
      <p>Here is the game of life.</p>
      <p v-if="playing">I am now playing.</p>
      <p v-else>I am not playing.</p>
      <game />
    </md-app-content>
  </md-app>
</template>

<script>
import PlayButton from '~/components/play-button.vue'
import Game from '~/components/Game.vue'

export default {
  components: {
    PlayButton,
    Game
  },
  data: function() {
    return {
      playing: this.$store.state.playing
    }
  }
}
</script>

<style scoped lang="sass">
</style>
