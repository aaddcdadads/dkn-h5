<template>
  <view class="hm-friends-requests-card" @click="onClick(cOptions)">
    <view class="box">
      <view class="hd">
        <text class="friendRequest">{{ cOptions.friendRequest }}</text>
        <image class="titleClass" :src="cOptions.titleClass" />
      </view>
      <view class="bd">
        <view class="group">
          <view class="container">
            <image class="userpng" :src="cOptions.userpng" />
            <view class="outer">
              <text class="name">{{ cOptions.name }}</text>
              <text class="address1">{{ cOptions.address1 }}</text>
            </view>
          </view>
          <view class="blockTwo">
            <image class="userImage" :src="cOptions.userImage" />
            <view class="block">
              <view class="wrap">
                <text class="name2">{{ cOptions.name2 }}</text>
              </view>
              <text class="address2">{{ cOptions.address2 }}</text>
            </view>
          </view>
        </view>
        <view class="list">
          <view class="row1">
            <image class="erroimg" :src="cOptions.erroimg" />
          </view>
          <view class="row2">
            <image class="erroimg" :src="cOptions.erroimg" />
          </view>
        </view>
        <view class="listTwo">
          <view class="addClass">
            <image class="addimg" :src="cOptions.addimg" />
          </view>
          <view class="rowClass">
            <image class="addimg" :src="cOptions.addimg" />
          </view>
        </view>
      </view>
      <view class="threeClass">
        <view class="blockThree">
          <image class="avator" :src="cOptions.avator" />
          <view class="containerTwo">
            <view class="groupTwo">
              <text class="name3">{{ cOptions.name3 }}</text>
            </view>
            <text class="address3">{{ cOptions.address3 }}</text>
          </view>
        </view>
        <view class="groupThree">
          <view class="erroClass">
            <image class="erroimg" :src="cOptions.erroimg" />
          </view>
          <view class="tianjiaWrap">
            <image class="addimg" :src="cOptions.addimg" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmFriendsRequestsCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          friendRequest: "好友请求",
          titleClass:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
          userpng:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          name: "张三",
          address1: "北京",
          userImage:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          name2: "王五",
          address2: "上海",
          erroimg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24029_0_2.png",
          addimg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24029_0_1.png",
          avator:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          name3: "艾山",
          address3: "广州",
        };
      },
    },
  },
  data() {
    return {
      cOptions: {},
    };
  },
  watch: {
    options: {
      handler: function (value, oldValue) {
        this.cOptions = JSON.parse(JSON.stringify(value));
      },
      deep: true,
    },
  },
  mounted() {
    this.cOptions = JSON.parse(JSON.stringify(this.options));
  },
  methods: {
    onClick(e) {
      this.$emit("onClick", e);
    },
  },
};
</script>
<style>
.hm-friends-requests-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 709.09rpx;
}

.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 631.17rpx;
}

.hd {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 62.34rpx;
  padding-left: 58.44rpx;
  width: 720.78rpx;
}

.friendRequest {
  opacity: 1;
  width: 124.68rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 31.17rpx;
  font-weight: 400;
}

.titleClass {
  margin-top: 19.48rpx;
  width: 35.06rpx;
  height: 7.79rpx;
}

.bd {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 58.44rpx;
  padding-right: 52.6rpx;
  padding-left: 52.6rpx;
  height: 262.99rpx;
}

.group {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 321.43rpx;
  height: 262.99rpx;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 116.88rpx;
}

.userpng {
  margin-left: 5.84rpx;
  border-radius: 58.44rpx;
  width: 116.88rpx;
  height: 116.88rpx;
  overflow: hidden;
}

.outer {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 29.22rpx;
  height: 116.88rpx;
}

.name {
  opacity: 1;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.address1 {
  opacity: 1;
  margin-top: 1.95rpx;
  line-height: 40.91rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 27.27rpx;
  font-weight: 400;
}

.blockTwo {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 29.22rpx;
  height: 116.88rpx;
}

.userImage {
  margin-left: 5.84rpx;
  border-radius: 58.44rpx;
  width: 116.88rpx;
  height: 116.88rpx;
  overflow: hidden;
}

.block {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 29.22rpx;
  height: 116.88rpx;
}

.wrap {
  display: flex;
  flex-direction: row;
}

.name2 {
  opacity: 1;
  width: 62.34rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.address2 {
  opacity: 1;
  margin-top: 1.95rpx;
  max-width: 146.1rpx;
  height: 40.91rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 40.91rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 27.27rpx;
  font-weight: 400;
}

.list {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: 116.88rpx;
  width: 87.66rpx;
  height: 262.99rpx;
}

.row1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 38.96rpx;
  background-color: #fec4b0;
  width: 77.92rpx;
  height: 77.92rpx;
}

.erroimg {
  width: 44.81rpx;
  height: 44.81rpx;
}

.row2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 68.18rpx;
  border-radius: 38.96rpx;
  background-color: #fec4b0;
  width: 77.92rpx;
  height: 77.92rpx;
}

.erroimg {
  width: 44.81rpx;
  height: 44.81rpx;
}

.listTwo {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 87.66rpx;
  height: 262.99rpx;
}

.addClass {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 38.96rpx;
  background-color: #d9f2ec;
  width: 77.92rpx;
  height: 77.92rpx;
}

.addimg {
  width: 31.17rpx;
  height: 31.17rpx;
}

.rowClass {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 68.18rpx;
  border-radius: 38.96rpx;
  background-color: #d9f2ec;
  width: 77.92rpx;
  height: 77.92rpx;
}

.addimg {
  width: 31.17rpx;
  height: 31.17rpx;
}

.threeClass {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 29.22rpx;
  padding-right: 56.49rpx;
  padding-left: 58.44rpx;
  width: 720.78rpx;
}

.blockThree {
  display: flex;
  flex-direction: row;
}

.avator {
  border-radius: 58.44rpx;
  width: 116.88rpx;
  height: 116.88rpx;
  overflow: hidden;
}

.containerTwo {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 29.22rpx;
  height: 116.88rpx;
}

.groupTwo {
  display: flex;
  flex-direction: row;
}

.name3 {
  opacity: 1;
  width: 93.51rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.address3 {
  opacity: 1;
  margin-top: 1.95rpx;
  width: 245.45rpx;
  height: 40.91rpx;
  line-height: 40.91rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 27.27rpx;
  font-weight: 400;
}

.groupThree {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 116.88rpx;
  width: 173.3rpx;
}

.erroClass {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 38.96rpx;
  background-color: #fec4b0;
  width: 77.92rpx;
  height: 77.92rpx;
}

.erroimg {
  width: 44.81rpx;
  height: 44.81rpx;
}

.tianjiaWrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 9.74rpx;
  border-radius: 38.96rpx;
  background-color: #d9f2ec;
  width: 77.92rpx;
  height: 77.92rpx;
}

.addimg {
  width: 31.17rpx;
  height: 31.17rpx;
}
</style>
