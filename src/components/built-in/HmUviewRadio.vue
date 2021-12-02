<template>
  <view class="radio-class">
    {{ title }}
    <u-radio-group
      v-model:value="cValue"
      :wrap="wrap"
      @change="radioGroupChange"
      v-for="(item, index) in list"
    >
      <p v-if="textLocation" style="margin-left: 1px; margin-right: 5px">
        {{ item.name }}
      </p>
      <u-radio
        @change="radioChange"
        :key="index"
        :name="item.name"
        :disabled="item.disabled"
        :shape="shape"
        :icon-size="iconSize"
        :active-color="activeColor"
      >
        <p v-if="!textLocation" style>{{ item.name }}</p>
      </u-radio>
    </u-radio-group>
  </view>
</template>

<script>
import uRadio from "uview-ui/components/u-radio/u-radio";
import uRadioGroup from "uview-ui/components/u-radio-group/u-radio-group";
export default {
  components: {
    uRadio,
    uRadioGroup,
  },
  name: "HmUviewRadio",
  model: {
    prop: "value",
    event: "changeValue",
  },
  props: {
    /**
     * 值
     * @v-model
     */
    value: {
      type: String,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "单选：",
    },
    /**
     * 数据内容
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            name: "apple",
            disabled: false,
          },
          {
            name: "banner",
            disabled: false,
          },
          {
            name: "orange",
            disabled: false,
          },
        ];
      },
    },
    /**
     * 排列方向
     */
    wrap: {
      type: Boolean,
      default: false,
    },
    /**
     * 文本位置
     */
    textLocation: {
      type: Boolean,
      default: false,
    },
    /**
     * 形状
     * @type Enum
     * @options ["circle","square"]
     */
    shape: {
      type: String,
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: Number,
    },
    /**
     * 选中颜色
     * @type Color
     */
    activeColor: {
      type: String,
    },
  },
  computed: {
    cValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("changeValue", val);
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    // 选中某个单选框时，由radio时触发
    radioChange(e) {
      console.log("1", e);
      this.$emit("radioChange", e);
    },
    // 选中任一radio时，由radio-group触发
    radioGroupChange(e) {
      console.log("2", e);
      this.$emit("update:value", this.cValue);
      this.$emit("radioGroupChange", e);
    },
  },
};
</script>

<style lang="less">
</style>
