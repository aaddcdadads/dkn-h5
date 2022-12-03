<template>
  <view class="HmSimpleChatRoom">
    <view
      class="tips"
      :class="{ show: cTips.loading }"
      @tap="getHistoryMsg(cTips)"
      >{{ cTips.loadText }}</view
    >
    <view class="content" id="list-box">
      <view
        class="content_list"
        v-for="(item, index) in cList"
        :key="item.id"
        :id="'msg-' + item.sendTime"
      >
        <view
          class="content_list_item flex-row"
          :class="item.type == 1 ? 'push' : 'pull'"
        >
          <image
            :src="item.pic"
            mode="aspectFill"
            class="content_list_item__pic"
          ></image>
          <view class="content_list_item__content">{{ item.content }}</view>
        </view>
      </view>
    </view>
    <view class="sendBox">
      <view class="send flex-row">
        <view class="send_box flex-grow">
          <input
            type="text"
            class="send_box_content"
            v-model="content"
            placeholder="请输入聊天内容"
            placeholder-style="color:#DDD;"
            :cursor-spacing="6"
          />
        </view>
        <button class="send_box_send" @tap="send(content)">发送</button>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmSimpleChatRoom",
  props: {
    /**
     * 消息内容
     * @model
     */
    content: {
      type: String,
    },
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            sendTime: "",
            content: "消息1",
            type: 1,
            pic: "/static/logo.png",
          },
          {
            id: 2,
            sendTime: "",
            content: "消息1",
            type: 0,
            pic: "/static/logo.png",
          },
          {
            id: 3,
            sendTime: "",
            content: "消息1",
            type: 0,
            pic: "/static/logo.png",
          },
        ];
      },
    },
    /**
     * 获取数据提示
     */
    tips: {
      type: Object,
      default: function () {
        return {
          loaading: false,
          loadText: "正在获取消息",
        };
      },
    },
  },
  watch: {
    list: {
      handler: function (value, oldValue) {
        this.cList = value;
      },
      deep: true,
    },
    tips(value) {
      this.cTips = value;
    },
  },
  mounted() {
    this.cList = this.list;
    this.cTips = this.tips;
    this.$nextTick(() => {
      this.getHistoryMsg(this.cTips);
    });
  },
  data() {
    return {
      cTips: {},
      cList: [],
    };
  },
  methods: {
    // 获取历史消息
    getHistoryMsg(e) {
      this.$emit("getHistoryMsg", e);
    },
    // 发送信息
    send(e) {
      if (!e) {
        uni.showToast({
          title: "请输入有效的内容",
          icon: "none",
        });
        return;
      }
      this.$emit("send", e);
      console.log("send", e);
    },
  },
};
</script>
<style lang="less" scoped>
page {
  background-color: #f3f3f3;
  font-size: 28rpx;
}
.HmSimpleChatRoom {
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-grow {
    width: 0;
    flex-grow: 1;
  }
  /* 加载数据提示 */
  .tips {
    position: fixed;
    left: 0;
    top: var(--window-top);
    width: 100%;
    z-index: 9;
    color: #fff;
    font-size: 24rpx;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.15);
    height: 72rpx;
    line-height: 72rpx;
    transform: translateY(-80rpx);
    transition: transform 0.3s ease-in-out 0s;
    &.show {
      transform: translateY(0);
    }
  }
  .content {
    &_list {
      padding-bottom: 20rpx;
      &_item {
        padding: 20rpx 20rpx 0 20rpx;
        align-items: flex-start;
        align-content: flex-start;
        color: #333;
        &__pic {
          width: 92rpx;
          height: 92rpx;
          border-radius: 50%;
          border: #fff solid 1px;
        }
        &__content {
          padding: 20rpx;
          border-radius: 4px;
          max-width: 500rpx;
          word-break: break-all;
          line-height: 52rpx;
          position: relative;
        }
      }
    }
  }
  .sendBox {
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 0;
    height: auto;
    z-index: 2;
    border-top: #e5e5e5 solid 1px;
    box-sizing: content-box;
    background-color: #f3f3f3;
    .send {
      height: 100rpx;
      padding: 0 20rpx;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      &_box {
        &_content {
          background-color: #fff;
          height: 64rpx;
          padding: 0 20rpx;
          border-radius: 32rpx;
          font-size: 28rpx;
        }
        &_send {
          background-color: #42b983;
          color: #fff;
          height: 64rpx;
          margin-left: 20rpx;
          border-radius: 32rpx;
          padding: 0;
          width: 120rpx;
          line-height: 62rpx;
          &:active {
            background-color: #5fc496;
          }
        }
      }
    }
  }
  /* 收到的消息 */
  .pull {
    .content_list_item__content {
      margin-left: 32rpx;
      background-color: #fff;
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-top: 16rpx solid transparent;
        border-bottom: 16rpx solid transparent;
        border-right: 20rpx solid #fff;
        position: absolute;
        top: 30rpx;
        left: -18rpx;
      }
    }
  }
  /* 发出的消息 */
  .push {
    /* 主轴为水平方向，起点在右端。使不修改DOM结构，也能改变元素排列顺序 */
    flex-direction: row-reverse;
    .content_list_item__content {
      margin-right: 32rpx;
      background-color: #a0e959;
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-top: 16rpx solid transparent;
        border-bottom: 16rpx solid transparent;
        border-left: 20rpx solid #a0e959;
        position: absolute;
        top: 30rpx;
        right: -18rpx;
      }
    }
  }
}
</style>