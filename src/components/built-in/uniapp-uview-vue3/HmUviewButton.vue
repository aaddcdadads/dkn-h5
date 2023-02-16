<template>
  <!-- #ifndef MP-WEIXIN -->
  <u-button
    :size="size"
    :type="type"
    :plain="plain"
    :disabled="disabled"
    :shape="shape"
    :hair-line="hairLine"
    :custom-style="customStyle"
    >{{ text }}</u-button
  >
	<!-- #endif -->
  <!-- #ifdef MP-WEIXIN -->
  <u-button
    :size="size"
    :type="type"
    :plain="plain"
    :disabled="disabled"
    :shape="shape"
    :hair-line="hairLine"
    :custom-style="customStyle"
    :open-type="openType"
    @getphonenumber="getphonenumber"
		@getuserinfo="getuserinfo"
    @error="error"
		@opensetting="opensetting"
		@launchapp="launchapp"
    @click="onClick"
    >{{ text }}</u-button
  >
	<!-- #endif -->
</template>

<script>
export default {
  name: "HmUviewButton",
  props: {
    /**
     * 大小
     * @type Enum
     * @options ["default","medium","mini"]
     */
    size: {
      type: String,
      default: "default",
    },

    /**
     * 样式
     * @type Enum
     * @options ["default","primary","success","info","warning","error"]
     */
    type: {
      type: String,
      default: "default",
    },

    /**
     * 是否镂空
     *
     */
    plain: {
      type: Boolean,
      default: false,
    },

    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * 形状
     * @type Enum
     * @default "square"
     * @options ["square","circle"]
     */
    shape: {
      type: String,
      default: "square",
    },

    /**
     * 文字
     */
    text: {
      type: String,
      default: "按钮",
    },
    /**
     * 显示边框
     */
    hairLine: {
      type: Boolean,
      default: false,
    },
    /**
     * 按钮配置
     */
    customStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 开放能力
     */
		openType: {
			type: String,
			default: ''
		},
  },
  data() {
    return {};
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
    // 下面为对接uniapp官方按钮开放能力事件回调的对接
		getphonenumber(res) {
			this.$emit('getphonenumber', res);
		},
		getuserinfo(res) {
			this.$emit('getuserinfo', res);
		},
		error(res) {
			this.$emit('error', res);
		},
		opensetting(res) {
			this.$emit('opensetting', res);
		},
		launchapp(res) {
			this.$emit('launchapp', res);
		}
  },
};
</script>

<style lang="less">
</style>
