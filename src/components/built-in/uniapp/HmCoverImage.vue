<template>
  <view>
    <label>
      <cover-image
        :src="src"
        @load="imageload"
        @error="imageerror"
      ></cover-image>
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmCoverImage.',
  props: {
    /**
     * 图标路径
     */
    src: {
      type: String,
      default: 'https://hellouniapp.dcloud.net.cn/static/uni.png',
    },
  },
  methods: {
    imageload() {
      this.$emit('load')
    },
    imageerror() {
      this.$emit('error')
    },
  },
}
</script>
<style lang="less"></style>
