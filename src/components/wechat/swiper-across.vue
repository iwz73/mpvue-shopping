<template>
  <div class="scroll-list">
    <scroll-view class="scroll-view_H" :scroll-x="scrollX">
      <div class="content"  v-for="(item, index) in lists" :key="index">
        <h5 class="title">{{item.title}}</h5>
        <span class="subhead">{{item.subhead}}</span>
        <img :src="item.imgUrl" alt="">
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollX: true,
      list: [
        {
          title: '实用卷攻略',
          subhead: '礼盒卷后直减130',
          imgUrl: 'http://suo.im/4HNmBN'
        }, {
          title: '实用卷攻略',
          subhead: '礼盒卷后直减130',
          imgUrl: 'http://suo.im/4HNmBN'
        }, {
          title: '实用卷攻略',
          subhead: '礼盒卷后直减130',
          imgUrl: 'http://suo.im/4HNmBN'
        }, {
          title: '实用卷攻略',
          subhead: '礼盒卷后直减130',
          imgUrl: 'http://suo.im/4HNmBN'
        }, {
          title: '实用卷攻略',
          subhead: '礼盒卷后直减130',
          imgUrl: 'http://suo.im/4HNmBN'
        }, {
          title: '实用卷攻略',
          subhead: '礼盒卷后直减130',
          imgUrl: 'http://suo.im/4HNmBN'
        }
      ]
    }
  },
  prors: {
    list: {
      type: Array
    }
  },
  computed: {
    lists () {
      console.log(this.list)
      return this.list
    }
  }
}
</script>

<style lang="less" scoped>
.scroll-list{
  width: 100vw;
  overflow: hidden;
}
.scroll-view_H{
  width: 100%;
  white-space: nowrap;
}
.content{
  display: inline-block;
  height: 100px;
  width: 100px;
  margin: 10px;
  background: #fff;
  overflow: hidden;
  h5{
    text-align: center;
  }
  .subhead{
    display: block;
    font-size: 12px;
    text-align: center;
  }
  img{
    display: block;
    height: 45px;
    width: 90px;
    margin:0 auto;
    
  }
}
</style>
