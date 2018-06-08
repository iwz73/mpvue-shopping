<template>
  <div class="zan-cell shopping-cart">
    <div v-if="select" class="zan-cell__icon zan-icon zan-icon-checked"></div>
    <div v-else class="zan-cell__icon zan-icon zan-icon-check"></div>
    <div class="zan-cell__bd-img">
        <img src="http://p5za7ep72.bkt.clouddn.com/raw_1526631391.jpeg" mode="widthFix" alt="">
    </div>
    <div class="zan-cell__bd">
      <span class="zan-font-12 zan-font-bold">
        <i class="zan-tag zan-tag--danger zan-tag--plain">特价</i>
        3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒
      </span>
    </div>
    <div class="zan-cell__ft">
      <span class="zan-font-14 zan-font-bold zan-c-gray-darker">￥999</span>
      <span class="zan-font-10 zan-c-red">已降16</span>
      <stepper></stepper>
      <span class="zan-font-12 zan-c-gray-darker">邮费:包邮<i class="zan-font-10 zan-icon zan-icon-arrow cart-icon"></i></span>
    </div>
  </div>
</template>

<script>
import stepper from '@/components/mpvue/stpper'
export default {
  props: {
    select: {
      type: Boolean,
      default: true
    }
  },
  components: {
    stepper
  },
  methods: {
    handleZanStepperChange (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.shopping-cart {
  .zan-cell__icon{
    font-size: 20px;
    margin-right: 10px;
  }

  .zan-icon-checked{
      color:#38f;
  } 
  .zan-icon-check{
    color: @secondaryFontColor;
  }
     
  .zan-cell__bd{
    padding: 0 10px;
  }
}
.zan-cell__bd-img{
  height: 60px;
  width: 60px;
  overflow: hidden;
  img{  
    width: 100%;
  }
}
.zan-cell__ft{
  display:flex;
  flex-direction: column;
  align-items: center;
  .cart-icon{
    transform:rotate(90deg)
  }
}
</style>
