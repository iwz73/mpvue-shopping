<template>
  <div>
    <div class="comment-commodity">
      <div class="commodity-top">
        <div class="comment-img">
        <img src="http://p5za7ep72.bkt.clouddn.com/raw_1526631391.jpeg" alt="">
      </div>
      <div class="commodity-rate">
        <div class="describe rate-item ">
          <span>描述相符</span>
          <Rate
          :rateStyles="styleObject"
          @handleStar="handleStar"
          ></Rate>
        </div>
        <!-- <div class="numn">
          <span v-for="num in 10" :key="num">
            {{num}}
          </span>
        </div> -->
        <div class="grade rate-item ">
          <span>商品评分</span>
          <Rate
          :rateStyles="styleObject"
          @handleStar="handleStar"
          ></Rate>
        </div>
        <div class="quality rate-item ">
          <span>服务质量</span>
          <Rate
          :rateStyles="styleObject"
          @handleStar="handleStar"
          ></Rate>
        </div>
      </div>
      </div>
      <div class="commodity-bt">
       <zan-field v-bind="Object.assign({}, inputDeploy)" :value="commentData.comment" @handleZanFieldChange="handleZanFieldChange"/> 
        <div class="up-file">
          <div class="img-group">
            <img v-for="(imgURl, index) in imglist" :key="index" :src="imgURl" alt="">
          </div>
          <div class="uploading" @click="handleUploading"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/wechat/rate'
import ZanField from '@/components/mpvue/field'
export default {
  data () {
    return {
      inputDeploy: {
        placeholder: '请输入评价...',
        componentId: 'comment',
        type: 'textarea',
        textareaHeight: '100px'
      },
      commentData: {
        comment: ''
      },
      styleObject: {
        fontSize: 20,
        color: '#fbda15'
      },
      imglist: []
    }
  },
  components: {
    Rate,
    ZanField
  },
  methods: {
    handleStar (v) {
      console.log(v)
    },
    handleZanFieldChange (e) {
      const {dataset: { componentId }, value} = e.target
      console.log(componentId, value)
    },
    handleUploading (e) {
      wx.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success (res) {
          console.log(res, this.imglist, this.imglist)
          // this.imglist.push(res.tempFilePaths[0])
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.comment-commodity{
  background: #ffffff;
  .commodity-top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    .comment-img{
      img{
        width: 90px;
        height: 90px;
      }
    }
    .commodity-rate{
      .rate-item{
        display: flex;
        align-items: center;
        span{
          margin-right: 10px;
          margin-bottom:5px;
        }
      }
    }
  }
}
.commodity-bt{
  .uploading{
    background: #ee33ee;
    height: 90px;
    width: 90px;
  }
  
}

</style>
