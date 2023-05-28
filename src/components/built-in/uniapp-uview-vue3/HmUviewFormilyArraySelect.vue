<template>
  <view class="selectInput">
    <view class="selectInput-content flex-row" :class="flexWrap ? 'content-wrap' : 'content-nowrap'">
      <text v-if="title" class="selectInput-content-title">{{ title }}</text>
      <view class="selectInput-content-select" :style="{ width: width }" @click="showClick">
        <text class="selectInput-content-select-content" v-if="stringSelect">{{ stringSelect }}</text>
        <text class="selectInput-content-select-span" v-else>请选择</text>
        <u-icon class="selectInput-content-select-icon" name="arrow-down-fill" color="#c0c4cc"></u-icon>
      </view>
    </view>
    <view class="selectInput-container" v-show="cShow" @touchmove.stop.prevent>
      <view class="mask" @tap="onCancel(true)"></view>
      <view class="select-box select-box-show">
        <view class="header">
          <text class="cancel" @tap="onCancel">{{ cancelText }}</text>
          <text class="confirm" @tap="onConfirm">{{ confirmText }}</text>
        </view>
        <view class="body-warp">
          <scroll-view class="body" scroll-y="true">
            <view v-if="!cList.length" name="tips">
              <text class="empty-tips">暂无数据~</text>
            </view>
            <view class="select-item" v-for="(item, index) in cList" :key="index" @tap.stop="onSelected(item, index)"
              :class="[item.disabled ? 'disabled' : '', item.checked ? 'selected' : '']">
              <text v-show="item.checked" class="selected-icon">✔</text>
              <view class="label">{{ item.value }}</view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { getAction } from "/@/request/http";
