<template>
  <view>
    <view :style="style1">121212</view>
    <hm-uview-sticky ref="hmUviewSticky" offset-top="20" z-index="1000" class="ele-hmUviewSticky">
      <template v-slot:stickyDiv>
        <view class="ele-wrapper ele-wrapper-hmDropDownBox">
          <hm-drop-down-box
            ref="hmDropDownBox"
            v-model:value="hmDropDownBox.value"
            :list="hmDropDownBox.list"
            :icon-size="hmDropDownBox.iconSize"
            class="ele-hmDropDownBox"
          ></hm-drop-down-box>
        </view>
      </template>
    </hm-uview-sticky>
    <view :style="style">121212</view>
  </view>
</template>
<script>
import HmUviewSticky from "/@/components/built-in/uniapp-uview-vue3/HmUviewSticky.vue";
import HmDropDownBox from "/@/components/built-in/uniapp/HmDropDownBox.vue";
export default {
  components: {
    HmUviewSticky,
    HmDropDownBox
  },
  data() {
    return {
      hmDropDownBox: {
        value: "",
        iconSize:"16px",
        list: [
          {
            id: "1",
            value: "test全部设备全部设备全部设备全部设备全部设备全部设备全部设备",
          },
          {
            id: "2",
            value: "客厅21客厅21客厅21客厅21",
          },
          {
            id: "3",
            value: "卧室",
          },
          {
            id: "4",
            value: "厨房",
          },
        ]
      },
      style1: {
        width: "auto",
        height: "240rpx",
        background: "#ff0000"
      },
      style: {
        width: "auto",
        height: "2400rpx",
        background: "#fff000"
      }
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.ele-wrapper-hmUviewSticky {
  width: 100%;
  height: 64px;
  background: #fff000;
}

.ele-wrapper-hmDropDownBox {
  width: 100%;
  background: #0cb906;
}
// 测试样式
.u-sticky-wrap {
  height: auto; //fixed === false
  background-color: cyan;
}
.u-sticky-wrap view {
  position: static; //fixed === false
  top: 0px;
  left: 0px;
  width: 320px;
  z-index: 1;//不设置index时970, 设置998在h5能够显示
}
</style>