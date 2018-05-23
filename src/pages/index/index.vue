<template>
  <div class="home">
    <slideshow></slideshow>
    <div class="badge">
      <badge></badge>
    </div>
    <across></across>
  </div>
</template>

<script>
import slideshow from '@/components/wechat/swiper-slideshow'
import badge from '@/components/mpvue/badge'
import across from '@/components/wechat/swiper-across'
export default {
  data () {
    return {
    }
  },

  components: {
    slideshow,
    badge,
    across
  },

  methods: {
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>
.badge{
  position: relative;
  height: 100px;
  width: 100px;
  background: #000000;
}
</style>
