<template>
    <div>
      <CartTop
      :address="address"
      ></CartTop>
      <div class="zan-panel cart-list">
        <block v-for="(item, index) in shoppingLsit" :key="index">
          <cardCart
          :cart="item"
          :index="index"
          @handleSelect="handleSelect"
          ></cardCart>
        </block>
      </div>
      <block v-if="shoppingLsit.length">
        <CartAction
        @handleAll="handleAll"
        :sum="sum"
        :dues="dues"
        :checkedLength="checkedLength"
        :checked="checkedAll"
        ></CartAction>
      </block>
      <block v-else>
        mmmmmmmmmmmm=-=mmmmmmmmmmmmmmmmmmmm
      </block>
  </div>
</template>

<script>
import wx from 'wx'
import store from '@/store'
import cardCart from '@/components/template/cart/cart-shopping-cart'
import CartTop from '@/components/template/cart/cart-shopping-top'
import CartAction from '@/components/template/cart/cart-shopping-action'
import sideslipList from '@/components/mpvue/sideslip-list'
import { getShoppingList } from '@/api/cart'
import { addressList } from '@/api/address'

export default {
  data () {
    return {
      address: ''
    }
  },
  components: {
    cardCart,
    CartAction,
    sideslipList,
    CartTop
  },
  onShow () {
    // 地址显示逻辑
    const DefaultAddress = wx.getStorageSync('DefaultAddress')
    const SelectAddress = wx.getStorageSync('SelectAddress')
    if (SelectAddress) {
      const address = JSON.parse(SelectAddress)
      this.address = address.city + address.area
    } else if (DefaultAddress) {
      const address = JSON.parse(DefaultAddress)
      this.address = address.city + address.area
    } else {
      this._addressList()
    }
    // 初始化 cart admin
    store.state.cart.cartAdmin = false
  },
  methods: {
    handleAll (checked) {
      const list = this.shoppingLsit
      list.forEach(e => {
        e.select = checked
      })
      store.commit('cart/init', list)
    },
    _getShoppingList () {
      const postData = JSON.stringify({token: 'string'})
      getShoppingList(postData)
        .then(response => {
          const dataList = response.data
          dataList.forEach(e => {
            Object.assign(e, {select: false})
          })
          store.commit('cart/init', dataList)
        })
    },
    _addressList () {
      const postData = JSON.stringify({
        id: 1,
        token: 'string'
      })
      addressList(postData)
        .then(response => {
          const addressDefault = response.data[0]
          this.address = addressDefault.city + addressDefault.area
          wx.setStorageSync('DefaultAddress', JSON.stringify(addressDefault))
        })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this._getShoppingList()
  },
  computed: {
    shoppingLsit () {
      return store.state.cart.cartList
    },
    sum () {
      let sum = 0
      this.shoppingLsit.forEach(e => {
        if (e.select) {
          sum += e.price * e.sum
        }
      })
      return sum
    },
    checkedAll () {
      let judge = this.shoppingLsit.find(e => {
        return e.select === false
      })
      if (judge) {
        return false
      } else {
        return true
      }
    },
    checkedLength () {
      const size = this.shoppingLsit.filter(e => {
        return e.select
      })
      return size.length
    }
  }
}
</script>

<style lang="less" scoped>
</style>
