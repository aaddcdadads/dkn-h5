<template>
  <div class="container">
    支付中...
    <!-- <div style="width: 100%;display: flex;margin-top:50px;justify-content: center;">
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
    </div> -->
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
    this.orderId = option.state
    this.setOrderStatusInterval()
    this.$wxWebPay(option.state, option.code)
  },
  methods: {
    /**
     * 设置订单状态轮询定时器
     */
    setOrderStatusInterval(){
      let self = this

      const getOrderStatus = () => {
        setTimeout(async () => {
          let res = await self.$getAction("/api/dkn/registrationOrders/queryById", {
            id: self.orderId
          })
          //支付成功
          if(res.success && res.result && res.result.paymentStatus == 0){
            this.$router.push("/pages/haomo/1753965929131151361/page?orderId=" + self.orderId);
          }else{
            getOrderStatus(); // 递归调用
          }
        }, 2000);
      };

      getOrderStatus(); // 开始倒计时

      // this.orderStatusInterval = setInterval(async () => {
      //   let res = await self.$getAction("/api/dkn/registrationOrders/queryById", {
      //     id: self.orderId
      //   })
      //   //支付成功
      //   if(res.success && res.result && res.result.paymentStatus == 0){
      //     this.$router.push("/pages/haomo/1753965929131151361/page?orderId=" + self.orderId);
      //   }
      // }, 2000)
    },
  }
}
</script>
<style scoped>
.container {
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  font-size: 18px;
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
