<template>
  <view v-for="(item, index) in data" class="goods" :key="index">
    <view class="change">
      <checkbox :checked="item.checked" @click="onChecked(index)" />
    </view>
    <view class="image">
      <image :src="item.image" class="image"></image>
    </view>
    <view class="texts">
      <text class="name">{{ item.name }}</text>
      <text class="description">说明:{{ item.description }}</text>
      <view class="activity">
        <text class="price">报名费：{{ item.price }}元</text>
        <view class="numberBox">
          <view class="reduce" @click="valChange(-1, index)">
            <svg t="1706272970101" v-if="!item.number" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="5985" width="16" height="16">
              <path
                d="M779.184225 518.139837 244.815775 518.139837c-12.397355 0-22.429849-10.042727-22.429849-22.429849 0-12.387122 10.032494-22.429849 22.429849-22.429849l534.36845 0c12.397355 0 22.429849 10.042727 22.429849 22.429849C801.614074 508.09711 791.58158 518.139837 779.184225 518.139837z"
                p-id="5986" fill="#999999"></path>
            </svg>
            <svg t="1706270980680" v-if="item.number" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="5495" width="16" height="16">
              <path
                d="M779.184225 518.139837 244.815775 518.139837c-12.397355 0-22.429849-10.042727-22.429849-22.429849 0-12.387122 10.032494-22.429849 22.429849-22.429849l534.36845 0c12.397355 0 22.429849 10.042727 22.429849 22.429849C801.614074 508.09711 791.58158 518.139837 779.184225 518.139837z"
                p-id="5496" fill="#2c2c2c"></path>
            </svg>
          </view>
          <view style="width:40px;text-align: center;padding-top: 3px;">{{ item.number }}</view>
          <view class="add" @click="valChange(1, index)">
            <svg t="1706270847479" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="4223" width="16" height="16">
              <path d="M780 480H244c-17.67 0-32 14.33-32 32s14.33 32 32 32h536c17.67 0 32-14.33 32-32s-14.33-32-32-32z"
                p-id="4224" fill="#2c2c2c"></path>
              <path
                d="M512 212c-17.67 0-32 14.33-32 32v536c0 17.67 14.33 32 32 32s32-14.33 32-32V244c0-17.67-14.33-32-32-32z"
                p-id="4225" fill="#2c2c2c"></path>
            </svg>
          </view>

        </view>
      </view>

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
            description: "时代看风使舵丰富的少年疯狂是否达到减肥的步伐简单方便的",
            price: "0.0",
            number: 0
          },
          {
            checked: false,
            image: "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png",
            name: "活动名称",
            description: "",
            price: "0.0",
            number: 0
          },
        ]
      }
    }
  },
  watch: {
    list: {
      handler: function (val) {
        this.data = val;
      },
      deep: true,
      immediate:true,
    }
  },
  data() {
    return {
      data: [],
      value: 0,
    }
  },
  mounted() {
    this.data = this.list;
  },
  methods: {
    onChecked(e) {
      this.$emit("checked");
      this.data[e].checked = !this.data[e].checked;
      console.log(this.data[e])
    },
    valChange(val, e) {
      let n = this.data[e].number + val;
      this.data[e].number = n > 0 ? n : 0;
      this.$emit("change", n);
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
  height: 35px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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
  width: 100%;
  background-color: #ffffff;
  padding-right: 5px;
  margin-bottom: 8px;
}
.change {
  margin-right: 10px;
  margin-left: 10px;
  transform: scale(0.7);
}
.activity{
  display: flex;
  align-items: center;
  margin-top: 3px;
}
.numberBox {
  font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
  font-size: 13px;
  border: 1px solid #999999;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-left: 10px;
  transform: scale(0.95);
}

.reduce {
  border-right: 1px solid #999;
}

.add {
  border-left: 1px solid #999;
}

.icon {
  padding: 4px 3px 0px 3px;
}</style>