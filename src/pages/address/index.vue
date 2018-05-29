<template>
  <div class="address">
    <div class="zan-panel address-panel">
      <zan-field v-bind="Object.assign({}, handleFunctions, inputDeploy.name)" :value="name"/>
      <zan-field v-bind="Object.assign({}, handleFunctions, inputDeploy.phoneNumber)" :value="phoneNumber"/>
      <picker class="address-picker zan-cell zan-field" mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
        <div class="picker">
          {{region[0]}}，{{region[1]}}，{{region[2]}}
        </div>
      </picker>
      <!-- <zan-field v-bind="Object.assign({}, handleFunctions, inputDeploy.street)" :value="street"/> -->
      <zan-field v-bind="Object.assign({}, handleFunctions, inputDeploy.postCode)" :value="postCode"/>
      <zan-field v-bind="Object.assign({}, handleFunctions, inputDeploy.particular)" :value="particular"/> 
    </div>
    <button class="address-save zan-btn zan-btn--danger">保存</button>
  </div>
</template>

<script>
  import ZanField from '@/components/mpvue/field'
  export default {
    components: {
      ZanField
    },
    data () {
      return {
        region: ['省', '市', '区'],
        customItem: '全部',
        // 无标题输入框
        inputDeploy: {
          name: {
            placeholder: '请输入收货人姓名',
            componentId: 'name'
          },
          phoneNumber: {
            placeholder: '手机号码',
            componentId: 'phoneNumber'
          },
          // street: {
          //   placeholder: '街道',
          //   componentId: 'street'
          // },
          postCode: {
            placeholder: '邮编地址',
            componentId: 'postCode'
          },
          particular: {
            placeholder: '详细地址',
            componentId: 'particular',
            type: 'textarea',
            textareaHeight: '100px'
          }
        },
        // Form 中使用输入
        name: '',
        phoneNumber: '',
        street: '',
        postCode: '',
        particular: '',
        handleFunctions: {
          handleZanFieldChange: this.handleZanFieldChange,
          handleZanFieldFocus: this.handleZanFieldFocus,
          handleZanFieldBlur: this.handleZanFieldBlur
        }
      }
    },
    methods: {
      handleZanFieldChange (e) {
        // const { componentId, target, detail } = e
        // console.log('[zan:field:change]', componentId, target, detail)
      },
      handleZanFieldFocus (e) {
        // const { componentId, target, detail } = e
        // console.log('[zan:field:focus]', componentId, target, detail)
      },
      handleZanFieldBlur (e) {
        // const { componentId, target, detail } = e
        // console.log('[zan:field:blur]', componentId, target, detail)
      },
      bindRegionChange (e) {
        this.region = e.target.value
      }
    }
  }
</script>
<style lang="less" scoped>
@import url("~@/styles/color.less");
.address-picker{
  min-height: 45px;
  .picker{
    width: 100vw;
  }
}
.address-save{
  margin: 40px 10px;
  background: @bntBackgroundColor;
}
.address-panel{
  margin-top: 0;
}
</style>