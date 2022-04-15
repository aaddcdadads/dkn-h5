<template >
  <view> </view>
</template>

<script>
export default {
  name: "HmScanCode",
  props: {
    /**
     *只允许相机扫码
     */
    onlyFromCamera: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },

  onload() {},
  mounted() {
    /*let self = this;
    if (this.show) {
      setTimeout(function () {
        self.scanCode();
      }, 200);
    }*/
  },
  methods: {
    open() {
      console.log("打开相机");
      let self = this;
      uni.scanCode({
        onlyFromCamera: this.onlyFromCamera,
        success: function (res) {
          ///console.log(JSON.stringify(res));
          self.onSuccess(res);
        },
        fail: function () {
          self.onFail();
        },
        complete: function () {
          self.onComplete();
        },
      });
    },
    onSuccess(res) {
      //console.log(res);
      this.$emit("success", res);
    },
    onFail(res) {
      //console.log("onReturn");
      this.$emit("fail", res);
    },
    onComplete(res) {
      //console.log("onReturn");
      this.$emit("complete", res);
    },
  },
};
</script>

<style scoped>
</style>
