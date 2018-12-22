import Vue from 'vue'
import App from './App.vue'
import Container from './Container.vue'

Vue.component('app-container', Container);
new Vue({
  el: '#app',
  render: h => h(App)
})
