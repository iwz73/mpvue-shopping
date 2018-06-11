import { showToast } from '@/utils'
const state = {
  cart: [],
  cartAdmin: false
}
const mutations = {
  init (state, obj) {
    state.cart = obj
  },
  select (state, id) {
    state.cart.some(e => {
      if (e.id === id) {
        e.select = !e.select
        return true
      }
    })
  },
  stepper (state, payload) {
    state.cart[payload.index].sum = payload.v
  },
  cartAdminCut (state) {
    state.cartAdmin = !state.cartAdmin
  },
  deleteCartItem (state) {
    const ls = state.cart.length
    const cart = state.cart.filter(element => {
      return !element.select
    })
    console.log(ls, cart.legth)
    if (ls === cart.length) {
      showToast('请选择要删除的商品')
    } else {
      wx.showModal({
        title: '提示',
        content: '是否删除商品',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            state.cart = cart
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
