<template>
  <view class="input" style="padding: 5px 5px 5px 8px;">
    <input :placeholder="placeholder" class="data_input" v-model:value="cValue" @input="input"/>
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
     * 值
     */
    value: {
      type: String,
      default: ""
    },
    /**
     * 右侧图标
     */
    rightSrc: {
      type: String,
      default: 'https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/jiantouyou.png'
    },
    /**
     * 显示获取验证码
     */
    showCode: {
      type: Boolean,
      default: true,
    },
    /**
     * 展示右侧图标
     */
    showIcon: {
      type: Boolean,
      default: false,
    },
    /**
     * 输入框提示
     */
     placeholder:{
      type:String,
      default:"姓名/昵称",
     },
  },
  data() {
    return {
      border: true,
      type: 'text',
      cValue: "",
      code: "获取验证码",
      showColor: false,
    }
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
  },
  methods: {
    onCode() {
      this.$emit("onCode");
      if (!this.cValue) {
        return
      }
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
    },
    input(e) {
      this.$emit("update:value", this.cValue);
      this.$emit("input");
    }
  }
}
</script>
<style scoped>
.input {
  width: 100%;
  display: flex;
  align-items: center;
  height: 45px;
  background-color: #fff;
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
  margin-right: 10px;
}

.gcolor {
  color: #999999;
  margin-right: 10px;
}

.image {
  height: 20px;
  width: 20px;
  margin: 0 8px;
}

.data_input {
  flex: 1;
}
</style>