<template>
  <div class="zan-panel">
    <div class="zan-panel-title zan-c-black zan-font-14">基本工具</div>
    <div class="zan-cell zan-cell--access">
      <div class="zan-cell__icon zan-icon zan-icon-debit-pay zan-font-18 zan-c-gray" ></div>
      <div class="zan-cell__bd">钱包</div>
      <div class="zan-cell__ft">1000.00元</div>
    </div>
    <div class="zan-cell zan-cell--access">
      <div class="zan-cell__icon zan-icon zan-icon-debit-pay zan-font-18 zan-c-gray"></div>
      <div class="zan-cell__bd">金币</div>
      <div class="zan-cell__ft">1000.00</div>
    </div>
    <div class="zan-cell zan-cell--access">
      <div class="zan-cell__icon zan-icon zan-icon-debit-pay zan-font-18 zan-c-gray" ></div>
      <div class="zan-cell__bd">一键注册生成店铺</div>
    </div>
    <div class="zan-cell zan-cell--access">
      <div class="zan-cell__icon zan-icon zan-icon-debit-pay zan-font-18 zan-c-gray" ></div>
      <div class="zan-cell__bd">一键注册供应商</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterBasic'
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.zan-cell {
  .enter{
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i{
      font-size: 24px;
      color: @minColor;
      font-weight: 800;
    }
  }
}

</style>
