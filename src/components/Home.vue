<template>
<v-content fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <v-btn color="primary" @click="setLayout('default-layout')">Default Layout</v-btn>
      <v-btn color="secondary" @click="setLayout('sidebar-layout')">Sidebar Layout</v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-content>
</template>

<script>
export default {
  methods: {
    setLayout (layout) {
      this.$store.commit('SET_LAYOUT', layout)
    }
  }
}
</script>