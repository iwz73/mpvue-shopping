// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import details from './modules/details'
import adderss from './modules/order_addres'
import cart from './modules/cart'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    details,
    adderss,
    cart
  },

  state: {

  },

  mutations: {

  },

  actions: {

  },

  getters: {

  }

})

export default store
