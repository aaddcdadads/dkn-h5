<template>
  <view class="uploadBox flex-row">
    <view class="uploadBox_contain flex-row">
      <!--图片-->
      <view class="uploadBox_contain_imageList upload-contain" v-for="(img, imgIndex) in cImageList" :key="imgIndex">
        <view class="upload-box" :style="uploadBoxStyle">
          <image class="preview-file" mode="aspectFill" :src="img" :data-src="img" @click="previewImage($event, img)">
          </image>
          <u-icon class="remove-icon" size="40" color="#ff5420" name="close-circle-fill"
            @click="delectImage(imgIndex)"></u-icon>
        </view>
      </view>
      <!--视频-->
      <view class="uploadBox_contain_videoList upload-contain" v-for="(avi, aviIndex) in cVideoList" :key="aviIndex">
        <view class="upload-box" :style="uploadBoxStyle">
          <video class="preview-file" :id="`myVideo${aviIndex}`" 
          :data-src="`myVideo${aviIndex}`" 
          :src="avi" loop muted
            controls
            :show-progress="false" 
            play-btn-position="center"
            :show-fullscreen-btn="true"
            @error="errorCallback" @play="play($event, aviIndex)" @pause="pause"
            @ended="end" @fullscreenchange="fullscreenChange"></video>
          <u-icon class="remove-icon" size="40" color="#ff5420" name="close-circle-fill"
            @click="delectVideo(aviIndex)"></u-icon>
        </view>
      </view>
      <!-- 上传plus -->
      <view class="upload-contain" v-if="VideoOfImagesShow">
        <view class="uploadBox_contain_uploadBtn flex-col center-center upload-box" :style="uploadBoxStyle"
          @click="chooseVideoImage">
          <u-icon class="uploadBox_contain_uploadIcon flex-row center-center" size="32" name="plus"></u-icon>
          <view class="uploadBox_contain_uploadBtn_text">选择{{ typeObject[type] }}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
