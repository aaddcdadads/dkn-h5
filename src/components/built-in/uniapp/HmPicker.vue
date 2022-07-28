<template>
  <view class="uni-padding-wrap">
    <label class="picker">
      <picker
        :value="value"
        :range="range"
        :disabled="disabled"
        @change="pickerChange"
        @cancel="pickerCancel"
      >
        {{ range[index] }}
      </picker>
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmPicker',
  props: {
    /**
     * 数组
     */
    range: {
      type: Array,
      default: function () {
        return ['中国', '美国', '巴西', '日本']
      },
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 第几个
     */
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    pickerChange(e) {
      this.index = e.detail.value
      this.$emit('change', e, this.range[this.index])
    },
    pickerCancel(){
      this.$emit('pickerCancel')
    }
  },
}
</script>
