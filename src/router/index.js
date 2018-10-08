import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/user/Login'
import Signup from '@/components/user/Signup'
import AboutUs from '@/components/aboutus/AboutUs'
import PlayNow from '@/components/playnow/PlayNow'
import MatchHistory from '@/components/history/MatchHistory'
import SearchGame from '@/components/search/SearchGameModes'
import MyAccount from '@/components/user/MyAccount'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/playnow',
      name: 'PlayNow',
      component: PlayNow
    },
    {
      path: '/history',
      name: 'Histroy',
      component: MatchHistory
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchGame
    },
    {
      path: '/myaccount',
      name: 'MyAccount',
      component: MyAccount
    }
  ]
})
