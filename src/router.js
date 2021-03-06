import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import IconSprite from './views/IconSprite'
import CityDetail from './views/CityDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      // sitede kullanılan svg iconların listesi.
      path: '/icons',
      name: 'Icons',
      component: IconSprite
    },
    {
      // slug parametresi seo ve estetik/anlaşılır url düşünülerek eklendi.
      path: '/:slug--:id',
      name: 'CityDetail',
      component: CityDetail
    }
  ]
})
