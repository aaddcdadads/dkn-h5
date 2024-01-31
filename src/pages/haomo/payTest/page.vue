<template>
  <button @click="wxpay">微信支付</button>
  <button @click="alipay">支付宝支付</button>
</template>
<script>
export default {
  components: {  },
  data() {
    return {
    };
  },
  methods: {
    wxpay(){
      this.$pay("test1", "0")
    },
    alipay(){
      this.$pay("test1", "1")
    }
  }
}
</script>
<style scoped>

</style>
