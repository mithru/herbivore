import Vue from 'vue'
import store from './store'
import App from './App'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://localhost:7777')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App v-bind:packets="packets"/>',
  store,
  components: { App },
  data () {
    return {
      packets: []
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected!')
    },
    data: function (packet) {
      console.log(packet)
      this.packets.push(packet)

    }
  }
})
