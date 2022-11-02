<template>
  <view>
    <u-row class="search">
      <u-col span="12" class="search__input-div">
        <u-input
          class="search__input"
          placeholder="请输入内容"
          :border="false"
          shape="circle"
          v-model="keyValue"
          @change="change"
          @blur="blurSearch"
        ></u-input>
      </u-col>
    </u-row>
    <u-row class="filter">
      <scroll-view class="filter__scroll-div" :scroll-x="true">
        <view
          class="filter__icon-div"
          v-for="(filter, index) in cFilterOption"
          :key="index"
          @click="filterSelect(filter)"
        >
          <u-icon
            class="filter__icon-text"
            :label="filter.name"
            labelPos="left"
            size="22"
            name="arrow-down"
          ></u-icon>
        </view>
      </scroll-view>
      <view class="filter__button" @click="filterShow = true">
        <view class="filter__button-text">筛选</view>
        <view class="filter__button-icon-div">
          <u-icon class="filter__button-icon" name="list"></u-icon>
        </view>
      </view>
    </u-row>
  </view>
</template>
<script>
export default {
  options: { styleIsolation: "shared" }, //解决/deep/不生效
  props: {
    /**
     * 过滤项
     */
    filterOption: {
      type: Array,
      default: function() {
        return [
          {
            name: "时间",
            code: "test1",
            type: "Input",
            show: true
          },
          {
            name: "状态",
            code: "test2",
            type: "Input",
            show: true
          }
        ];
      }
    }
  },
  watch: {
    filterOption: {
      handler: function(value, oldValue) {
        this.cFilterOption = this.mapData(value);
      },
      deep: true
    }
  },
  mounted() {
    this.cFilterOption = this.filterOption;
  },
  data() {
    return {
      keyValue: "",
      cFilterOption: []
    };
  },
  methods: {
    // 搜索框change(出现提示)
    change(e) {
      console.log("change", e);
    },
    // 搜索框失焦触发搜索
    blurSearch(e) {
      console.log("blurSearch", e);
    },
    // 条件选择
    filterSelect(e) {
      console.log("filterSelect", e);
    }
  }
};
</script>
<style scoped lang="less">
.search {
  &__input {
    border: 4rpx solid #4b4c5a !important;
    border-radius: 8px;
    /deep/ .u-input__input {
      min-height: 80rpx !important;
      padding: 0rpx 12rpx;
    }
  }
  &__input-div {
    flex: 0 0 91.4% !important;
    padding: 0rpx !important;
    margin: 0 4.3% !important;
  }
}
.filter {
  margin-top: 32rpx;
  &__scroll-div {
    width: calc(91.4% - 60px);
    margin-left: 4.3%;
    /deep/ .uni-scroll-view-content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
  &__icon-div:not(:first-child) {
    margin-left: 24rpx;
  }
  &__icon-div {
    background: #f0f0f0;
    padding: 2rpx 24rpx;
    border-radius: 50px;
    /deep/ .u-icon__label {
      font-size: 28rpx;
      color: #404040;
      letter-spacing: 0;
      line-height: 48rpx;
      font-weight: 400;
    }
  }
  &__button {
    display: flex;
    justify-content: center;
    font-weight: 600;
    width: 60px;
    align-items: center;
  }
}
</style>