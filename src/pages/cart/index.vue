<template>
    <div>
      <CartTop
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
import store from '@/store'
import cardCart from '@/components/template/cart/cart-shopping-cart'
import CartTop from '@/components/template/cart/cart-shopping-top'
import CartAction from '@/components/template/cart/cart-shopping-action'
import sideslipList from '@/components/mpvue/sideslip-list'
import { getShoppingList } from '@/api/cart'

export default {
  components: {
    cardCart,
    CartAction,
    sideslipList,
    CartTop
  },
  onShow () {
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
    GetShoppingList () {
      const postData = JSON.stringify({token: 'string'})
      getShoppingList(postData)
        .then(response => {
          const dataList = response.data
          dataList.forEach(e => {
            Object.assign(e, {select: false})
          })
          store.commit('cart/init', dataList)
        })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.GetShoppingList()
  },
  computed: {
    shoppingLsit () {
      return store.state.cart.cart
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
