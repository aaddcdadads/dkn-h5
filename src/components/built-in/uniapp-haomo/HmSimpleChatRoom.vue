<template>
  <view class="HmSimpleChatRoom">
    <scroll-view :style="{ height: `${windowHeight - inputHeight}rpx` }" id="scrollview" scroll-y="true"
      :scroll-top="scrollTop" class="scroll-view">
      <view class="tips" :class="{ show: cTips.loading }" @tap="getHistoryMsg(cTips)">{{ cTips.loadText }}</view>
      <view class="content" id="list-box">
        <view class="content_list" v-for="(item, index) in cList" :key="index" :id="'msg-' + item.sendTime">
          <view class="content_list_item flex-row" :class="item.type == 2 ? 'push' : 'pull'">
            <image
              src="http://shiebi01.oss-cn-shenzhen.aliyuncs.com/upload/20230403/%E5%A4%B4%E5%83%8F-%E7%94%B7%E8%80%81%E5%B8%88_1680508073900.png?Expires=4802572073&OSSAccessKeyId=LTAI5tNvM6MahpXq4UcFt2LB&Signature=ofMIe9thB1BY9fCXVUiCaJkrvkU%3D"
              mode="aspectFill" class="content_list_item__pic"></image>
            <view class="content_list_item__content">{{ item.content }}</view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="sendBox" :style="{ height: `${inputHeight}rpx` }">
      <view id="send" class="send flex-row" :style="{ bottom: `${keyboardHeight}rpx` }">
        <view class="send_box flex-grow">
          <textarea v-model="cContent" maxlength="300" confirm-type="send" @confirm="handleSend" :show-confirm-bar="false"
            :adjust-position="false" @linechange="sendHeight" @focus="focus" @blur="blur" auto-height></textarea>
        </view>
        <button class="send_box_send" @tap="send(cContent)">发送</button>
      </view>
    </view>
  </view>
