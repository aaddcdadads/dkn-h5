<template>
  <view :class="borderColor ? 'borderColor' : 'inputBox'" @click.prevent="onClick">
    <view class="image_box1">
      <image class="imageleft" :src="leftSrc[0]" v-show="!borderColor" />
      <image class="imageleft" :src="leftSrc[1]" v-show="borderColor" />
    </view>
    <input :placeholder="placeholder" class="data_input" v-model:value="cValue" @focus="focus" @input="input" @blur="borderColor = false" :disabled="disabled" :class="{'data_inputs':disabled}"/>
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
     * 是否禁用
     */
    disabled:{
      type:Boolean,
      default:false
    },
    /**
     * 左侧图标
     */
    leftSrc: {
      type: Array,
      default: function () {
        return [
          "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang.png",
          'https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang(1).png'
        ]
      }
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
    placeholder: {
      type: String,
      default: "* 请填写姓名/昵称",
    },
    /**
     * 获取状态
     */
     showStatus: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      border: true,
      type: 'text',
      code: "获取验证码",
      showColor: false,
      borderColor: false,
      cValue: "",
      set:""
    }
  },
  watch: {
    value: {
      handler(value) {
        this.cValue = value;
        if (this.disabled && this.showIcon) {
          this.borderColor = false;
        }
      },
       deep: true,
       immediate: true,
    },
  },
  mounted(){
    this.cValue = this.value;
    if(this.disabled && this.cValue !==""){
      this.borderColor = false;
    }
  },
  methods: {
    onCode() {
      this.$emit("onCode");
      let time = 60;
      this.showColor = true;
      this.code = `${time}秒后可重新获取`;
      this.set = setInterval(() => {
        if (time > 0) {
          time--;
          this.code = `${time}秒后可重新获取`;
        } else {
          clearInterval(this.set);
          this.code = '重新获取验证码';
          this.showColor = false;
        }
      }, 1000);
    },
    reset() {
      this.code = '获取验证码';
      this.showColor = false;
      clearInterval(this.set);

    },
    rightIcon() {
      this.$emit("rightIcon");
    },
    input(e) {
      this.$emit("update:value", this.cValue);
      this.$emit("input");
    },
    onClick(){
        this.$emit("onClick");
        this.borderColor = true;
      this.$nextTick(()=>{
           if (this.disabled && this.rightIcon && this.value) {
              this.borderColor = false;
             }
          })
    },
    focus(){
      return this.borderColor ?  this.borderColor = true :  this.borderColor = false
    },
    handleClickOutside(event) {
      // 检查点击是否在div外
      const isClickInsideElement = this.$el.contains(event.target);
         if(!isClickInsideElement){
          this.borderColor = false;
         }
    },
  },
  created() {
    // 监听外部点击事件
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    // 移除监听器
    document.removeEventListener('click', this.handleClickOutside);
  },

}
</script>
<style scoped>
.inputBox,
.borderColor {
  width: 100%;
  display: flex;
  align-items: center;
  height: 45px;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px 5px;
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
  font-size: 13px;
 
}
.data_inputs{
  pointer-events: none;
}

.imageleft {
  width: 25px;
  height: 25px;
}

.image_box1 {
  height: 100%;
  display: flex;
  justify-content: center;
  /* margin-top: 5px; */
  width: 40px;
}

.inputBox {
  border: 1px solid #CFCFCF;
}

.borderColor {
  border: 1px solid #F32878;
}</style>