var sourceType = [['camera'], ['album'], ['camera', 'album']];
export default {
  props: {
    modelValue: {
      type: String,
    },
    /**
     * 文件列表
     */
    fileList: {
      type: Array,
      default: function () {
        return []
      }
    },
    /**
     * 上传文件类型
     * @type Enum
     * @options ["all","image","video"]
     */
    accept: {
      type: String,
      default: "all"
    },
    /**
     * 服务器地址
     */
    action: {
      type: String,
      default: "http://shibei.dev.haomo-tech.com/api/sys/oss/file/upload?dir=trends"
    },
    /**
     * 头部信息
     */
    header: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 额外携带的参数
     */
    formData: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * 上传的文件字段名
     */
    name: {
      type: String,
      default: 'file'
    },
    /**
     * 最大上传数量
     */
    maxCount: {
      type: [String, Number],
      default: 9
    },
    /**
     * 上传盒子样式
     */
    uploadBoxStyle: {
      type: Object,
      default: function () {
        return {
          width: "200rpx",
          height: "200rpx",
          borderRadius: "10rpx"
        }
      }
    }
  },
  onUnload() {
    this.imageList = [];
    this.sourceTypeIndex = 2;
    this.sourceType = ['拍摄', '相册', '拍摄或相册'];
  },
  data() {
    return {
      type: "",
      typeObject: { all: "图片/视频", image: "图片", video: "视频", 0: "图片", 1: "视频" },
      cImageList: [],
      cVideoList: [],
      VideoOfImagesShow: true,
      sourceType: ['拍摄', '相册', '拍摄或相册'],
      sourceTypeIndex: 2,
      cameraList: [{
        value: 'back',
        name: '后置摄像头',
        checked: 'true'
      }, {
        value: 'front',
        name: '前置摄像头'
      }],
      cameraIndex: 0, //上传视频时的数量
      //上传图片和视频
      uploadFiles: [],

      oldPlayIndex: null
    }
  },
  mounted() {
    this.type = this.accept;
    this.setArray(this.fileList);
  },
  watch: {
    fileList: {
      handler: function (value, oldValue) {
        this.setArray(value);
      },
      deep: true,
    },
    modelValue(value) {
      this.getFileList()
    },
  },
  created() {
    this.getFileList()
  },
  methods: {
    getFileList() {
      if (!this.modelValue)
        return
      let arr = this.modelValue.split(",");
      this.setArray(arr);
    },
    updateModelValue(lists) {
      let modelValue = "";
      modelValue = lists.join(",")
      this.$emit("update:modelValue", modelValue);
    },
    setArray(arr) {
      if (this.accept == 'image') {
        this.cImageList = arr;
      } else if (this.accept == 'video') {
        this.cVideoList = arr;
      }
    },
    // 选择图片/视频
    chooseVideoImage(e) {
      let self = this;
      // 不能同时存在两种格式文件
      if (self.cImageList.length > 0 && self.cVideoList.length > 0) {
        uni.showToast({
          title: '不能同时存在两种格式文件',
          icon: 'none'
        })
        return;
      }
      if ('all' == self.accept) {
        uni.showActionSheet({
          title: '选择上传类型',
          itemList: ['图片', '视频'],
          success: res => {
            if (res.tapIndex == 0) {
              self.type = 0;
              self.chooseImages();
            } else {
              self.type = 1;
              self.chooseVideo();
            }
          }
        });
      } else if ('image' == self.accept || self.type == 0) {
        self.chooseImages();
      } else if ('video' == self.accept || self.type == 1) {
        self.chooseVideo();
      }
    },
    //选择图片
    chooseImages() {
      uni.chooseImage({
        count: this.maxCount || 9, //默认是9张
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], //从相册选择
        success: res => {
          let imgFile = res.tempFilePaths;
          imgFile.forEach(item => {
            this.upload(item, 0);
          })
        }
      })
    },
    //选择视频
    chooseVideo() {
      uni.chooseVideo({
        maxDuration: 60,
        count: 1,
        camera: this.cameraList[this.cameraIndex].value, //'front'、'back'，默认'back'
        sourceType: sourceType[this.sourceTypeIndex],
        success: res => {
          uni.showLoading({
            title: '上传中...'
          });
          this.upload(res.tempFilePath, 1)
        },
        fail: (error) => {
          uni.hideLoading();
          uni.showToast({
            title: error,
            icon: 'none'
          })
        }
      })
    },
    // 上传文件
    upload(file, type) {
      let self = this;
      // 默认头部信息
      let token = JSON.parse(uni.getStorageSync('pro__Access-Token') || "{}").value;
      let header = {
        'X-Access-Token': token,
        'X-Bd-Access-Token': token,
      };
      // 检查上传地址
      if (!self.action) {
        uni.showToast('请配置上传地址', true);
        return;
      }
      uni.uploadFile({
        url: self.action,
        method: "POST",
        header: { ...header, ...self.header },
        formData: self.formData,
        filePath: file,
        name: self.name,
        success: (result) => {
          uni.hideLoading();
          let res = JSON.parse(result.data)
          if (res.code == 200) {
            // 0-图片 1-视频
            if (type == 0) {
              self.cImageList = self.cImageList.concat(res.result);
              self.updateModelValue(self.cImageList)
            } else if (type == 1) {
              self.cVideoList = self.cVideoList.concat(res.result);
              self.updateModelValue(self.cVideoList)
            }
            // 数据大于最大上传数量隐藏上传按钮
            if (self.cVideoList.length >= parseInt(self.maxCount) || self.cImageList.length >= parseInt(self.maxCount)) {
              self.VideoOfImagesShow = false;
            } else {
              self.VideoOfImagesShow = true;
            }
          }
          else {
            uni.showToast({
              title: res.msg,
              icon: 'none'
            })
          }
        },
        fail: (error) => {
          uni.hideLoading();
          uni.showToast({
            title: error,
            icon: 'none'
          })
        }
      });
    },
    //预览图片
    previewImage: function (e, url) {
      // 两者其实值一样 e == url 
      uni.previewImage({
        current: url,
        urls: this.cImageList
      });
    },
    // 删除图片
    delectImage(index) {
      uni.showModal({
        title: '提示',
        content: '是否要删除该图片',
        success: res => {
          if (res.confirm) {
            this.cImageList.splice(index, 1);
            this.updateModelValue(this.cImageList)
          }
          if (this.cImageList.length >= this.maxCount) {
            this.VideoOfImagesShow = false;
          } else {
            this.VideoOfImagesShow = true;
          }
        }
      });
    },
    // 删除视频
    delectVideo(index) {
      uni.showModal({
        title: '提示',
        content: '是否要删除此视频',
        success: res => {
          if (res.confirm) {
            this.cVideoList.splice(index, 1);
            this.updateModelValue(this.cVideoList)
          }
          if (this.cVideoList.length >= this.maxCount) {
            this.VideoOfImagesShow = false;
          } else {
            this.VideoOfImagesShow = true;
          }
        }
      });
    },

    // 视频相关事件
    errorCallback() {
      this.$emit("errorCallback", e);
    },
    play(e, index) {
      let video = uni.createVideoContext(`myVideo${index}`, this);
      video.requestFullScreen();
      this.oldPlayIndex = index;
      this.$emit("play", e, index);
    },
    pause(e) {
      this.$emit("pause", e);
    },
    end(e) {
      this.$emit("end", e);
    },
    fullscreenChange(e) {
      let video = uni.createVideoContext(e.target.id, this);
      if (e.detail.fullScreen) {
      } else {
        video.pause();
      }
      this.$emit("fullscreenChange", e);
    },
  }
}
</script>
<style lang="less" scoped>
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.center-center {
  align-items: center;
  justify-content: center;
}

.uploadBox {
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  &_contain {
    width: 100%;
    height: auto;
    flex-wrap: wrap;

    .upload-contain {
      width: 33%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .upload-box {
      width: 100%;
      height: 100%;
      text-align: center;
      background: #fafafa;
      color: #000000d9;
      font-size: 28rpx;
      position: relative;
      border: 2rpx solid #e0e0e0;
      overflow: hidden;

      .preview-file {
        width: 100%;
        height: 100%;
      }

      .remove-icon {
        position: absolute;
        top: 12rpx;
        right: 12rpx;
      }
    }

    &_videoList {
      .preview-file {
        /deep/ .uni-video-cover-duration {
          // 隐藏显示时长文字，影响播放图标位置
          display: none;
        }
      }
    }

    &_uploadBtn {
      &_text {
        color: inherit;
        margin-top: 14rpx;
        line-height: 1.5;
      }
    }
  }
}
</style>