<template>
  <view class="content">
    <view class="gen-btn">
      <button type="default" class="" @click="genImg()">生成海报</button>
    </view>
    <view>
      <view
        class="uni-form-item uni-column"
        v-for="(item, index) in textList"
        :key="index"
      >
        <view class="title">文本{{ index + 1 }}</view>
        <input class="uni-input" v-model="item.content" />
      </view>
      <view
        class="uni-form-item uni-column"
        v-for="(item, index) in imageList"
        :key="index"
      >
        <view class="title">图片{{ index + 1 }}</view>
        <button
          class="mini-btn"
          type="default"
          size="mini"
          @click="chooseImg(index)"
        >
          选择图片
        </button>
        <image v-if="item.url" :src="item.url" />
      </view>
    </view>
    <view v-if="showGenImg" class="gen-img">
      <view class="img-mask" @click="showGenImg = false"></view>
      <view class="img-content">
        <hm-canvas
          ref="imgGenRef"
          :elementList="elementList"
          :canvasInfo="canvasInfo"
        ></hm-canvas>
      </view>
      <div class="save-btn">
        <text @click="savePoster">保存海报</text>
      </div>
    </view>
  </view>
</template>

<script>
import HmCanvas from "../components/built-in/uniapp/HmCanvas.vue";
export default {
  components: {
    HmCanvas,
  },
  data() {
    return {
      showGenImg: false,
      elementList: [],

      imageList: [
        // logo4
        {
          type: "image",
          url: "/static/z.png", //顶部小图
          width: "100%",
          height: 76,
          x: 0,
          y: 0,
        },
        // logo 1
        {
          type: "image",
          url: "/static/q.png",
          width: 150,
          height: 26,
          x: 42,
          y: 13,
        },
        // logo 2
        {
          type: "image",
          url: "/static/b.png",
          width: 32,
          height: 32,
          x: 118,
          y: 445,
        },
        // 头像
        {
          type: "image",
          shape: "circle",
          url: "/static/i.jpg",
          width: 39,
          height: 39,
          x: 18,
          y: 5,
        },
        // 主图
        {
          type: "image",
          url: "/static/f.jpg",
          width: "100%",
          height: 350,
          x: 0,
          y: 88,
        },
        // logo3
        {
          type: "image",
          url: "/static/v.png", //底部大图
          width: "100%",
          height: 367,
          x: 0,
          y: 365,
        },
        // 二维码
        {
          type: "image",
          url: "/static/o.jpg",
          width: 40,
          height: 40,
          x: 308,
          y: 496,
        },
      ],
      textList: [
        {
          type: "text",
          content: "本期简介：梅西一传一射，阿根廷挺进世界杯",
          fontSize: 18,
          color: "#ffffff",
          x: "center",
          y: 74,
        },
        {
          type: "text",
          content: "老友在线报",
          fontSize: 24,
          color: "#e77b77",
          x: 153,
          y: 470,
        },
        {
          type: "text",
          content: "2022年12月16日【第260期】",
          fontSize: 16,
          color: "#333333",
          x: "center",
          y: 500,
        },
        {
          type: "text",
          content: "2.32万播放",
          fontSize: 18,
          textAlign: "center",
          color: "#636262",
          x: "center",
          y: 525,
        },
        {
          type: "text",
          content: "长按一起听",
          fontSize: 12,
          color: "#636262",
          x: 295,
          y: 553,
        },
      ],
      rectList: [
        {
          type: "rect",
          bgColor: "#e77b77",
          width: "100%",
          height: 40,
          x: 0,
          y: 48,
        },
      ],
      canvasInfo: {
        width: 296,
        height: 444,
        bgColor: "#fff",
      },
    };
  },
  onLoad() {},
  mounted() {},
  methods: {
    // 选择图片
    chooseImg(index) {
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          console.log("chooseImg res: ", res);
          this.imageList[index].url = res.tempFilePaths[0];
        },
      });
    },
    // 生成海报
    genImg() {
      this.elementList = this.imageList
        .concat(this.rectList)
        .concat(this.textList);
      this.showGenImg = true;
    },
    savePoster() {
      this.$refs.imgGenRef.saveImage();
    },
  },
};
</script>
<style scoped>
.gen-btn {
  text-align: center;
}

.uni-form-item {
  margin-bottom: 20rpx;
}

.title {
  padding: 5rpx 40rpx;
  color: rgb(121, 121, 121);
}

.uni-input {
  padding: 0 40rpx;
  border: 1px solid rgb(226, 226, 226);
  height: 100rpx;
  line-height: 100rpx;
}

.gen-img {
  display: flex;
  flex-direction: column;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.598);
}

.img-mask {
  z-index: 1003;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.img-content {
  z-index: 1004;
  position: relative;
}

.save-btn {
  z-index: 1004;
  width: 314rpx;
  height: 64rpx;
  line-height: 64rpx;
  margin-top: 40rpx;
  background: #da5240;
  border: 2rpx solid rgba(255, 255, 255, 1);
  border-radius: 8rpx;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 28rpx;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 500;
}
</style>
