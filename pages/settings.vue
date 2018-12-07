<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <h1 class="md-title">Nuxt Life</h1>
      <div class="md-toolbar-row">
        <md-button
          to="/"
          class="md-icon-button">
          <md-icon>arrow-back</md-icon>
        </md-button>
        <h2>Settings</h2>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <md-field>
        <label>Rows</label>
        <md-input
          :value="rows"
          @change="setRows"
        />
      </md-field>
      <md-field>
        <label>Columns</label>
        <md-input
          :value="cols"
          @change="setCols"
        />
      </md-field>
      <md-field>
        <label>Initial population</label>
        <md-input
          :value="initPop"
          @change="setInitPop"
        />
      </md-field>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  name: 'Settings',
  data: function() {
    return {
      initPop: this.$store.state.settings.initPop
    }
  },
  computed: {
    rows: function() {
      return this.$store.state.settings.rows
    },
    cols: function() {
      return this.$store.state.settings.cols
    }
  },
  methods: {
    setRows(e) {
      this.$store.commit('settings/setRows', e.target.value)
    },
    setCols(e) {
      this.$store.commit('settings/setCols', e.target.value)
    },
    setInitPop(e) {
      this.$store.commit('settings/setInitPop', e.target.value)
    }
  }
}
</script>

<style scoped>
</style>
