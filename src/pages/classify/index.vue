<template>
  <div class="calssify" >
    <div class="activity">
      <img @load="imgLoad" class="activity-img" src="http://suo.im/4HSicf" mode="widthFix">
    </div>
    <div class="class-heading" :class="{'tab-fixed':hang}">
      <zanTab v-bind="tab" :componentId="'tab'" @change="handleZanTabChange"/>
      <ul class="calssify-items">
        <li 
        class="zan-font-12"
        v-for="item in tagList" 
        :key="item.id" 
        :class="{'classify-select': item.id === tagSelect}"
        @click="handleTagSelect(item.id)"
        >
        {{item.tagName}}
        </li>
      </ul>
    </div>
    <div class="classify-commodity" :style="{paddingTop:hang?domHeight+'px':0 +'px'}">
      <block v-for="num in 20" :key="num">
        <Commodity></Commodity>
      </block>
    </div>
    <ZanLoadmore v-bind="{ loading: true }" v-if="loading"/>
    <!-- <ZanLoadmore v-bind="{ nodata: true }" /> -->
    <ZanLoadmore v-bind="{ nomore: true }" v-else/> 
  </div>
</template>

<script>
import zanTab from '@/components/mpvue/tab'
import Commodity from '@/components/template/commodity'
import ZanLoadmore from '@/components/mpvue/loadmore'
export default {
  data () {
    return {
      tab: {
        list: [{
          id: 'all',
          title: '推荐'
        }, {
          id: 'obligation',
          title: '价格'
        }, {
          id: 'overhang',
          title: '销量'
        }, {
          id: 'wait_receiving',
          title: '品牌'
        }, {
          id: 'evaluate',
          title: '国家'
        }],
        scroll: false,
        selectedId: 'all'
      },
      tagList: [
        {
          id: 1,
          tagName: '精选'
        }, {
          id: 2,
          tagName: '洗发护发'
        }, {
          id: 3,
          tagName: '头部造型'
        }, {
          id: 4,
          tagName: '口腔护理'
        }, {
          id: 5,
          tagName: '身体清洁'
        }, {
          id: 6,
          tagName: '润肤美体'
        }, {
          id: 7,
          tagName: '女性护理'
        }, {
          id: 8,
          tagName: '衣物清洁'
        }, {
          id: 9,
          tagName: '纸品湿巾'
        }, {
          id: 10,
          tagName: '家居清洁'
        }
      ],
      tagSelect: 1,
      loading: true,
      topHeight: 0,
      domHeight: 0,
      hang: false
    }
  },
  components: {
    zanTab,
    Commodity,
    ZanLoadmore
  },
  methods: {
    handleZanTabChange (e) {
      const {componentId, selectedId} = e
      this[componentId].selectedId = selectedId
    },
    handleTagSelect (id) {
      this.tagSelect = id
      if (id === 2) this.loading = !this.loading
      wx.pageScrollTo({
        scrollTop: this.topHeight,
        duration: 300
      })
    },
    imgLoad (e) {
      const res = wx.getSystemInfoSync()
      const ratio = e.target.width / e.target.height
      this.topHeight = res.windowWidth / ratio
      // this.Mt = this.topHeight + this.domHeight
      // console.info(this.topHeight, this.domHeight)
      // console.log(this.hang)
    }
  },
  mounted () {
    const query = wx.createSelectorQuery()
    query.select('.calssify-items').boundingClientRect()
    query.exec((res) => {
      this.domHeight = res[0].height + 50
      console.log(res)
    })
  },
  onPageScroll (e) {
    if (e.scrollTop > this.topHeight) {
      this.hang = true
    } else {
      this.hang = false
    }
    // console.log(this.hang, e)
  }
}
</script>

<style lang="less">
.activity{
  font-size: 0;
  img{
    width: 100%;
    height: 0;
  }
}
.tab-fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.calssify-top{
  margin-top: 50px;
}
.calssify-items{
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  padding: 5px;
  margin-bottom: 5px;
  li{
    padding:2px 10px;
    margin: 5px 3px;
  }
  .classify-select{
    background: #f44;
    color: #ffffff;
    border-radius: 50px;
    box-shadow: 0 0 3px 0px #7e2424;
  }
}
.classify-commodity{
  display: inline-flex;
  flex-wrap: wrap;

}
</style>
