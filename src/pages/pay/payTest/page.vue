<template>
  <button @click="wxpay">微信支付</button>
  <button @click="alipay">支付宝支付</button>
</template>
<script>
export default {
  components: {  },
  data() {
    return {
      orderId: "test2"
    };
  },
  onLoad(option){
    if(option.orderId){
      this.orderId = option.orderId
    }
  },
  methods: {
    wxpay(){
      this.$pay(this.orderId, "0")
    },
    alipay(){
      this.$pay(this.orderId, "1")
    }
  }
}
</script>
<style scoped>

</style>
