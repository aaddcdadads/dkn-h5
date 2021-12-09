<template>
  <view class="field-class">
    <u-field
      v-model:value="cValue"
      :label="label"
      :placeholder="placeholder"
      :icon="icon"
      :right-icon="rightIcon"
      :type="type"
      @input="onInput"
    ></u-field>
  </view>
</template>

<script>
// import uField from "uview-ui/components/u-field/u-field";

export default {
  components: {},
  name: "HmUviewField",
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
    label: {
      type: String,
      default: "输入：",
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请输入",
    },
    /**
     * 前缀图标
     * @type Icon
     */
    icon: {
      type: String,
      default: "man",
    },
    /**
     * 后缀图标
     * @type Icon
     */
    rightIcon: {
      type: String,
      default: "man",
    },
    /**
     * 类型
     * @type Enum
     * @options ["text","textarea"]
     */
    type: {
      type: String,
      default: "text",
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
  mounted() {
    // this.cValue = this.value;
  },
  methods: {
    onInput: function (e) {
      console.log("input: ", e);

      this.$emit("update:value", this.cValue);
      this.$emit("onInput", e);
    },
  },
};
</script>

<style>
.field-class {
}
</style>
