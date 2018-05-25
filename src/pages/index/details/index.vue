<template>
  <div class="details">
    <slideshow
    :imgUrls="slideList"
    ></slideshow>
    <badge
    :content="badgeList.content"
    ></badge>

    <popup
    @togglePopup="togglePopup"
    :showPopup="showPopup"
    :popupData="popupData"
    >
      <div class="imgthumb">
        <img :src="popupData.imgUrl" alt="">
      </div>
      <div class="commodity">
        <div class="commodity-info">
          <span class="text-overflow">【25号10点限时限量9.9元秒杀】张大一服装店美国进口，奥巴马审核</span>
          <em>￥139.00</em>
        </div>
        <div></div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
    </popup>

    <div class="details-action">
      <a class="action-bnt__min">
        <i class="action_icon"></i>
        <span>客服</span>
      </a>
      <a class="action-bnt__min">
        <i class="action_icon"></i>
        <span>进店</span>
      </a>
      <a class="action-bnt__min">
        <i class="action_icon"></i>
        <span>收藏</span>
      </a>
      <a class="action-bnt__big bnt_secondary">加入购物车</a>
      <a class="action-bnt__big bnt_mian" @click="togglePopup">立即购买</a>
    </div>
  </div>
</template>

<script>
import slideshow from '@/components/wechat/swiper-slideshow'
import badge from '@/components/mpvue/badge'
import popup from '@/components/mpvue/popup'
// import wx from 'wx'
export default {
  data () {
    return {
      slideList: [
        'http://suo.im/5qYDOH',
        'http://suo.im/4zFcnr',
        'http://suo.im/4HW1Z3'
      ],
      badgeList: {
        content: '买一送一'
      },
      showPopup: true,
      popupData: {
        imgUrl: 'http://suo.im/5qYDOH'
      }
    }
  },

  components: {
    slideshow,
    badge,
    popup
  },

  methods: {
    togglePopup () {
      this.showPopup = !this.showPopup
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
  },
  onPullDownRefresh () {
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.imgthumb{
  position: absolute;
  top: -20px;
  left: 20px;
  z-index: 9999;
  border-radius: 6px;
  border: 1px solid @borderColor;
  overflow: hidden;
  img{
    height: 80px;
    width: 80px;
  }
}
.details-action{
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100vw;
  background: #ffffff;
  display: flex;
  a{
    text-align: center;
    line-height: 50px;
  }
  .bnt_secondary{
    background: @secondaryBntBackgroundColor;
  }
  .bnt_mian{
    background: @bntBackgroundColor;
  }
  .action-bnt__min{
    flex: 1;
  }
  .action-bnt__big{
    flex:2.5;
    color: #ffffff;
  }
}
.commodity{
  display: flex;
  .commodity-info{
    display: flex;
    flex-direction: column;
    padding-left: 120px;
    height: 75px;
    border-bottom: 1px solid @borderColor;
    span{
      width:240px;
    }
    em{
      color: @minColor;
    }
  }
}
</style>
