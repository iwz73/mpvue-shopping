<template>
  <div class="swiper-contain" >
      <swiper class="slideshow" 
      :style="{height : bannerHeight+'px'}"
      :indicator-dots="indicatorDots" 
      :autoplay="autoplay" 
      :interval="interval" 
      :duration="duration" 
      :circular="circular" 
      @change="swiperChange" 
      @animationfinish="animationfinish"
      >
        <div v-for="(item, index) in imgUrls" :key="index">
          <swiper-item>
            <image :mode="mode" :src="item" class="slide-image" @load="imageLoad" />
          </swiper-item>
        </div>
      </swiper>
  </div>
</template>

<script>
import wx from 'wx'

export default {
  data () {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      mode: 'widthFix',
      bannerHeight: 150
    }
  },
  props: {
    imgUrls: {
      type: Array,
      default: [
        'http://suo.im/4HSicf',
        'http://suo.im/5joJc4',
        'http://suo.im/54mJjo'
      ]
    }
  },
  methods: {
    imageLoad (e) {
      const res = wx.getSystemInfoSync()
      const ratio = e.target.width / e.target.height
      console.log(e)
      this.bannerHeight = res.windowWidth / ratio
    },
    swiperChange (e) {
      // console.log('第' + e.mp.detail.current + '张轮播图发生了滑动')
    },
    animationfinish (e) {
      // console.log('第' + e.mp.detail.current + '张轮播图滑动结束')
    }
  }
}
</script>

<style lang="less">
@import url("~@/styles/color.less");
.swiper-contain{
  background: @backgroundColor;
  width:100%;
  .slide-image{
    width:100%;
    height:100%;
    overflow: hidden;
  }
}


</style>
