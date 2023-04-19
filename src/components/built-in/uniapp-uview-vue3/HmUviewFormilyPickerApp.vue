<template>
  <view style="width: 100%;">
    <uni-datetime-picker :type="mode" :modelValue="modelValue" :border="border" :disabled="disabled" :start="startTime"
      :end="endTime" @change="onChange">
    </uni-datetime-picker>
  </view>
</template>
<script>
import {
  getAction,
} from "/@/request/http";
import moment from 'moment';
export default {
  props: {
    modelValue: {
      type: String,
    },
    /**
     * 边框
     */
    border: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 类型
     * @type Enum
     * @default datetime
     * @options ["datetime", "date"]
     */
    mode: {
      type: String,
    },
    /**
     * 开始时间
     */
    startTime: {
      type: [String, Number]
    },
    /**
     * 结束时间
     */
    endTime: {
      type: [String, Number]
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onChange(e) {
      this.$emit("onChange", e)
      this.$emit("update:modelValue",e);
    }
  }
}
</script>