<template>
  <div class="action-cart">
    <div class="action-checked" @click="handleAll">
        <i class="zan-cell__icon zan-icon zan-icon-check" v-if="!checked"></i>
        <i class="zan-cell__icon zan-icon zan-icon-checked" v-else></i>
    </div>
    <div class="action-right">
      <div class="action-info">
        <h3 class="zan-font-14 zan-font-bold">
          总计
          <span class="zan-font-10 zan-c-gray-dark">(不含税)</span>
          ：<span>￥{{sum}}</span>
        </h3>
        <span class="zan-font-12 zan-c-gray-dark">商品税费￥{{dues}}</span>
      </div>
      <div class="settle  zan-font-bold">结算<span class="zan-font-12">({{checkedLength}})</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartAction',
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
.zan-cell__icon {
  font-size: 20px;
  padding: 0 15px;
}
.zan-icon-checked {
  color:#38f;
}
.zan-icon-check {
  color: @secondaryFontColor;
}
.action-cart {
  position: fixed;
  display: flex;
  bottom: 0;
  height:45px;
  width: 100vw;
  background: #ffffff;
  .action-checked {
    display: flex;
    align-items: center;
    justify-content: center;
    .checked-icon {
      margin: 0 9.7px;
    }
  }
  .action-right {
    flex: 1;
    display:flex;
    justify-content: flex-end;
    .action-info {
      margin-right: 5px;
      h3 {
        display: flex;
        align-items: center;
        span {
          color: @minColor;
        }
      }
    }
    .settle {
      width: 200rpx;
      text-align: center;
      line-height: 45px;
      background: @minColor;
      color: #ffffff;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
