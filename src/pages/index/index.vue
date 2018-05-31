<template>
  <div class="home">
    <!-- 图片轮播 -->
    <slideshow
    :imgUrls="Carousels"
    ></slideshow>
    <!-- 商品分类 -->
    <div class="enter-items">
      <div class="enter-item" v-for="(item, index) in sCategories" :key="index">
        <enter
        :text="item.name"
        :imgUrl="item.icon1"
        ></enter>
      </div>
    </div>
    <!-- 首页商品 -->
    <across
    @handleEnterClick="handleEnterClick"
    :list="AcrossList"
    ></across>
    <!-- <div class="card-list">
      <block v-for="(item, index) in relIndexProducts" :key="index">  
        <cardShop
        :imgUrl="item.headimg"
        :title="item.name"
        >
        </cardShop>
      </block>
    </div> -->
    <!-- 推荐商品列表 -->
    <div class="card-list">
      <block v-for="(item, index) in relRecommends" :key="index">  
        <cardRecommend
        :imgUrl="item.headimg"
        :price="item.price"
        :title="item.name"
        ></cardRecommend>
      </block>
    </div>
  </div>
</template>

<script>
import { showToast } from '@/utils/index'
import { index } from '@/api/index'
import slideshow from '@/components/wechat/swiper-slideshow'
import across from '@/components/wechat/swiper-across'
import badge from '@/components/mpvue/badge'
import enter from '@/components/mpvue/enter'
import cardRecommend from '@/components/mpvue/card-recommend'
import cardShop from '@/components/mpvue/card-shop'
export default {
  data () {
    return {
      // items: [
      //   {
      //     text: '女装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png',
      //     content: '999'
      //   }, {
      //     text: '男装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
      //   }, {
      //     text: '男装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
      //   }, {
      //     text: '男装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
      //   }, {
      //     text: '男装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
      //   }, {
      //     text: '男装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
      //   }, {
      //     text: '男装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
      //   }, {
      //     text: '男装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
      //   }, {
      //     text: '男装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
      //   }, {
      //     text: '男装',
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
      //   }
      // ],
      // list: [
      //   {
      //     title: '实用卷攻略',
      //     subhead: '礼盒卷后直减130',
      //     imgUrl: 'http://suo.im/4HNmBN'
      //   }, {
      //     title: '实用卷攻略',
      //     subhead: '礼盒卷后直减130',
      //     imgUrl: 'http://suo.im/4HNmBN'
      //   }, {
      //     title: '实用卷攻略',
      //     subhead: '礼盒卷后直减130',
      //     imgUrl: 'http://suo.im/4HNmBN'
      //   }, {
      //     title: '实用卷攻略',
      //     subhead: '礼盒卷后直减130',
      //     imgUrl: 'http://suo.im/4HNmBN'
      //   }, {
      //     title: '实用卷攻略',
      //     subhead: '礼盒卷后直减130',
      //     imgUrl: 'http://suo.im/4HNmBN'
      //   }, {
      //     title: '实用卷攻略',
      //     subhead: '礼盒卷后直减130',
      //     imgUrl: 'http://suo.im/4HNmBN'
      //   }
      // ],
      // cardItems: [
      //   {
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631352.jpeg',
      //     price: '999.99',
      //     subhead: '2018春季新款复古绣花网纱刺',
      //     title: '2018春季新款复古绣花网纱刺'
      //   }, {
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631352.jpeg',
      //     price: '999.99',
      //     subhead: '2018春季新款复古绣花网纱刺',
      //     title: '2018春季新款复古绣花网纱刺'
      //   }, {
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631352.jpeg',
      //     price: '999.99',
      //     subhead: '2018春季新款复古绣花网纱刺',
      //     title: '2018春季新款复古绣花网纱刺'
      //   }, {
      //     imgUrl: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631352.jpeg',
      //     price: '999.99',
      //     subhead: '2018春季新款复古绣花网纱刺',
      //     title: '2018春季新款复古绣花网纱刺'
      //   }
      // ],
      // 图片轮播
      relCarousels: [],
      // 首页商品
      relIndexProducts: [],
      // 推荐商品列表
      relRecommends: [],
      // 商品分类
      sCategories: []
    }
  },

  components: {
    slideshow,
    badge,
    across,
    enter,
    cardRecommend,
    cardShop
  },
  mounted () {
  },
  methods: {
    handleEnterClick (index) {
      const id = this.relIndexProducts[index].productid
      wx.navigateTo({
        url: `details/main?id=${id}`
      })
    },
    homeInit () {
      const postData = JSON.stringify({token: 'string'})
      index(postData)
        .then(response => {
          const {relCarousels, relIndexProducts, relRecommends, sCategories} = response.data
          this.relCarousels = relCarousels
          this.relIndexProducts = relIndexProducts
          this.relRecommends = relRecommends
          this.sCategories = sCategories
        })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.homeInit()
  },
  computed: {
    Carousels () {
      const carousels = []
      this.relCarousels.forEach(element => {
        carousels.push(element.path)
      })
      return carousels
    },
    AcrossList () {
      const acrossList = []
      this.relIndexProducts.forEach(element => {
        acrossList.push({
          title: element.name,
          imgUrl: element.headimg,
          id: element.id
        })
      })
      return acrossList
    }
  },
  onPullDownRefresh () {
    setTimeout(() => {
      showToast('成功')
      wx.stopPullDownRefresh()
    }, 2000)
  }
}
</script>

<style lang="less" scoped>
.badge{
  position: relative;
  height: 100px;
  width: 100px;
  background: #000000;
}
.enter-items{
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  background: #ffffff;
  .enter-item{
    display: flex;
    justify-content: center;
    padding: 5px 0;
    width: 20vw;
  }
}
.card-list{
  display: flex;
  flex-wrap: wrap;
}
</style>
