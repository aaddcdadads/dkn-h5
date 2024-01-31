<template>
  <div>
    <div v-if="showAlert">右上角浏览器打开</div>
  </div>
</template>
<script>
export default {
  components: {  },
  data() {
    return {
      showAlert: false,
    };
  },
  onLoad(option) {
    var uAgent = window.navigator.userAgent;
    if (uAgent.indexOf("MicroMessenger") > 0) {
      //微信浏览器跳转到提示页面
      this.showAlert = true
    }else{
      //其他浏览器
      this.$aliH5Pay(option.orderId)
    }
  },
}
</script>
<style scoped>

</style>
