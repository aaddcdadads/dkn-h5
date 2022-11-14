<template>
  <!-- 重写 下拉选择 -->
  <view class="u-label">
    <u-icon
      class="u-label__icon"
      :style="Icon.boxStyle"
      :label-pos="Icon.textAlign"
      :label-size="Icon.textSize"
      :label-color="Icon.textColor"
      :label="Icon.text"
      :name="Icon.iconName"
      :color="Icon.iconColor"
      :size="Icon.iconSize"
      @click="onClick"
    ></u-icon>
    <scroll-view scroll-y="true" v-if="dropShow" class="select" :style="cSelectStyle">
      <view
        class="select__item"
        v-for="(item, index) in cList"
        :key="index"
        :style="getActColor(Icon.text,item.value)"
        @click="onChange(item, index)"
      >
        <text class="select__item_text">{{ item.value }}</text>
      </view>
    </scroll-view>
  </view>
</template>
    
<script>
export default {
  name: "HmDropDownSelect",
  props: {
    /**
     * 图标文字
     */
    icon: {
      type: Object,
      default: function() {
        return {
          text: "全部设备",
          textAlign: "left",
          iconName: "arrow-down",
          textColor: "#000",
          iconColor: "#000",
          textSize: "30",
          iconSize: "30",
          boxStyle: {
            width: "auto",
            text1: "无效字段,需要整行请把display删除",
            display: "inline-flex",
            padding: "24rpx",
            backgroundColor: "#ccc"
          }
        };
      }
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function() {
        return [
          {
            value: "全部设备"
          },
          {
            value: "客厅"
          },
          {
            value: "全部设备1"
          },
          {
            value: "客厅1"
          },
          {
            value: "全部设备2"
          },
          {
            value: "客厅2"
          }
        ];
      }
    },
    /**
     * 下拉样式
     */
    selectStyle: {
      type: Object,
      default: function() {
        return {
          position: "absolute",
          top: "78rpx",
          left: "0rpx",
          width: "240rpx",
          maxHeight: "288rpx",
          border: "2rpx solid #dadada",
          borderRadius: "0rpx 0rpx 16rpx 16rpx",
          color: "#000",
          background: "#fff",
          zIndex: "999",
          boxShadow: "0rpx 0rpx 24rpx 0rpx #dadada"
        };
      }
    },
    /**
     * 选中时样式
     */
    selectItemStyle: {
      type: Object,
      default: function() {
        return {
          color: "#ff6700",
          background: "#f1f2f3"
        };
      }
    }
  },
  watch: {
    icon(value) {
      this.Icon = value;
    },
    selectStyle(value) {
      this.cSelectStyle = this.$u.deepClone(value);
    },
    selectItemStyle(value) {
      this.cSelectItemStyle = this.$u.deepClone(value);
    },
    list: {
      handler: function(value, oldValue) {
        this.cList = this.mapData(value);
      },
      deep: true
    }
  },
  mounted() {
    this.Icon = this.icon;
    this.cList = this.list;
    this.cSelectStyle = this.$u.deepClone(this.selectStyle);
    this.cSelectItemStyle = this.$u.deepClone(this.selectItemStyle);
    window.addEventListener("click", () => {
      this.dropShow = false;
    });
  },
  data() {
    return {
      Icon: {},
      dropShow: false,
      cList: [],
      cSelectStyle: {},
      cSelectItemStyle: {}
    };
  },
  methods: {
    getActColor(text, val) {
      if (text == val) {
        return this.cSelectItemStyle;
      }
    },
    onClick(e) {
      this.dropShow = !this.dropShow;
      this.$emit("onClick", e);
      event.stopPropagation();
    },
    onChange(item, index) {
      this.dropShow = false;
      this.Icon.text = item.value;
      this.$emit("change", item, index);
    }
  }
};
</script>
    
<style lang="less" scope>
.u-label {
  position: relative;
  &__icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /deep/ .u-icon__label {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .select {
    box-sizing: border-box;
    &__item {
      height: 72rpx;
      padding: 0 20rpx 0 20rpx;
      display: flex;
      align-items: center;
      &_text {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>