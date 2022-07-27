<template>
  <view>
    <view class="uni-padding-wrap">
      <view>
        <label class="radio">
          <radio
            :value="value"
            :checked="checked"
            :color="color"
            :disabled="disabled"
            @change="radioChange"
          />{{item}}
        </label>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmRadio",
  props: {
      /**
     * 数据
     */
    item: {
      type: String,
      default: "多选"
    },
    /**
     * 标识
     */
    value: {
      type: String,
      default: ""
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 默认是否选中
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * 颜色
     * @type Color
     */
    color: {
      type: String,
      default: "#F1F1F1"
    }
  },
  data() {
    return {};
  },
  methods: {
    radioChange() {
      this.$emit("change");
    }
  }
};
</script>