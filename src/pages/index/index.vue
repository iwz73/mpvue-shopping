<template>
  <div class="home">
    <slideshow
    :imgUrls="relCarousels"
    ></slideshow>
    <!-- <badge></badge> -->
    <div class="enter-items">
      <div class="enter-item" v-for="(item, index) in sCategories" :key="index">
        <enter
        :text="item.name"
        :imgUrl="item.icon1"
        ></enter>
      </div>
    </div>
    <across
    @handleEnterClick="handleEnterClick"
    :list="list"
    ></across>
    <div class="card-list">
      <block v-for="(item, index) in cardItems" :key="index">  
        <cardShop
        :imgUrl="item.imgUrl"
        :subhead="item.subhead"
        :title="item.title"
        >
        </cardShop>
      </block>
    </div>
    <div class="card-list">
      <block v-for="(item, index) in cardItems" :key="index">  
        <cardRecommend
        :imgUrl="item.imgUrl"
        :price="item.price"
        :subhead="item.subhead"
        :title="item.title"
        ></cardRecommend>
      </block>
    </div>
  </div>
</template>

<script>
import { showToast, ajax } from '@/utils/index'
import slideshow from '@/components/wechat/swiper-slideshow'
import across from '@/components/wechat/swiper-across'
import badge from '@/components/mpvue/badge'
import enter from '@/components/mpvue/enter'
import cardRecommend from '@/components/mpvue/card-recommend'
import cardShop from '@/components/mpvue/card-shop'
export default {
  data () {
    return {
      items: [
        {
          text: '女装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png',
          content: '999'
        }, {
          text: '男装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
        }, {
          text: '男装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
        }, {
          text: '男装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
        }, {
          text: '男装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
        }, {
          text: '男装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
        }, {
          text: '男装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
        }, {
          text: '男装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
        }, {
          text: '男装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
        }, {
          text: '男装',
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/213.png'
        }
      ],
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
      ],
      cardItems: [
        {
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631352.jpeg',
          price: '999.99',
          subhead: '2018春季新款复古绣花网纱刺',
          title: '2018春季新款复古绣花网纱刺'
        }, {
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631352.jpeg',
          price: '999.99',
          subhead: '2018春季新款复古绣花网纱刺',
          title: '2018春季新款复古绣花网纱刺'
        }, {
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631352.jpeg',
          price: '999.99',
          subhead: '2018春季新款复古绣花网纱刺',
          title: '2018春季新款复古绣花网纱刺'
        }, {
          imgUrl: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631352.jpeg',
          price: '999.99',
          subhead: '2018春季新款复古绣花网纱刺',
          title: '2018春季新款复古绣花网纱刺'
        }
      ],
      relCarousels: [],
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
    this.homeInit()
  },
  methods: {
    handleEnterClick (index) {
      wx.navigateTo({
        url: 'details/main'
      })
    },
    homeInit () {
      const postData = JSON.stringify({token: 'string'})
      console.log(postData)
      ajax.post('store/api/index', postData)
        .then((res) => {
          if (res.data.code === 0) {
            const {relCarousels, relIndexProducts, relRecommends, sCategories} = res.data.data
            console.log(relCarousels, relIndexProducts, relRecommends, sCategories)
            this.relCarousels = relCarousels
            this.sCategories = sCategories
          } else {
            showToast(res.errMsg)
          }
        })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
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
