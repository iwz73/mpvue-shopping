<template>
  <div class="new-order">
    <!-- <div class="order-address">
      <i class="zan-icon zan-icon-location"></i>
      <div class="order-address__info">
        <div></div>
      </div>
      <i class="zan-icon zan-icon-arrow"></i>
    </div> -->
    <div class="zan-panel order-adderss">
      <div class="zan-cell" >
        <i class="zan-icon zan-icon-location order-location"></i>
        <div class="zan-cell__bd">
          <div class="zan-cell__text cell__bd___top">
            <div class="">收货人：南方先生</div>
            <div class="">18390902222</div>
          </div>
          <div class="zan-cell__desc">
            收货地址：福建省厦门市思明区莲前街道软件园二期望海路
          </div>
        </div>
        <div class="zan-cell__ft"> 
          <i class="zan-icon zan-icon-arrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.order-adderss{
  border-bottom: 4px solid #e2f3;
  .order-location{
    font-weight: bold;
    font-size: 16px;
    margin-right: 10px;
  }
  .cell__bd___top{
    display: flex;
    justify-content: space-between; 
    padding-right: 20px;
  }
}


</style>
