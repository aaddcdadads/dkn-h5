<template>
  <view class="container" @click="onClick">
    <view class="content1" style="display: flex">
      <view class="left">{{ title }}</view>

      <view class="right">
        <view v-for="(item, index) in funcList" :key="index">
          <input
            class="input"
            :placeholder="item.placeholder"
            v-model:value="item.cValue"
            @input="input"
          
            :disabled="item.disabled"
          />
        </view>
      </view>
    </view>
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
          { id: "1", placeholder: "参与人真实姓名+身份证号", disabled: false },
          { id: "2", placeholder: "参与人真实姓名+身份证号", disabled: false },
        ];
      },
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "套餐A",
    },
  },
  data() {
    return {
      cValue: "",
      id: "",
    };
  },
  data() {
    return {
      
      cValue: "",
      
    };
  },
  watch: {
    value: {
      handler(value) {
        this.item.cValue = value;
      },
    },
  },
  mounted() {
    this.cValue = this.value;
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
    input(e) {
      this.$emit("input");
      console.log(e)
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
}

.left {
  width: 160rpx;
  text-align: end;
  font-size: 14px;
  color: #303133;
  margin: 10rpx 10rpx;
  padding: 24rpx;
}

.right {
  width: calc(100% - 160rpx);
}
.input {
  height: 78px;
  text-align: left;
  position: relative;
  border-bottom: 1px solid #e4e7ed;
  color: #303133;
  font-size: 28rpx;
}
</style>
