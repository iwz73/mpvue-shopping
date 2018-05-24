<template>
<div>
    <div class="shopping-cart-card">
      <div class="cart-checked" @click="handleChecked">
          <icon class="weui-icon-checkbox_circle" type="circle" size="23" v-if="!checked"></icon>
          <icon class="weui-icon-checkbox_success" type="success" size="23" v-if="checked"></icon>
      </div>
      <div class="cart-body">
        <img :src="imgUrl" alt="">
        <p>3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒</p>
      </div>
      <div class="cart-option">
        <span>￥{{price}}</span>
        <em>已降88</em>
        <div class="stepper">
          <div @click="handleMinus" class="stepper_minus"></div>
          <input class="stepper_input" v-model="quantity" type="number" @change="handleCount">
          <div @click="handlePlus" class="stepper_plus"></div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631391.jpeg'
    }
  },
  props: ['quantity', 'price', 'checked', 'index'],
  methods: {
    handleChecked () {
      this.checked = !this.checked
      this.$emit('handleChecked', this.checked, this.index)
    },
    handlePlus () {
      const quantity = ++this.quantity
      this.$emit('handlePlus', quantity, this.index)
    },
    handleMinus () {
      if (this.quantity === 0) {
        return
      }
      const quantity = --this.quantity
      this.$emit('handleMinus', quantity, this.index)
    },
    handleCount () {
      this.$emit('handleCount', this.quantity, this.index)
    }
  }
}
</script>

<style lang="less">
.shopping-cart-card{
  font-size: 12px;
  padding: 5px;
  margin: 10px 0;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  height:100px;
  .cart-checked{
    width: 10vw;
  }
  .cart-body{
    img{
      height: 40px;
      width: 60px;
      margin: 10px;
    }
  }
  .cart-option{
    flex-direction: column;
    justify-content: center;
  }
  .cart-checked,.cart-body,.cart-option{
    display: flex;
    align-items: center;
  }
}
//步进器
 .stepper {
      display: flex;
      flex-direction: row;
      font-size: 0;
      min-width: 80px;
    .stepper_minus {
      border-radius: 2px 0 0 2px;
    }

    .stepper_input {
      width: 33px;
      height: 21px;
      min-height: 20px;
      padding: 1px;
      border: 1px solid #eee;
      border-width: 1px 0;
      border-radius: 0;
      box-sizing: content-box;
      color: #666;
      font-size: 14px;
      vertical-align: middle;
      text-align: center;
      -webkit-appearance: none;
    }

    .stepper_plus {
      border-radius: 0 2px 2px 0;

    }

    .stepper_plus::after {
      content: '';
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #6c6c6c;
      width: 1px;
      height: 9px;
    }

    .stepper_minus,
    .stepper_plus {
      width: 30px;
      height: 25px;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #eee;
      position: relative;
      padding: 5px;
      vertical-align: middle;
    }

    .stepper_minus::before,
    .stepper_plus::before {
      content: '';
      position: absolute;
      margin: auto;
      width: 9px;
      height: 1px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #6c6c6c;
    }
 }
</style>