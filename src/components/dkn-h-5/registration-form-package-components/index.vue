<template>
  <view
    v-for="(item, index) in funcList"
    :key="index"
    :class="{
      'inputBox':true,
      'borderColor':activeIndex == index
    }"
    @click.prevent="onClick(index)"
  >
    <view class="image_box1">
      <image class="imageleft" :src="item.leftSrc1" v-show="activeIndex != index" />
      <image class="imageleft" :src="item.leftSrc2" v-show="activeIndex == index" />
    </view>
    <input
      :placeholder="item.placeholder"
      class="data_input"
      :value="item.cValue"
      @focus="focus($event,item,index)"
      @input="input"
      @blur="blur"
      :disabled="item.disabled"
      :class="{ data_inputs: item.disabled }"
    />
  </view>
</template>
<script>
export default {
  props: {
    /**
     * 数据
     */
    funcList: {
      type: Array,
      default: function () {
        return [
          {value:"",
            leftSrc1:
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang.png",
            leftSrc2: "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang(1).png",
            disabled:false,
            placeholder:"* 请填写姓名/昵称"

          },
          {value:"",
            leftSrc1:
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang.png",
            leftSrc2: "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang(1).png",
            disabled:false,
            placeholder:"* 请填写姓名/昵称"

          },
        ];
      },
    },
  
  },
  data() {
    return {
      border: true,
      type: "text",
      showColor: false,
      activeIndex: -1,
      cValue: "",
      set: "",
    };
  },
  watch: {
    value: {
      handler(value) {
        this.cValue = value;
        if (this.disabled && this.showIcon) {
          // this.borderColor = false;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.cValue = this.value;
    if (this.disabled && this.cValue !== "") {
      // this.borderColor = false;
    }
  },
  methods: {
    blur(){
this.activeIndex = -1;
    },
    input(e) {
      this.$emit("update:value", this.cValue);
      this.$emit("input");
    },
    onClick(index) {
      this.$emit("onClick");
      this.borderColor = index;
    },
    focus(e,item,index) {
      this.activeIndex = index;
    },
    handleClickOutside(event) {
      // 检查点击是否在div外
      const isClickInsideElement = this.$el.contains(event.target);
      if (!isClickInsideElement) {
        this.borderColor = false;
      }
    },
  },
  created() {
    // 监听外部点击事件
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    // 移除监听器
    document.removeEventListener("click", this.handleClickOutside);
  },
};
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
.data_inputs {
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
  border: 1px solid #cfcfcf;
}

.borderColor {
  border: 1px solid #f32878;
}
</style>
