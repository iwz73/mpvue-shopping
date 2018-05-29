<template>
  <div class="address-select">
    <div class="zan-panel">
      <div class="zan-cell" v-for="(item, index) in cellList" :key="index">
        <div class="zan-cell__bd">
          <div class="zan-cell__text cell__bd___top">
            <div class="">{{item.name}}</div>
            <div class="">{{item.call}}</div>
          </div>
          <div class="zan-cell__desc">
            {{item.address}}
          </div>
        </div>
        <div class="zan-cell__ft" @click="handleChecked(e,index)"> 
          <icon class="weui-icon-checkbox_circle" type="circle" size="23" v-if="!item.checked"></icon>
          <icon class="weui-icon-checkbox_success" type="success" size="23" v-if="item.checked"></icon>
        </div>
      </div>
    </div>
    <a>--新增地址--</a>
    <button class="address-save zan-btn zan-btn--danger">确定</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cellList: [
        {
          name: '南墙先生',
          call: '18390202000',
          address: '福建省厦门市思明区莲前街道软件园二期望海路',
          checked: true
        }, {
          name: '南墙先生',
          call: '18390202000',
          address: '福建省厦门市思明区莲前街道软件园二期望海路',
          checked: false
        }, {
          name: '南墙先生',
          call: '18390202000',
          address: '福建省厦门市思明区莲前街道软件园二期望海路',
          checked: false
        }
      ]
    }
  },
  methods: {
    handleChecked (e, key) {
      if (this.cellList[key].checked) return
      this.cellList.forEach((e, i) => {
        if (i !== key)e.checked = false
      })
      this.cellList[key].checked = !this.cellList[key].checked
    }
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.address-select a{
  margin: 10px;
  float: right;
  color: #3f51b5;
}
.cell__bd___top{
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
}
.address-save{
  position: absolute;
  border:none;
  border-radius: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: @bntBackgroundColor;
}
</style>
