<template>
    <div>
      <div class="cart-list">
        <block v-for="(item, index) in cardCartList" :key="index">
          <cardCart
          @handleChecked="handleChecked"
          @handlePlus="handlePlus"
          @handleMinus="handleMinus"
          @handleCount="handleCount"
          :index="index"
          :quantity="item.quantity"
          :price="item.price"
          :checked="item.checked"
          ></cardCart>
        </block>
      </div>
      <action
      @handleAll="handleAll"
      :sum="sum"
      :dues="dues"
      :checkedLength="checkedLength"
      :checked="checkedAll"
      ></action>
  </div>
</template>

<script>
import cardCart from '@/components/wechat/card-shopping-cart'
import action from '@/components/mpvue/action-cart'
export default {
  data () {
    return {
      cardCartList: [
        {
          quantity: 1,
          price: 999,
          checked: false
        }, {
          quantity: 2,
          price: 999,
          checked: false
        }, {
          quantity: 3,
          price: 999,
          checked: false
        }, {
          quantity: 4,
          price: 999,
          checked: false
        }
      ]
    }
  },

  components: {
    cardCart,
    action
  },
  methods: {
    handleChecked (checked, index) {
      this.cardCartList[index].checked = checked
    },
    handleCount (quantity, index) {
      this.count(quantity, index)
    },
    handlePlus (quantity, index) {
      this.count(quantity, index)
    },
    handleMinus (quantity, index) {
      this.count(quantity, index)
    },
    handleAll (checked) {
      const list = this.cardCartList
      list.forEach(e => {
        e.checked = checked
      })
      this.cardCartList = list
    },
    count (n, i) {
      this.cardCartList[i].quantity = n
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
  },
  computed: {
    sum () {
      let sum = 0
      this.cardCartList.forEach(e => {
        if (e.checked) {
          sum += e.price * e.quantity
        }
      })
      return sum
    },
    checkedAll () {
      let judge = this.cardCartList.find(e => {
        return e.checked === false
      })
      if (judge) {
        return false
      } else {
        return true
      }
    },
    checkedLength () {
      const size = this.cardCartList.filter(e => {
        return e.checked
      })
      return size.length
    }
  }
}
</script>

<style lang="less" scoped>
</style>
