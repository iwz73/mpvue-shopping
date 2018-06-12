<template>
  <div class="center">
    <CenterInfo/>
    <CenterEnter/>
    <CenterEssential/>
    <CenterBasic/>
  </div>
</template>

<script>
import CenterEnter from '@/components/template/center/center-order-enter'
import CenterInfo from '@/components/template/center/center-user-info'
import CenterBasic from '@/components/template/center/center-tool-basic'
import CenterEssential from '@/components/template/center/center-tool-essential'

export default {
  data () {
    return {
    }
  },
  components: {
    CenterInfo,
    CenterEnter,
    CenterEssential,
    CenterBasic
  },
  methods: {
  },
  created () {
    // 调用应用实例的方法获取全局数据
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");



</style>
