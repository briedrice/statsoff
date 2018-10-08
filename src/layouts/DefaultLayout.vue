<template>
  <v-container>
    <v-navigation-drawer
      v-model="sideNav"
      disable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in menuItems"
          :key="i"
          router
          :to="item.link"
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
    <v-toolbar app>
      <v-toolbar-side-icon  class="hidden-md-and-up" @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      
      <v-toolbar-title class="display-1"><router-link to="/" tag="span">{{title}}</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" >
        <v-btn flat v-for="(item, i) in menuItems"
          :key="i"
          router
          :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
        <v-footer app>
      <div class="pa-3">&copy; Stats off 2017</div>
    </v-footer>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      sideNav: false,
      title: 'StatsOff-basic',
      menuItems: [
        {icon: 'account_circle', title: 'About Us', link: '/aboutus'},
        {icon: 'lock_open', title: 'Log In', link: '/login'},
        {icon: 'border_color', title: 'Sign Up', link: '/signup'}
      ]
    }
  }
}
</script>

