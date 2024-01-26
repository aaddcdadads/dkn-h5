<template>
  <view class="input" :class="{ 'borderColor': borderColor }">
    <view class="image_box">
      <image :src="leftSrc[0]" class="image" v-show="!borderColor"></image>
      <image :src="leftSrc[1]" class="image" v-show="borderColor"></image>
    </view>
    <input placeholder="*请填写姓名/昵称" class="data_input" v-model="value" @focus="onFocus" @blur="onBlur" />
    <view v-show="showCode">
      <text @click="onCode" :class="showColor ? 'gcolor' : 'color'">{{ code }}</text>
    </view>
    <view class="image_box" v-show="showIcon">
      <image :src="rightSrc" class="image" @click="rightIcon"></image>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    /**
     * 图标
     */
    leftSrc: {
      type: Array,
      default: [
        "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang.png",
        "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang1.png",
      ]
    },
    /**
     * 值
     */
    value: {
      type: String,
      default: "1212"
    },
    /**
     * 右侧图标
     */
    rightSrc: {
      type: String,
      default: 'https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/jiantouyou.png'
    },
    /**
     * 展示图片
     */
    showCode: {
      type: Boolean,
      default: false,
    },
    /**
     * 展示右侧图标
     */
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      border: true,
      type: 'text',
      borderColor: false,
      code: "获取验证码",
      showColor: false,
    }
  },
  methods: {
    onFocus() {
      this.$emit("focus");
      this.borderColor = true;
    },
    onBlur() {
      this.$emit("blur");
      this.borderColor = false;
    },
    onCode() {
      this.$emit("onCode");
      let time = 60;
      this.showColor = true;
      this.code = `${time}秒后可重新获取`;
      var set = setInterval(() => {
        if (time > 0) {
          time--;
          this.code = `${time}秒后可重新获取`;
        } else {
          clearInterval(set);
          this.code = '重新获取验证码';
          this.showColor = false;
        }
      }, 1000);
    },
    rightIcon() {
      this.$emit("rightIcon");
    }
  }
}
</script>
<style scoped>
.input {
  display: flex;
  align-items: center;
  border: 1px solid #999999;
  height: 45px;
  border-radius: 5px;
}

.borderColor {
  border-color: #409eff;
}

.image_box {
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.color {
  color: #409eff;
}

.gcolor {
  color: #999999;
}

.image {
  height: 20px;
  width: 20px;
  margin: 0 8px;
}

.data_input {
  flex: 1;
}</style>