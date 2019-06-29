import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import '@/common/stylus/index.styl'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/wait.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})