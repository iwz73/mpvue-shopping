<template>
  <div class="popup">
  <div class="popup-example--bottom zan-popup zan-popup--bottom" :class="{ 'zan-popup--show' : showPopup }">
      <div class="zan-popup__mask" @click="togglePopup"></div>
      <div class="zan-popup__container">
        <slot></slot>
        <button class="van-bnt"></button>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data () {
  },
  props: {
    showPopup: {
      type: Boolean,
      default: false
    },
    popupData: {
      type: Object
    }
  },
  methods: {
    togglePopup () {
      this.showPopup = !this.showPopup
      this.$emit('togglePopup', this.showPopup)
    }
  }
}
</script>

<style lang="less" scoped>
.popup-example--bottom .zan-popup__container {
  left: 0;
  right: 0;
}
</style>
