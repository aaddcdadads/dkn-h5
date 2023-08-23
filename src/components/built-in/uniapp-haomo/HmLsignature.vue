<template>
  <view class="lsignature">
    <view class="lsignature-contain">
      <l-signature ref="signatureRef" :penSize="penSize" :minLineWidth="minLineWidth" :maxLineWidth="maxLineWidth"
        :penColor="penColor" :backgroundColor="backgroundColor" :type="type" :openSmooth="openSmooth"
        :beforeDelay="beforeDelay" :maxHistoryLength="maxHistoryLength" :landscape="landscape"
        :disableScroll="disableScroll" :boundingBox="boundingBox">
      </l-signature>
    </view>
    <view class="lsignature-control">
      <button class="control_btn" v-for="(item, index) in cControlBtnList" :key="index" 
      :type="item.type || 'default'"
      :disabled="item.disabled"
      @click="onClick(item.code)">{{ item.text }}</button>
    </view>
  </view>
</template>
<script>
import LSignature from "/@/uni_modules/lime-signature/components/l-signature/l-signature.vue";
export default {
  components: { LSignature },
  props: {
    /**
     * 画笔大小
     */
    penSize: { type: Number, default: 2 },
    /**
     * 线条最小宽
     */
    minLineWidth: { type: Number, default: 2 },
    /**
     * 线条最大宽
     */
    maxLineWidth: { type: Number, default: 6 },
    /**
     * 画笔颜色
     * @type Color
     */
    penColor: { type: String, default: "#000" },
    /**
     * 背景颜色
     * @type Color
     */
    backgroundColor: { type: String, default: "" },
    /**
     * 指定 canvas 类型
     */
    type: { type: String, default: "2d" },
    /**
     * 是否模拟压感
     */
    openSmooth: { type: Boolean, default: false },
    /**
     * 延时初始化
     */
    beforeDelay: { type: Number, default: 0 },
    /**
     * 最大可撤销数
     */
    maxHistoryLength: { type: Number, default: 20 },
    /**
     * 横屏
     */
    landscape: { type: Boolean, default: false },
    /**
     * 禁止屏幕滚动
     */
    disableScroll: { type: Boolean, default: true },
    /**
     * 生成内容区域
     */
    boundingBox: { type: Boolean, default: false },
    /**
     * 操作按钮列表
     */
    controlBtnList: {
      type: Array,
      default: function () {
        return [
          {
            text: "清空",
            code: "clear"
          },
          {
            text: "撤消",
            code: "undo"
          },
          {
            text: "保存",
            code: "save",
            type: "primary"
          }
        ]
      }
    }
  },
  watch: {
    controlBtnList: {
      handler: function (value, oldValue) {
        this.cControlBtnList = value;
      },
      deep: true,
    }
  },
  mounted() {
    this.cControlBtnList = this.controlBtnList;
  },
  data() {
    return {
      cControlBtnList: [],
    }
  },
  methods: {
    onClick(type) {
      if (type == 'save') {
        let self = this;
        self.$refs.signatureRef.canvasToTempFilePath({
          success: (res) => {
            // 是否为空画板 无签名
            if (res.isEmpty) {
              showToast('无内容', 'error');
              return;
            }
            // #ifndef H5
            // res.tempFilePath 临时文件路径
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function (result) {
                showToast('保存成功', 'success');
                self.saveImage('success');
              },
              fail: function () {
                showToast('保存失败', 'error');
                self.saveImage('error');
              },
            });
            // #endif
            // #ifdef H5
            self.saveImage(res.tempFilePath);
            // #endif
          }
        });
        return;
      }
      if (this.$refs.signatureRef) { this.$refs.signatureRef[type](); }
      function showToast(text, state) {
        uni.showToast({
          title: text,
          icon: state,
          duration: 2000,
          position: 'center'
        });
      }
    },
    saveImage(e) {
      this.$emit("saveImage", e);
      console.log("save",e);
    }
  }
}
</script>
<style lang="less" scoped>
.lsignature {
  width: 100%;
  height: 300px;
  border: #dcdcdc 1px solid;
  position: relative;
}

.lsignature-contain {
  width: 100%;
  height: 100%;
}

.lsignature-control {
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;

  .control_btn {
    margin: 12rpx 12rpx;
    font-size: 28rpx;
  }
}
</style>