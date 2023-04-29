<template>
  <view class="container">
    <web-view :src="cSrc" :width="cWidth" :height="cHeight"></web-view>
  </view>
</template>

<script>
export default {
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: '200'
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: '200'
    },
    /**
     * 地址
     */
    src: {
      type: String,
      default: 'https://baidu.com'
    }
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    src(value) {
      this.cSrc = value
    }
  },
  created(){
    this.cSrc = this.src
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
  },
  mounted() {
    
  },
  data() {
    return {
      cSrc: 'https://baidu.com',
      cWidth: "",
      cHeight: ""
    }
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  }
}
</script>

<style>

</style>