export default {
  props: {
    /**
     * 选中列表
     */
    modelValue: {
      type: Array,
      default: function () {
        return [7, 8]
      }
    },
    /**
     * 选项列表
     */
    list: {
      type: Array,
      default: function () {
        return [
          { label: 1, value: "张三0" },
          { label: 2, value: "张三1" },
          { label: 3, value: "张三2" },
          { label: 4, value: "张三3" },
          { label: 5, value: "张三4" },
          { label: 6, value: "张三5" },
          { label: 7, value: "张三6" },
          { label: 8, value: "张三7" },
        ]
      }
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "下拉选择数组"
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "100%"
    },
    /**
     * 标题内容换行
     */
    flexWrap: {
      type: Boolean,
      default: true
    },
    /**
     * GET URL
     */
    url: {
      type: String,
      default: "",
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
      default: function () {
        return {
        };
      },
    },
    /**
     * 远程数据映射
     */
    getDataMap: {
      type: Object,
      default: function () {
        return {
          label: "label",
          value: "value",
        };
      },
    },
  },
  data() {
    return {
      cShow: false,
      cancelText: "取消",
      confirmText: "确定",
      stringSelect: "",//选中的数组[name]转字符串
      cArraySelect: [],//选中的数组
      oldList: [],//保留取消前的数组
      cList: []
    }
  },
  watch: {
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          return;
        }
        this.getData(null, value);
      },
      deep: true,
    },
    modelValue: {
      handler: function (value, oldValue) {
        this.cArraySelect = value;
        this.getArray(this.cArraySelect, this.cList);
      },
      deep: true,
    },
    list: {
      handler: function (value, oldValue) {
        this.cList = this.mapData(value);
        this.getArray(this.cArraySelect, this.cList);

      },
      deep: true,
    },
  },
  mounted() {
    this.cArraySelect = this.modelValue;
    this.cList = this.mapData(this.list);
    this.getArray(this.cArraySelect, this.cList);
    this.getData();
  },
  methods: {
    // [a,b]
    // [{key:a},{key:b}]
    getArray(select, list) {
      if (select.constructor === Array && select.length > 0) {
        let flag = select[0].constructor === Object;//判断是否为对象数组
        for (var i = 0; i < list.length; i++) {
          for (var j = 0; j < select.length; j++) {
            if (flag) {
              if (list[i].label == select[j].label) {
                list[i].checked = true;
              }
            } else {
              if (list[i].label == select[j]) {
                list[i].checked = true;
              }
            }
          }
        }
        this.stringSelect = this.getString(list);
      } else {
        return
      }
    },
    getString(arr) {
      let newArr = [];
      let newArr1 = [];
      arr.forEach(e => {
        e.checked ? newArr.push(e.value) : null;
        e.checked ? newArr1.push(e.label) : null;
      });
      this.cArraySelect = newArr1;
      let str = newArr.join(",");
      return str;
    },
    showClick() {
      this.oldList = JSON.parse(JSON.stringify(this.cList));
      this.cShow = true;
    },
    onConfirm() {
      this.cShow = false;
      this.stringSelect = this.getString(this.cList);
      this.$emit("onConfirm", this.cList, this.cArraySelect);
    },
    onCancel(e) {
      this.cShow = false;
      this.cList = JSON.parse(JSON.stringify(this.oldList));
      this.$emit("onCancel", this.cArraySelect, e);
    },
    onSelected(item, index) {
      if (this.cList[index].disabled) return;
      item.checked = !item.checked;
      this.$emit("onSelected", item, index);
    },
    //将查询接口的数据渲染到list中
    getData(url, params) {
      let self = this;
      url = url || this.url;
      params = params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      if (!url) return;
      getAction(url, params).then((resp) => {
        //查询数据库的数组
        let data = [];
        if (resp.data) {
          data = resp.data.list;
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        if (resp.list) {
          data = resp.list;
        }
        self.cList = self.mapData(data);
        this.$emit("optionsChange", self.cList);
      });
    },
    //处理数据
    mapData(data) {
      let self = this;
      if (!this.getDataMap || Object.keys(this.getDataMap).length == 0) {
        return data;
      }
      let keys = Object.keys(this.getDataMap);
      data.forEach((item) => {
        keys.forEach((key) => {
          item[key] = item[self.getDataMap[key]];
        });
      });
      return data;
    },
  }
}
</script>
<style lang="less" scoped>
.selectInput {
  width: 100%;

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
  }

  &-content {
    width: 100%;

    &-title {
      display: flex;
      flex-shrink: 0;
    }

    &-select {
      width: auto;
      min-height: 74rpx;
      padding: 0rpx 20rpx;
      border-radius: 8rpx;
      border: 2rpx solid #dcdfe6;
      display: flex;
      align-items: center;

      &-content {
        width: 100%;
        color: #303133;
      }

      &-span {
        width: 100%;
        color: #c0c4cc;
      }

      &-icon {
        margin-left: 10rpx;
        margin-right: 0rpx;
      }
    }
  }

  .content-wrap {
    flex-wrap: wrap;

    .selectInput-content-title {
      margin-bottom: 10rpx;
    }
  }

  .content-nowrap {
    flex-wrap: nowrap;

    .selectInput-content-title {
      margin-right: 10rpx;
    }
  }

  &-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10003;

    .mask {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .4);
      transition: opacity 0.3s;
    }

    .select-box {
      position: fixed;
      top: 56%;
      bottom: 0;
      left: 0;
      right: 0;
      transform: translate3d(0px, 100%, 0px);
      background-color: #fff;
      transition: all 0.3s;
      border-radius: 20rpx 20rpx 0 0;
      display: flex;
      flex-direction: column;

      .header {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        justify-content: space-between;
        border-bottom: 2rpx solid #f8f8f8;
        line-height: 88rpx;
        font-size: 30rpx;
        padding: 0 24rpx;

        .cancel {
          color: rgba(0, 0, 0, .9);
        }

        .confirm {
          color: #1890ff;
        }
      }

      .body-warp {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 20rpx 0;
        overflow: hidden;

        .body {
          width: 100%;
          height: 100%;
          overflow-y: auto;

          .empty-tips {
            margin-top: 25%;
            text-align: center;
            font-size: 26rpx;
            color: #ccc;
          }

          .select-item {
            display: flex;
            font-size: 28rpx;
            line-height: 58rpx;
            color: #303133;
            transition: all 0.3s;
            justify-content: center;
            align-items: center;
            padding: 6rpx 68rpx;
            position: relative;

            &.selected {
              color: #1890ff;
            }

            &.disabled {
              color: #f1f2f3;
            }

            >.label {
              width: 100%;
              text-align: center;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            >.selected-icon {
              position: absolute;
              left: 52rpx;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }

    .select-box-show {
      transform: translateZ(0);
    }
  }
}
</style>