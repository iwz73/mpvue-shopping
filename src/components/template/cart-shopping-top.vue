<template>
<div class="zan-panel">
  <div class="panel">
    <div class="cart-location">
      <span class="iconfont icon-location"></span>
      <span>送至：广州天河区</span>
      <span class="zan-icon zan-icon-arrow"></span>
    </div>
    <div>管理</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartTop'
}
</script>

<style lang="less">
@import url('~@/font/iconfont.css');
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
</style>
