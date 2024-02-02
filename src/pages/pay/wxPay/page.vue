<template>
  <div class="container">
    <div style="width: 100%;display: flex;margin-top:50px;justify-content: center;">
      <u-image
        :src="src"
        :width="300"
        :height="300"
      />
    </div>
    <div class="tip">
        <div class="ico-scan"></div>
        <div class="tip-text">
            <p>打开微信扫一扫</p>
            <p>扫描二维码</p>
        </div>
    </div>
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
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  flex-wrap: wrap;
}
.tip {
  margin-top:50px;
  width: 100%;
  display: flex;
  justify-content: center; /* 水平居中 */
}

.tip .ico-scan {
  width: 56px;
  height: 55px;
  background: url("/static/kk.png") 0 0 no-repeat;
  background-size: 56px 55px;
  vertical-align: middle;
}

.tip .tip-text{
  vertical-align: middle;
  text-align: left;
  margin-left: 23px;
  font-size: 16px;
  line-height: 28px;
}
</style>
