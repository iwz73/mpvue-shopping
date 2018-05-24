<template>
  <div class="action-cart">
    <div class="action-checked" @click="handleAll">
        <icon class="weui-icon-checkbox_circle" type="circle" size="23" v-if="!checked"></icon>
        <icon class="weui-icon-checkbox_success" type="success" size="23" v-if="checked"></icon>
    </div>
    <div class="action-right">
      <div class="action-info">
      <h3>总计（不含税）<span>￥{{sum}}</span></h3>
      <span>商品税费￥{{dues}}</span>
      </div>
      <div class="settle">结算（{{checkedLength}}）</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sum', 'dues', 'checkedLength', 'checked'],
  methods: {
    handleAll () {
      this.checked = !this.checked
      console.log(this.checked)
      this.$emit('handleAll', this.checked)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");

.action-cart{
  position: fixed;
  display: flex;
  bottom: 0;
  height:45px;
  width: 100vw;
  background: #ffffff;
  .action-checked{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .action-right{
    flex: 1;
    display:flex;
    justify-content: flex-end;
    .action-info{
      margin-right: 5px;
      h3{
        span{
          color: @minColor;
        }
      }
    }
    .settle{
      width: 200rpx;
      text-align: center;
      line-height: 45px;
      background: @minColor;
      color: #ffffff;
      font-size: 16px;
    }
  }
}
</style>
