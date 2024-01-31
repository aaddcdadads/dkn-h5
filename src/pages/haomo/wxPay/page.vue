<template>
  <div>
    <u-image
      :src="src"
      :width="100"
      :height="100"
    />
  </div>
</template>
<script>
export default {
  components: {  },
  data() {
    return {
      src: "",
      orderId: ""
    };
  },
  onLoad(option) {
    this.src = option.url
    this.orderId = option.orderId
    // this.setOrderStatusInterval()
    // this.$wxWebPay(option.state, option.code)
  },
  methods: {
    /**
     * 设置订单状态轮询定时器
     */
    // setOrderStatusInterval(){
    //   let self = this
    //   this.orderStatusInterval = setInterval(async () => {
    //     let res = await self.$getAction("/api/dkn/registrationOrders/queryById", {
    //       id: self.orderId
    //     })
    //     //支付成功
    //     if(res.success && res.result && res.result.paymentStatus == 0){
    //       this.$router.push("/pay-success/index");
    //     }
    //   }, 2000)
    // },
  }
}
</script>
<style scoped>

</style>
