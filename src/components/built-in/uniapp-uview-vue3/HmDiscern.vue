<!-- 证件识别 -->
<template>
  <view>
    <view class="container">
      <view class="uploadBox">
        <view style="width: 48%" @click="uploadImg(1)">
          <view class="uploadItem uploadImg1">
            <view class="imgBox imgEx1"> </view>
            <image class="imgUrl" :src="imgUrl1"></image>
          </view>
          <view @click="uploadImg(1)" class="leftBtn text-center1"
            ><text class="leftBtn_text">上传正面</text></view
          >
        </view>

        <view style="width: 48%">
          <view class="uploadItem uploadImg2" @click="uploadImg(2)">
            <view class="imgBox imgEx2"> </view>
            <image class="imgUrl" :src="imgUrl2"></image>
          </view>
          <view @click="uploadImg(2)" class="leftBtn text-center2"
            ><text class="leftBtn_text">上传反面</text></view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    /**
     * 宽度
     */
    wdith: {
      type: String,
      default: "300px",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "150px",
    },
    /**
     * 上传地址
     */
    action: {
      type: String,
      default: "http://192.168.2.21:7001/upload",
    },
    /**
     * 是否上传
     */
    isUpload: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      imgUrl1: null,
      imgUrl2: null,
      cAction: "",
      cWidth: "",
      cHeight: "",
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    action(value) {
      this.cAction = value;
    },
    isUpload(value) {
      if (value && this.imgUrl1 != null && this.imgUrl2 != null) {
        this.uploadFile(this.imgUrl1, this.imgUrl2);
      } else {
        uni.showToast({
          icon: "none",
          title: "请正确上传身份证",
          duration: 2000,
        });
      }
    },
  },

  mounted() {
    this.cAction = this.action;
    this.cWidth = this.getCssUnit(this.wdith);
    this.cHeight = this.getCssUnit(this.height);
  },
  methods: {
    //头像上传
    uploadImg(value) {
      uni.chooseImage({
        count: 1,
        success: (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          if (value == 1) {
            this.imgUrl1 = tempFilePaths[0];
          } else {
            this.imgUrl2 = tempFilePaths[0];
          }
        },
        fail: (err) => {
          console.log("图片获取失败", err);
          uni.showToast({
            icon: "none",
            title: "图片获取失败",
            duration: 2000,
          });
        },
      });
    },

    uploadFile(timgUrl1, imgUrl2) {
      uni.uploadFile({
        url: this.cAction,
        files: [
          {
            name: "positiveID_file",
            url: this.imgUrl1,
          },
          {
            name: "backID_file",
            url: this.imgUrl2,
          },
        ],
        name: "file",
        header: {
          "Content-Type": "multipart/form-data",
          //"X-Access-Token": uni.getStorageSync("token"),
        },
        success: (uploadFileRes) => {
          console.log("上传成功", uploadFileRes.data);
          uni.showToast({
            icon: "none",
            title: "上传成功",
            duration: 2000,
          });
        },
        fail: (err) => {
          console.log("上传失败", err);
          uni.showToast({
            icon: "none",
            title: "上传失败",
            duration: 2000,
          });
        },
      });
    },

    //单位转换
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style lang="less">
.uploadBox {
  padding: 0rpx 0rpx 40rpx;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  min-width: 200px;
  .leftBtn {
    width: 60%;
    height: 65rpx;
    margin-top: 15px;
    margin-left: 20%;
    line-height: 60rpx;
    background-color: transparent;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #1890ff;
  }

  .uploadItem {
    width: 100%;
    height: 200rpx;
    background-color: #edeeee;
    border-radius: 15rpx;
    padding: 20rpx;
    position: relative;

    .imgUrl {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .imgBox {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
  .leftBtn_text {
    color: #1890ff;
  }
  .uploadImg1 {
    background-image: url("https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/LntelligentManagement/sfz-2.png");
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: 50% 50%;
  }
  .uploadImg2 {
    background-image: url("https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/LntelligentManagement/sfz-1.png");
    background-repeat: no-repeat;
    background-size: 85%;
    background-position: 50% 50%;
  }
}
</style>
