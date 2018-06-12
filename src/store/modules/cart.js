const state = {
  cartList: [],
  cartAdmin: false
}
const mutations = {
  init (state, obj) {
    state.cartList = obj
  },
  select (state, id) {
    state.cartList.some(e => {
      if (e.id === id) {
        e.select = !e.select
        return true
      }
    })
  },
  stepper (state, payload) {
    state.cartList[payload.index].sum = payload.v
  },
  cartAdminCut (state) {
    state.cartAdmin = !state.cartAdmin
  },
  deleteCartItem (state) {
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
