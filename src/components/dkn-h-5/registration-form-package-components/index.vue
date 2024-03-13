<template>
  <view v-for="(item, index) in List" :key="index">
   <view style="margin-bottom: 7px;"> <text class="title">{{ item.title }}</text></view>
    <view
      v-for="(i, childIndex) in item.funcList"
      :key="childIndex"
      :class="{
        inputBox: true,
        borderColor: getOnlyIndex(index, childIndex),
      }"
      @click.prevent="onClick(index, childIndex)"
    >
      <view class="image_box1">
        <image
          class="imageleft 1"
          :src="i.leftSrc2"
          v-if="getOnlyIndex(index, childIndex)"
        />
        <image
          class="imageleft 2"
          :src="i.leftSrc1"
          v-else
        />
      </view>
      <input
        :placeholder="i.placeholder"
        class="data_input"
        :value="i.cValue"
        @focus="focus($event, i, index, childIndex)"
        @input="input"
        @blur="blur"
        :disabled="i.disabled"
        :class="{ data_inputs: i.disabled }"
      /> </view
  ></view>
</template>
<script>
export default {
  props: {
    /**
     * 数据
     */
    List: {
      type: Array,
      default: function () {
        return [
          {
            title: "套餐A-参与人1：",
            funcList: [
              {
                value: "",
                leftSrc1:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang.png",
                leftSrc2:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang(1).png",
                disabled: false,
                placeholder: "* 请填写姓名/昵称",
              },
              {
                value: "",
                leftSrc1:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang.png",
                leftSrc2:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang(1).png",
                disabled: false,
                placeholder: "* 请填写姓名/昵称",
              },
              {
                value: "",
                leftSrc1:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang.png",
                leftSrc2:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang(1).png",
                disabled: false,
                placeholder: "* 请填写姓名/昵称",
              },
              {
                value: "",
                leftSrc1:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang.png",
                leftSrc2:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang(1).png",
                disabled: false,
                placeholder: "* 请填写姓名/昵称",
              },
            ],
          },
          {
            title: "套餐A-参与人2：",
            funcList: [
              {
                value: "",
                leftSrc1:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang.png",
                leftSrc2:
                  "https://hm-static-img.oss-cn-beijing.aliyuncs.com/DecathlonSpringFestivalActivities/touxiang(1).png",
                disabled: false,
                placeholder: "* 请填写姓名/昵称",
              },
            ],
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
    getOnlyIndex(a, b) {
      let Index = a + "/" + b;
      return this.activeIndex == Index;
    },
    blur() {
      this.activeIndex = "";
    },
    input(e) {
      this.$emit("update:value", this.cValue);
      this.$emit("input");
    },
    onClick(index, childIndex) {
      this.$emit("onClick");
      this.activeIndex = index + "/" + childIndex;
      this.$forceUpdate();
    },
    focus(e, i, index, childIndex) {
      this.activeIndex = index + "/" + childIndex;
    },
    handleClickOutside(event) {
      // 检查点击是否在div外
      const isClickInsideElement = this.$el.contains(event.target);
      if (!isClickInsideElement) {
        // this.activeIndex = "";
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
  margin-bottom: 20px;
}
.title{
  font-size: 14px;
  color:#000000;
 
}
.image_box {
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-is: center;
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
