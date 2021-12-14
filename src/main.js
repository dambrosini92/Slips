import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Download from './components/Download'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/download',
  component: Download
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')