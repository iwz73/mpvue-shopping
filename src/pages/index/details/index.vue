<template>
  <div class="details">
    <!-- tab -->
    <div class="zanTab">
      <zanTab v-bind="tab1" :componentId="'tab1'" @change="handleZanTabChange"/>
    </div>
    <div class="details-tab-selected">

      <section class="animated" :class="{'zoomIn' : tab1.selectedId === 'goods'}">
        <!-- 轮播图 -->
        <slideshow
        :imgUrls="slideList"
        ></slideshow>
        <!-- info -->
        <div class="details-info">
          <div class="info-main">
            <div class="info-title">【25号10点限时限量9.9元秒杀】张大一服装店美国进口，奥巴马审核</div>
            <enter
              v-bind="stare"
            >
            </enter>
          </div>
          <div class="info-price">
            <span>￥139</span>
            <badge
            v-bind="styles"
            ></badge>
          </div>
          <div class="info-footer">
            <span class="zan-c-gray-dark zan-font-12">快递 0.000</span>
            <span class="zan-c-gray-dark zan-font-12">月销 9999</span>
            <span class="zan-c-gray-dark zan-font-12">傲来国花果山</span>
          </div>
        </div>
        <!-- explain -->
        <div class="details-explain">
          <span>说明:</span>
          <block v-for="(item, index) in capsuleData" :key="index">
            <capsule v-bind="item" ></capsule>
          </block>
        </div>
        <!-- cell -->
        <div class="zan-panel">
          <div class="zan-cell zan-cell--access"  @click="togglePopup(false)">
            <div class="zan-cell__bd">选择颜色,尺码</div>
            <div class="zan-cell__ft"></div>
          </div>
        </div>
        <div class="zan-panel">
          <div class="zan-cell zan-cell--access">
            <div class="zan-cell__bd">产品参数</div>
            <div class="zan-cell__ft"></div>
          </div>
          <div class="zan-cell zan-cell--access">
            <div class="zan-cell__bd">配送 美国 至 佛山市</div>
            <div class="zan-cell__ft"></div>
          </div>
        </div>
      </section>
      <section class="animated" :class="{'zoomIn' : tab1.selectedId === 'details'}">
        详情
      </section>
      <section class="animated" :class="{'zoomIn' : tab1.selectedId === 'comment'}">
        评论
      </section>
    </div>

    <!-- 底部option -->
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
      <a class="action-bnt__big bnt_secondary" @click="togglePopup(false)">加入购物车</a>
      <a class="action-bnt__big bnt_mian" @click="togglePopup">立即购买</a>
    </div>
    <!-- popup -->
    <popup
    @togglePopup="togglePopup"
    @handleAffirm="handleAffirm"
    :showPopup="showPopup"
    :popupData="popupData"
    :skip="skip"
    >
      <div class="imgthumb">
        <img :src="popupData.imgUrl" alt="">
      </div>
      <div class="commodity">
        <div class="commodity-info">
          <span class="text-overflow">【25号10点限时限量9.9元秒杀】张大一服装店美国进口，奥巴马审核</span>
          <em>￥139.00</em>
        </div>
        <div class="popup-footer">
          <div class="footer-left">
            <span>购买数量</span>
            <em>剩余{{popupData.stepper1.max}}件</em>
          </div>
          <stepper
          v-bind="popupData.stepper1"
          size="small"
          componentId="stepper1"
          @handleZanStepperChange="handleZanStepperChange"
          ></stepper>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import slideshow from '@/components/wechat/swiper-slideshow'
import badge from '@/components/mpvue/badge'
import popup from '@/components/mpvue/popup'
import stepper from '@/components/mpvue/stepper'
import capsule from '@/components/mpvue/capsule'
import enter from '@/components/mpvue/enter'
import zanTab from '@/components/mpvue/tab'
// import wx from 'wx'
export default {
  data () {
    return {
      stare: {
        imgUrl: '/static/images/share.png',
        text: '分享'
      },
      styles: {
        color: '#d91f2f',
        backgroundColor: '#fff',
        fontSize: '10',
        boxShadow: '0 0 0 2px #d91f2f',
        content: '买一送一',
        borderRadius: 'none'
      },
      slideList: [
        'http://p5za7ep72.bkt.clouddn.com/TB21zOEbeySBuNjy1zdXXXPxFXa-370627083.jpg_790x10000Q50s50.jpg_.webp',
        'http://p5za7ep72.bkt.clouddn.com/TB2M965pxWYBuNjy1zkXXXGGpXa-370627083.jpg_790x10000Q50s50.jpg_.webp',
        'http://p5za7ep72.bkt.clouddn.com/TB2czaBbh1YBuNjy1zcXXbNcXXa-370627083.jpg_790x10000Q50s50.jpg_.webp'
      ],
      badgeList: {
        content: '买一送一'
      },
      showPopup: false,
      skip: true,
      popupData: {
        imgUrl: 'http://suo.im/5qYDOH',
        stepper1: {
          stepper: 10,
          min: 1,
          max: 10
        }
      },
      stepper1: {
        stepper: 10,
        min: 1,
        max: 10
      },
      capsuleData: [
        {
          leftText: '优惠',
          rightText: '买一送一',
          color: '#e93f45',
          onclick: null
        }, {
          leftText: '正',
          rightText: '正品保证',
          color: '#5cb45b',
          onclick: null
        }, {
          leftText: '惠',
          rightText: '赠送费险',
          color: '#ff9595',
          onclick: null
        }, {
          leftText: '保',
          rightText: '急速退货',
          color: '#e26359',
          onclick: null
        }
      ],
      tab1: {
        list: [{
          id: 'goods',
          title: '商品'
        }, {
          id: 'details',
          title: '详情'
        }, {
          id: 'comment',
          title: '评论'
        }],
        scroll: false,
        selectedId: 'goods'
      }
    }
  },

  components: {
    slideshow,
    badge,
    popup,
    stepper,
    capsule,
    enter,
    zanTab
  },

  methods: {
    ...zanTab.methods,
    togglePopup (tag) {
      this.skip = !!tag
      this.showPopup = !this.showPopup
    },
    handleZanStepperChange (e) {
      const {componentId, stepper} = e
      this.popupData[componentId].stepper = stepper
    },
    handleAffirm (s) {
      console.log(s)
    },
    handleCapsu () {
      this.capsuleData.color = Math.random() > 0.5 ? '#7f71ff' : '#ff6c2e'
    },
    handleZanTabChange (e) {
      console.log(e)
      const {componentId, selectedId} = e
      this[componentId].selectedId = selectedId
    }
  },
  mounted () {
    this.capsuleData.onclick = this.handleCapsu
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
@import url("~@/styles/animate.less");
.details{
  margin-bottom: 60px;
  margin-top: 50px;
}
.zanTab{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.details-info{
  display: flex;
  background: #ffffff;
  flex-direction: column;
  padding: 5px;
  .info-main{
    display: flex;
    .info-title{
      flex: 1;
      padding-right: 20px;
    }
  }
  .info-price{
    overflow: hidden;
    display: flex;
    align-items: center;
    span{
      color: @minColor;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .info-footer{
    display: flex;
    justify-content: space-between;
  }
}

.details-explain{
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 5px;
  margin-top: 10px;

}
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
.popup-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  flex-direction: column;
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
section {
  display: none;
}

</style>
