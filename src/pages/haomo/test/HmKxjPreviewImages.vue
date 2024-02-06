<template>
  <view class="content">
    <view class="text-area"
      ><text class="title">支持多端，支持手势缩放/描述文字/长按事件</text></view
    >

    <view
      ><image
        v-for="(img, i) in imgs"
        :key="i"
        :src="img"
        :data-src="img"
        mode="widthFix"
        @tap="previewOpen"
      ></image
    ></view>
    <view class="text-area"
      ><text class="title">（以上图片均为本人拍摄）</text></view
    >
    <previewImage
      ref="previewImage"
      :opacity="0.8"
      :circular="true"
      :imgs="imgs"
      :descs="descs"
      @longPress="longPress"
    ></previewImage>
  </view>
</template>

<script>
import previewImage from "@/components/built-in/third-party/HmKxjPreviewImage.vue"; //引用插件
var _this;
export default {
  components: { previewImage }, //注册插件
  data() {
    return {
      imgs: [
        "https://t7.baidu.com/it/u=1785207335,3397162108&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=3659156856,3928250034&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=3728410568,989468460&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1416385889,2308474651&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=1599162854,1822154160&fm=193&f=GIF",
      ],
      descs: ["城镇", "海洋", "雪山", "河流", "湖泊"],
    };
  },

  methods: {
    //打开预览e
    previewOpen(e) {
      var param = e.currentTarget.dataset.src;
      console.log(param);

      this.$refs.previewImage.open(param); // 传入当前选中的图片地址或序号
      return; //如需测试和uni原生预览差别可注释这两行

      //以下是效果对比相关
      var _this = this;
      uni.showModal({
        title: "请选择",
        content: "请选择使用uni原生图片预览或非原生自定义的图片预览。",
        cancelText: "uni",
        confirmText: "自定义",
        success: function (res) {
          if (res.confirm) {
            _this.$refs.previewImage.open(param); // 传入当前选中的图片地址或序号
          } else if (res.cancel) {
            uni.previewImage({
              current: param,
              urls: _this.imgs,
            });
          }
        },
      });
    },
    //长按事件
    longPress(data) {
      console.log(data);
      uni.showModal({
        showCancel: false,
        title: "长按事件",
        content: "已触发长按事件,你可以在这里做更多",
        success: (showResult) => {},
      });
    },
  },
};
</script>

<style>
.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 26rpx;
  color: #999999;
}
image {
  width: 750rpx;
}
</style>