</template>
<script>
import { getAction, postAction } from "/@/request/http";
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
     * 请求方法
     * @type Enum
     * @options ["get", "post"]
     */
     httpMethod: {
      type: String,
      default: "get"
    },
    /**
     * GET URL
     */
    url: {
      type: String,
      default: "/api/web/viewLeaveMessage/list",
    },
    /**
     *  发送消息URL
     */
    sendUrl: {
      type: String,
      default: "/api/web/leaveMessage/add",
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
      default: function() {
        return {
          studentId: "3000000000788480788",
          parentId: "1671178905753",
          pageNo:1,
          pageSize:-1,
          order: "asc",
          column: "createTime"
        };
      },
    },
    /**
     * 远程数据映射
     */
    getDataMap: {
      type: Object,
      default: function() {
        return {
          id: "id",
          sendTime: "createTime",
          content: "content",
          type: "sendRole",
          pic: "pic"
        };
      },
    },
    /**
     * 是否轮询
     */
    isPolling: {
      type: Boolean,
      default: false,
    },

    /**
     * 轮询间隔
     * @module
     */
    PollingInterval: {
      type: Number,
      default: 1000,
    },

    /**
     * 获取数据提示
     */
    tips: {
      type: Object,
      default: function () {
        return {
          loading: false,
          loadText: "正在获取消息",
        };
      },
    },
  },
  watch: {
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function(value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          return;
        }
        this.getData(null, value);
      },
      deep: true,
    },
    list: {
      handler: function (value, oldValue) {
        this.cList = this.mapData(value);
      },
      deep: true,
    },
    tips(value) {
      this.cTips = value;
    },
    content(value) {
      this.cContent = value;
    }
  },
  mounted() {
    this.cList = this.mapData(this.list);
    this.cTips = this.tips;
    this.cContent = this.content;
    this.getData();
    this.polling();
    this.$nextTick(() => {
      this.getHistoryMsg(this.cTips);
    });
    this.scrollToBottom();
  },
  data() {
    return {
      cTips: {},
      cList: [],
      cContent: "",
      timer: null,
      //键盘高度
      keyboardHeight: 0,
      //底部消息发送高度
      bottomHeight: 0,
      //滚动距离
      scrollTop: 0,
    };
  },
  updated() {
    //页面更新时调用聊天消息定位到最底部
    this.scrollToBottom();
  },
  onLoad() {
    uni.onKeyboardHeightChange(res => {
      this.keyboardHeight = this.rpxTopx(res.height - 30)
      if (this.keyboardHeight < 0) this.keyboardHeight = 0;
    })
  },
  onUnload() {
    uni.offKeyboardHeightChange()
  },
  computed: {
    windowHeight() {
      return this.rpxTopx(uni.getSystemInfoSync().windowHeight)
    },
    // 键盘弹起来的高度+发送框高度
    inputHeight() {
        let query = uni.createSelectorQuery().in(this);
        query.select('#send').boundingClientRect()
        query.exec(res => {
          this.bottomHeight = this.rpxTopx(res[0].height)
        });
        return this.bottomHeight + this.keyboardHeight;
    }
  },
  methods: {
    // 获取历史消息
    getHistoryMsg(e) {
      // console.log("获取历史消息");

      this.$emit("getHistoryMsg", e);
    },
    //轮询刷新数据
    polling() {
      if (this.isPolling) {
        let self = this;
        this.timer = setInterval(function () {
          self.getData();
        }, self.PollingInterval);
      }
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
      if(!this.params.studentId || !this.params.parentId){
        uni.showToast({
          title: "请配置老师和学生id",
          icon: "none",
        });
        return
      }
      let sendObj = {
        studentId: this.params.studentId,
        parentId: this.params.parentId,
        sendRole: "1",
        delFlag: "0",
        content: e,
        readStatus: "0"
      }      
      //调用发送接口
      this.setData(sendObj);
      this.cContent = "" ;
      this.$emit("send", e);
      this.$emit("update:content",this.cContent);
      console.log("send", e);
    },
    //将查询接口的数据渲染到list中
    getData(url, params) {
      let self = this;
      url = url || this.url;
      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      if (!url) return;
      let request = getAction;
      if (this.httpMethod && this.httpMethod.toLowerCase() == 'post') {
        request = postAction;
      }
      request(url, params).then((resp) => {
        // console.log("res", resp);
        //查询数据库的数组
        self.cList = [];
        let data = [];
        if (resp.data) {
          data = resp.data.list || resp.data;
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        self.cList = self.mapData(data);
        // console.log("cList", self.cList);
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
    //发送数据
    setData(params) {
      postAction(this.sendUrl, params).then((res) => {
        //查询数据库的数组
        if(res.success){
          //成功后刷新
          this.getData();
          this.scrollToBottom();
        }else{
          uni.showToast({
            title: "发送失败",
            icon: "error",
          });
        }
      });
    },
    focus() { this.scrollToBottom(); },
    blur() { this.scrollToBottom(); },
    // px转换成rpx
    rpxTopx(px) {
      let deviceWidth = wx.getSystemInfoSync().windowWidth
      let rpx = (750 / deviceWidth) * Number(px)
      return Math.floor(rpx)
    },
    // 监视聊天发送栏高度
    sendHeight() {
      setTimeout(() => {
        let query = uni.createSelectorQuery().in(this);
        query.select('#send').boundingClientRect()
        query.exec(res => {
          this.bottomHeight = this.rpxTopx(res[0].height)
        })
      }, 10)
    },
    // 滚动至聊天底部
    scrollToBottom(e) {
      setTimeout(() => {
        let query = uni.createSelectorQuery().in(this);
        query.select('#scrollview').boundingClientRect();
        query.select('#list-box').boundingClientRect();
        query.exec((res) => {
          if (res[1].height > res[0].height) {
            this.scrollTop = this.rpxTopx(res[1].height - res[0].height)
          }
        })
      }, 15)
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="less" scoped>
view,
button,
text,
input,
textarea {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
    flex-grow: 1;
  }
  width: 100%;
  height: 100%;
  .scroll-view {
    ::-webkit-scrollbar {
      display: none;
      width: 0 !important;
      height: 0 !important;
      -webkit-appearance: none;
      background: transparent;
      color: transparent;
    }
    background-color: #F6F6F6;
    // 待优化，先隐藏
    .tip{
      display: none;
    }
    .content {
      width:100%;
      padding-top: 23rpx;

      &_list {
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
  }

  /* 底部聊天发送栏 */
  .sendBox {
    width: 100%;
    background: #F4F5F7;
    transition: all 0.1s ease;

    .send {
      display: flex;
      align-items: flex-end;
      padding: 16rpx 30rpx;
      width: 100%;
      min-height: 177rpx;
      position: fixed;
      bottom: 0;
      background: #EDEDED;
      transition: all 0.1s ease;

      &_box {
        padding-bottom: 70rpx;

        textarea {
          width: 537rpx;
          min-height: 75rpx;
          max-height: 500rpx;
          background: #FFFFFF;
          border-radius: 8rpx;
          font-size: 32rpx;
          font-family: PingFang SC;
          color: #333333;
          line-height: 43rpx;
          padding: 5rpx 8rpx;
        }
      }

      &_box_send {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 70rpx;
        margin-left: 25rpx;
        width: 128rpx;
        height: 75rpx;
        background: #42b983;
        border-radius: 8rpx;
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 28rpx;
      }
    }
  }

  //自己发的消息
  .push {
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

  //其他人发的消息
  .pull {
    flex-direction: row;

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
}
</style>