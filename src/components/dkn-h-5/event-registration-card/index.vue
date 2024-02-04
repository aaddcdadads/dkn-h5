<template>
  <view
    ref="package"
    v-for="(item, index) in data"
    class="goods"
    :class="{ borderColor: item.checked }"
    :key="index"
    @click="onClick(index)"
  >
    <view class="select" v-if="item.checked"></view>
    <svg
      t="1706857130884"
      v-if="item.checked"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="10116"
      width="15"
      height="15"
      style="position: absolute; right: 0; top: 0"
    >
      <path
        d="M380.416 822.144c-10.432 0-20.864-3.968-28.8-11.968L75.968 534.592c-15.936-15.936-15.936-41.664 0-57.6 15.872-15.872 41.664-15.872 57.536 0L380.416 723.84l510.08-510.016c15.872-15.936 41.664-15.936 57.536 0 15.936 15.936 15.936 41.664 0 57.6L409.216 810.24c-7.936 7.936-18.368 11.904-28.8 11.904z"
        p-id="10117"
        fill="#ffffff"
      ></path>
    </svg>
    <view class="image">
      <image :src="item.image" class="image"></image>
    </view>
    <view class="texts">
      <text class="name">{{ item.name }}</text>
      <text class="description">{{ item.description }}</text>
      <view class="activity">
        <text class="price">¥{{ item.price }}</text>

        <view class="numberBox" v-if="item.checked">
          <view class="reduce" @click.stop="valChange(-1, index)">
            <svg
              t="1706272970101"
              v-if="!item.number"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5985"
              width="16"
              height="16"
            >
              <path
                d="M779.184225 518.139837 244.815775 518.139837c-12.397355 0-22.429849-10.042727-22.429849-22.429849 0-12.387122 10.032494-22.429849 22.429849-22.429849l534.36845 0c12.397355 0 22.429849 10.042727 22.429849 22.429849C801.614074 508.09711 791.58158 518.139837 779.184225 518.139837z"
                p-id="5986"
                fill="#999999"
              ></path>
            </svg>
            <svg
              t="1706270980680"
              v-if="item.number"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5495"
              width="16"
              height="16"
            >
              <path
                d="M779.184225 518.139837 244.815775 518.139837c-12.397355 0-22.429849-10.042727-22.429849-22.429849 0-12.387122 10.032494-22.429849 22.429849-22.429849l534.36845 0c12.397355 0 22.429849 10.042727 22.429849 22.429849C801.614074 508.09711 791.58158 518.139837 779.184225 518.139837z"
                p-id="5496"
                fill="#2c2c2c"
              ></path>
            </svg>
          </view>
          <view class="number">{{ item.number }}</view>
          <view class="add" @click.stop="valChange(1, index)">
            <svg
              t="1706270847479"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4223"
              width="16"
              height="16"
            >
              <path
                d="M780 480H244c-17.67 0-32 14.33-32 32s14.33 32 32 32h536c17.67 0 32-14.33 32-32s-14.33-32-32-32z"
                p-id="4224"
                fill="#2c2c2c"
              ></path>
              <path
                d="M512 212c-17.67 0-32 14.33-32 32v536c0 17.67 14.33 32 32 32s32-14.33 32-32V244c0-17.67-14.33-32-32-32z"
                p-id="4225"
                fill="#2c2c2c"
              ></path>
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
            checked: true,
            image:
              "https://img.js.design/assets/img/65bc6430a6a4a8693349c559.png",
            name: "活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称活动名称",
            description:
              "时代看风使舵丰动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名富的少年疯狂是否达到减肥的步伐简单方便的",
            price: "29.9",
            number: 0,
          },
          {
            checked: false,
            image:
              "https://hm-static-img.oss-cn-beijing.aliyuncs.com/%E9%BB%98%E8%AE%A4logo.png",
            name: "活动名称",
            description:
              "动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名动名称活动名称活动名称活动名称活动名称活动名称活动名",
            price: "0.0",
            number: 0,
          },
        ];
      },
    },
  },
  watch: {
    list: {
      handler: function (val) {
        this.data = val;
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      data: [],
      value: 0,
    };
  },
  mounted() {
    this.data = this.list;
  },
  methods: {
    valChange(val, e) {
      let item =this.data[e]
      if (item.multipleOrder===1 && item.number===1 && val ==1) {
        return
      }
      let n = this.data[e].number + val;
      this.data[e].number = n > 0 ? n : 0;
      this.$emit("change", n);
    },
    onClick(e) {
      this.$emit("onClick", e);
      this.data[e].checked = !this.data[e].checked;
    },
  },
};
</script>

<style scoped>
.image {
  width: 120px;
  height: 100%;
}

.texts {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  height: 100%;
  margin-left: 8px;
  margin-top: 6px;
  padding: 5px;
}

.name {
  font-style: normal;
  text-align: left;
  line-height: 24px;
  margin-top: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  width: 100%;
}

.description {
  margin-top: 3px;
  height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
  color: rgba(153, 153, 153, 1);
}

.price {
  font-size: 18px;
  color: rgba(198, 83, 123, 1);
}

.goods,
.borderColor {
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 125px;
  width: 100%;
  padding-right: 5px;
  margin-bottom: 8px;
  background: #fafafa;
  position: relative;
  overflow: hidden;
}

.change {
  margin-right: 10px;
  margin-left: 10px;
  transform: scale(0.7);
}

.activity {
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;
}

.numberBox {
  font-family: "PingFangSC-Regular", "PingFang SC", sans-serif;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-left: 10px;
  transform: scale(0.95);
}

.reduce {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin-right: 5px;
}

.number {
  width: 40px;
  text-align: center;
  padding-top: 3px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}

.add {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin-left: 5px;
}

.icon {
  padding: 4px 3px 0px 3px;
}

.goods {
  border: 2px solid transparent;
}

.borderColor {
  border: 2px solid #c6537b;
}

.select {
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border: 18px solid;
  border-color: #c6537b #c6537b transparent transparent;
}
</style>