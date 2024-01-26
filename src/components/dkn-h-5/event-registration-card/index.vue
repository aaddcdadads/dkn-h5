<template>
  <view v-for="item in list" class="goods">
    <view class="change">
      <checkbox :checked="item.checked" @click="onChecked" />
    </view>
    <view class="image"> 
       <image :src="item.image" class="image"></image>
    </view>
     
    <view class="texts">
      <text class="name">{{ item.name }}</text>
      <text class="description">说明:{{ item.description }}</text>
      <text class="price">报名费：{{ item.price }}元</text>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    /**
     * 奖品数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            checked: false,
            image: "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png",
            name: "活动名称",
            description: "",
            price: "0.0",
          },
        ]
      }
    }
  },
  methods: {
    onChecked() {

    }
  }

}
</script>

<style scoped>
.image {
  width: 120px;
  height: 90px;
}

.texts {
  display: flex;
  flex-direction: column;
  /* width: 200px */
  flex: 1;
  height: 100%;
  margin-left: 8px;
  margin-top: 6px;
}

.name,
.description,
.price {
  font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC', sans-serif;
}
.name {
  font-weight: 650;
  font-style: normal;
  text-align: left;
  line-height: 24px;
  margin-top: 3px;
}

.description {
  margin-top: 3px;
  height: 50px;
  width: 100%;
  text-overflow: ellipsis; 
  overflow: hidden;
  display: -webkit-box;
	-webkit-box-orient: vertical; 
	-webkit-line-clamp: 3; 
}
.description,
.price {
  font-size: 12px;
  font-weight: 400;
  color: #999999;
}

.goods {
  display: flex;
  align-items: center;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  height: 108px;
  background-color: #ffffff;
  margin: 20px;
  padding-right: 5px;
}

.change {
  margin-right: 10px;
  margin-left: 10px;
}</style>