<template>
  <v-container class="papa-wrapper">
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="sideNav"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in menuItems"
          :key="i" :to="item.link"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon  class="hidden-lg-and-up" @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-btn icon @click.native.stop="miniVariant = !miniVariant" class="hidden-md-and-down">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" class="display-1"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-layout>
      <router-view></router-view>
    </v-layout>
        <v-footer :fixed="fixed" app>
      <div class="pa-3">&copy; Stats off 2017</div>
    </v-footer>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      clipped: false,
      sideNav: true,
      miniVariant: false,
      title: 'StatsOff-admin',
      menuItems: [
        {icon: 'local_play', title: 'Play Now', link: '/playnow'},
        {icon: 'history', title: 'History', link: '/history'},
        {icon: 'search', title: 'Search Game', link: '/search'},
        {icon: 'settings', title: 'Account', link: '/myaccount'},
        {icon: 'lock', title: 'Log out', link: '/'}
      ]
    }
  }
}
</script>


<style>
.papa-wrapper{
  max-width: 1980px;
}
</style>