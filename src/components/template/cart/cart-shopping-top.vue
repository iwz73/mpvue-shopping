<template>
<div class="zan-panel">
  <div class="panel">
    <div class="cart-location" @click="SelectAddress">
      <span class="iconfont icon-location"></span>
      <span>送至：{{address}}</span>
      <span class="zan-icon zan-icon-arrow"></span>
    </div>
    <div class="cart-admin" @click="cartAdmin">
      {{cut?'取消':'管理'}}
    </div>
  </div>
</div>
</template>

<script>
import store from '@/store'
export default {
  name: 'CartTop',
  props: {
    address: {
      type: String,
      default: ''
    }
  },
  methods: {
    cartAdmin () {
      store.commit('cart/cartAdminCut')
      this.cut = store.state.cart.cartAdmin
    },
    SelectAddress () {
      wx.navigateTo({
        url: `/pages/address_select/main`
      })
    }
  },
  computed: {
    cut () {
      return store.state.cart.cartAdmin
    }
  }
}
</script>

<style lang="less">
@import url('~@/font/iconfont.css');
@import url('~@/styles/color');

.panel{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  span{
    margin: 0 3px;
  }
  .icon-location{
    font-size: 20px;
  }
}
// .cart-admin{
//   color: @minColor
// }
</style>
