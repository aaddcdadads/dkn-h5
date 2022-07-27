<template>
  <view class="uni-padding-wrap">
    <label v-for="item in items" :key="item.value">
      <radio
        :value="value"
        :checked="item.checked"
        :color="color"
        :disabled="disabled"
        @change="radioChange"
      />
      {{ item.name }}
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmRadio',
  props: {
    /**
     * 数据
     */
    items: {
      type: Array,
      default: function () {
        return [
          {
            value: 'USA',
            name: '美国',
            checked: 'true',
          },
          {
            value: 'CHN',
            name: '中国',
          },
          {
            value: 'BRA',
            name: '巴西',
          },
          {
            value: 'JPN',
            name: '日本',
          },
          {
            value: 'ENG',
            name: '英国',
          },
          {
            value: 'FRA',
            name: '法国',
          },
        ]
      },
    },
    /**
     * 标识
     */
    value: {
      type: String,
      default: '',
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 默认是否选中
     */
    checked: {
      type: Boolean,
      default: false,
    },
    /**
     * 颜色
     * @type Color
     */
    color: {
      type: String,
      default: '#FFCC33',
    },
  },
  data() {
    return {}
  },
  methods: {
    radioChange() {
      this.$emit('radioChange')
    },
  },
}
</script>
