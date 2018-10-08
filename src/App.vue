<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import Default from './layouts/DefaultLayout'
import SideBarLayout from './layouts/SideBarLayout'

export default {
  data () {
    return {
      fixed: false,
      title: 'Stats Off'
    }
  },
  name: 'App',
  computed: {
    layout () {
      return this.$store.getters.layout
    }
  },
  components: {
    'sidebar-layout': SideBarLayout,
    'default-layout': Default
    // define as many layouts you want for the application
  }
}
</script>

