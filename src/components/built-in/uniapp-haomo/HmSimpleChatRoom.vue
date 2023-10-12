<template>
  <view class="HmSimpleChatRoom flex-column">
    <!-- #ifdef MP-WEIXIN -->
    <uni-nav-bar class="HmSimpleChatRoom_title" :shadow="cNavbarTitleOption.shadow"
      :statusBar="cNavbarTitleOption.statusBar" :left-text="cNavbarTitleOption.leftText"
      :right-text="cNavbarTitleOption.rightText" :left-icon="cNavbarTitleOption.leftIcon"
      :right-icon="cNavbarTitleOption.rightIcon" :dark="cNavbarTitleOption.dark" :color="cNavbarTitleOption.color"
      :backgroundColor="cNavbarTitleOption.backgroundColor" :title="cNavbarTitleOption.title"
      :height="cNavbarTitleOption.height" @clickLeft="navbarLeftClick" @clickRight="navbarRightClick(storageInfo)" />
    <!-- #endif -->
    <view class="HmSimpleChatRoom_content flex-column" :style="{ backgroundImage: 'url(' + theme[`bgImg`] || `` + ')' }">
      <view ref="message_box" id="message_box" class="HmSimpleChatRoom_content_messageBox"
        :style="{ top: '0px', bottom: `${keyboardHeightBox}` }">
        <scroll-view class="message_scroll" :scroll-y="true" :scroll-top="scrollTop" :style="{ height: scrollHeight }"
          @scroll="onScroll">
          <view ref="message_scroll" id="message_scroll" class="messageBox">
            <view v-for="( item, index ) in  cMessageList " :key="index" :class="{
              'messageBox_item': true,
              'messageBox_item-pull': item.type && item.type == 1,
              'messageBox_item-push': item.type && item.type == 2,
            }" @click="onClick(item)">
              <view v-if="setTime(item, index, 'sendTime', this.cMessageList)" class="messageBox_item_time">
                <text>{{ setTime(item, index, 'sendTime', this.cMessageList) }}</text>
              </view>
              <view class="messageBox_item_box" :style="{ fontFamily: theme[`fontFamily`] }">
                <image
                  src="http://shiebi01.oss-cn-shenzhen.aliyuncs.com/upload/20230403/%E5%A4%B4%E5%83%8F-%E7%94%B7%E8%80%81%E5%B8%88_1680508073900.png?Expires=4802572073&OSSAccessKeyId=LTAI5tNvM6MahpXq4UcFt2LB&Signature=ofMIe9thB1BY9fCXVUiCaJkrvkU%3D"
                  mode="aspectFill" class="messageBox_item_box__pic"></image>
                <view class="messageBox_item_box__content">{{ item.content }}</view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
      <view id="send" class="HmSimpleChatRoom_content_sendBox" :style="{ bottom: `${keyboardHeight}px` }">
        <view class="send flex-row">
          <view class="send_textarea flex-row">
              <input class="uni-input" type="text" v-model="inputText" :adjust-position="cTextareaOption.adjustPosition"
            confirm-type="done" :placeholder="cTextareaOption.placeholder"
            :disabled="cTextareaOption.disabled" @confirm="sendMessage(inputText)" @keyboardheightchange="sendHeight"
            @focus="textareaFocus" @blur="textareaBlur" />
          </view>
          <button class="send-btn" @tap="sendMessage(inputText)">发送</button>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { getAction, postAction } from "/@/request/http";
export default {
  // 属性
  props: {
    /**
     * 消息列表
     */
    messageList: {
      type: Array,
      default: function () {
        return [
          {
            id:"1212",
            sendRole:2,
            content:"123",
            createTime:"2023-10-10 12:34:23"
          },
          {
            id:"1213",
            sendRole:1,
            content:"123",
            createTime:"2023-10-10 12:35:12"
          }
        ]
      }
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
      default: "",
    },
    /**
     *  发送消息URL
     */
    sendUrl: {
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
          studentId: "3000000000788480788",
          parentId: "1671178905753",
          pageNo: 1,
          pageSize: -1,
          order: "asc",
          column: "createTime",
        }
      },
    },
    /**
     * 远程数据映射
     */
    getDataMap: {
      type: Object,
      default: function () {
        return {
          id: "id",
          sendTime: "createTime",
          content: "content",
          type: "sendRole",
          pic: "pic",
        }
      },
    },
    /**
     * 轮询配置
     */
    pollOption: {
      type: Object,
      default: function () {
        return {
          state: false,
          deplay: 1000
        }
      },
    },
    /**
     * 标题框配置
     */
    navbarTitleOption: {
      type: Object,
      default: function () {
        return {
          title: "用户名",
          statusBar: true,
          shadow: true,
          dark: true,
          color: "#000000",
          backgroundColor: "#f3f3f3",
          leftText: "",
          leftIcon: "left",
          //right-text 和 right-icon 属性不能同时存在
          rightText: "",
          rightIcon: "",
          height: "44px"
        }
      }
    },
    /**
     * 消息框配置
     */
    textareaOption: {
      type: Object,
      default: function () {
        return {
          maxlength: 300,
          confirmType: "send",
          disabled: false,
          autoHeight: false,
          adjustPosition: false,
          placeholder: "发送消息",
        }
      }
    },
    /**
     * 主题
     */
    theme: {
      type: Object,
      default: function () {
        return {
          // 
          bgImg: "http://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/xingzhan/O%CC%80%C2%B5I%CC%82n%CC%83%C2%BCo%CC%80I%CC%81%C2%BC.jpg",
          fontFamily: '',
        }
      }
    }
  },
  // 计算
  computed: {},
  // 数据
  data() {
    return {
      scrollHeight: '100%', // 高度
      scrollTop: 0, // 滚动距离
      old: {
        scrollTop: 0
      },
      cNavbarTitleOption: {}, // 导航栏标题
      cTextareaOption: {}, // 消息框配置
      inputText: "", // 发送框文字
      keyboardHeight: 0, // 键盘高度
      keyboardHeightBox: 0, //底部发送框定位
      messageBoxY: 0, // 可能是无效字段，与键盘高度有关
      cMessageList: [], // 消息列表
      storageInfo: {},// 缓存信息 -- 导航栏右图标可能会用到
      timer: null, // 轮询定时器
      pollTimer: null,// 轮询定时器[查询信息]
    }
  },
  // 监听
  watch: {
    messageList: {
      handler: function (value, oldValue) {
        this.cMessageList = this.mapData(value);
      },
      deep: true
    },
    navbarTitleOption: {
      handler: function (value, oldValue) {
        this.cNavbarTitleOption = value;
      },
      deep: true
    },
    textareaOption: {
      handler: function (value, oldValue) {
        this.cTextareaOption = value;
      },
      deep: true
    },
    keyboardHeight: {
      // 监听键盘高度变化
      handler: function (value, oldValue) {
        if (value <= 0) {
          this.messageBoxY += oldValue;
        } else {
          this.messageBoxY -= value;
        }
      },
      deep: true
    }
  },
  // 加载
  mounted() {
    this.cMessageList = this.mapData(this.messageList);
    this.cNavbarTitleOption = this.navbarTitleOption;
    this.cTextareaOption = this.textareaOption;
    this.getStorage('userInfo');
    this.getData();
    this.polling();
  },
  // 方法
  methods: {
    // px转换成rpx
    rpxTopx(px) {
      let deviceWidth = wx.getSystemInfoSync().windowWidth
      let rpx = (750 / deviceWidth) * Number(px)
      return Math.floor(rpx);
    },
    // 算出scroll的固定高度，并且滚动至底部
    async scrollToBottom() {
      let self = this;
      let newArr1 = await self.getDomInfo("#message_box");
      let newArr2 = await self.getDomInfo("#message_scroll");
     // scroll的固定高度
     self.scrollHeight = newArr1[0].height.toFixed(2) + 'px';
      let top = await newArr2[0].height - newArr1[0].height;
      // 滚动至底部
      self.scrollTop = self.old.scrollTop;
      this.$nextTick(function () {
        this.scrollTop = top
      });
    },
    // 得到dom[str:css/id]的信息 type:Array
    getDomInfo(str) {
      return new Promise((resolve) => {
        uni.createSelectorQuery()
          .in(this)
          .select(str)
          .boundingClientRect()
          .exec((result) => {
            const newArr = JSON.parse(JSON.stringify(result));
            resolve(newArr);
          });
      });
    },
    // 处理数据-数据映射
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
    // 自定义导航栏左侧按钮
    navbarLeftClick(e) {
      this.$emit("navbarLeftClick", e);
    },
    // 自定义导航栏右侧按钮(取userInfo属性信息)
    navbarRightClick(e) {
      this.$emit("navbarRightClick", e);
    },
    // 消息框 滚动事件
    onScroll(e) {
      this.$emit("onScroll", e.detail);
      this.old.scrollTop = e.detail.scrollTop;
    },
    // 监视聊天发送栏高度
    sendHeight(e) {
      this.keyboardHeight = e.detail.height || 0;
    },
    // 消息框获取焦点，弹起软键盘，顶起页面
    textareaFocus() {
      this.scrollToBottom();
    },
    // 消息框失去焦点，收起软键盘，放下页面
    textareaBlur(e) {
      this.scrollToBottom();
    },
    // 发送消息按钮
    sendMessage(e) {
      if (!e) {
        uni.showToast({
          title: "请输入有效的内容",
          icon: "none",
        });
        return;
      }
      if (!this.params.studentId || !this.params.parentId) {
        uni.showToast({
          title: "请配置老师和学生id",
          icon: "none",
        });
        return;
      }
      let sendObj = {
        studentId: this.params.studentId,
        parentId: this.params.parentId,
        sendRole: "2",
        delFlag: "0",
        content: e,
        readStatus: "0",
      };
      //调用发送接口
      this.setData(sendObj);
      this.inputText = "";
      this.$emit("send", e);
      this.$emit("update:content", this.inputText);
    },
    //轮询刷新数据
    polling() {
      let self = this;
      if (self.pollOption.state) {
        self.pollTimer = setInterval(function () {
          self.getData(null, null, 'polling');// polling 轮询接收消息不滚到底部
        }, self.pollOption.deplay);
      }
    },
    //发送数据
    setData(params) {
      postAction(this.sendUrl, params).then((res) => {
        //查询数据库的数组
        if (res.success) {
          //成功后刷新
          this.getData();
        } else {
          uni.showToast({
            title: "发送失败",
            icon: "error",
          });
        }
      });
    },
    //将查询接口的数据渲染到list中
    getData(url, params, type) {
      url = url || this.url;
      params = params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      if (!url) return;
      let request = getAction;
      if (this.httpMethod && this.httpMethod.toLowerCase() == 'post') {
        request = postAction;
      }
      let self = this;
      request(url, params).then((resp) => {
        //查询数据库的数组
        self.cMessageList = [];
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
        self.cMessageList = self.mapData(data);
        if (type != "polling") {
          self.scrollToBottom();
        }
      });
    },
    onClick(e) {
      this.$emit("itemClick", e);
    },
    // 设置时间: 
    // e-当前对象 Object
    // index-当前对象对应数组下标 Number
    // key-时间 String
    // arr-当前数组 Array
    setTime(e, index, key, arr) {
      const data = new Date();
      // 获取今天日期
      const today = data.setHours(0, 0, 0, 0);
      // 获取昨天的日期
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      yesterday.setHours(0, 0, 0, 0);
      // 获取这周的日期
      const dayOfWeek = data.getDay();
      const firstDayOfWeek = new Date(data);
      firstDayOfWeek.setDate(data.getDate() - dayOfWeek);
      const lastDayOfWeek = new Date(data);
      lastDayOfWeek.setDate(data.getDate() + (6 - dayOfWeek));
      // 当前消息的时间
      const endTime = new Date(e[key]);
      // 上一条消息时间
      let itemPre;
      if (index != 0) {
        itemPre = arr[index - 1];
        const startTime = new Date(itemPre[key]);
        const timeDifference = endTime.getTime() - startTime.getTime();
        const minutesDifference = timeDifference / 1000;//秒
        // 小于3分钟不显示时间
        if (minutesDifference < 180) return false;
      }
      // 今天de消息
      if (endTime.getTime() > today) {
        return formattedTime("time");
      }
      // 昨天de消息
      else if (endTime.getTime() >= yesterday && endTime.getTime() < today) {
        return "昨天 " + formattedTime("time");
      }
      // 这周de消息
      else if (endTime.getTime() < yesterday && endTime >= firstDayOfWeek && endTime <= lastDayOfWeek) {
        const weekDay = endTime.getDay();
        const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        return `${weekDays[weekDay]} ` + formattedTime("time");
      }
      // 之前de消息
      else {
        return formattedTime("dateTime");
      }
      function formattedTime(str) {
        let formatted;
        let year = endTime.getFullYear();
        let month = String(endTime.getMonth() + 1).padStart(2, '0');
        let day = String(endTime.getDate()).padStart(2, '0');
        let hours = String(endTime.getHours()).padStart(2, '0');
        let minutes = String(endTime.getMinutes()).padStart(2, '0');
        if (str == 'time') {
          formatted = `${hours}:${minutes}`;
        } else if (str == 'date') {
          formatted = `${year}/${month}/${day}`;
        } else if (str == 'dateTime' || str == 'datetime' || str == 'DateTime') {
          formatted = `${year}/${month}/${day} ${hours}:${minutes}`;
        } else {
          formatted = 'NULL';
        }
        return formatted;
      }
    },
    // 得到缓存信息
    getStorage(key) {
      uni.getStorage({
        key: key,
        success: function (res) {
          const value = res.data;
          this.storageInfo = value;
        }
      });
    }
  },
  onLoad() {
    // #ifndef H5
    // 监听键盘高度变化
    uni.onKeyboardHeightChange(res => {
      this.keyboardHeight = res.height;
      if (this.keyboardHeight < 0) this.keyboardHeight = 0;
      this.keyboardHeightBox = this.keyboardHeight + 'px';
    })
    uni.setKeepScreenOn({
      keepScreenOn: true
    });
    // #endif
  },
  onUnload() {
    // #ifndef H5
    uni.offKeyboardHeightChange();
    // #endif
    clearInterval(this.timer);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
}
</script>
<style lang="less" scoped>
view,
uni-view {
  box-sizing: border-box
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.HmSimpleChatRoom {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // 标题
  &_title {
    width: 100%;
    flex: 0 0 auto;
  }

  // 内容
  &_content {
    width: 100%;
    height: auto;
    flex: 1 1 auto;
    position: relative;
    background-color: #f3f3f3;
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;

    // 消息框
    &_messageBox {
      width: 100%;
      height: auto;
      flex: 1 1 auto;
      position: relative;
      border-top: 2rpx solid;
      border-bottom: 2rpx solid;
      border-color: rgba(224, 224, 224, 1);
      box-sizing: border-box;
      overflow: hidden;
    }

    // 发送消息框
    &_sendBox {
      width: 100%;
      padding: 20rpx;
      flex: 0 0 auto;
      position: relative;
      margin: auto 0rpx 0rpx;
      background-color: inherit;
      transition: all 0.1s ease;

      .send {
        width: 100%;
        height: 100%;
        align-items: flex-end;
        transition: all 0.1s ease;
      }

      // 发送的消息框
      .send_textarea {
        height: 100%;
        max-height: 300rpx;
        overflow: auto;
        flex-grow: 1;
        font-size: 32rpx;
        padding: 5px 4px;
        align-items: center;
        background-color: #fff;
        border-radius: 10rpx;

        /deep/ .uni-input {
          width: 100%;
        }
      }

      // 发送的消息按钮
      .send-btn {
        width: auto;
        flex-shrink: 0;
        font-size: 32rpx;
        margin-left: 20rpx;
        background-color: #409eff;
        color: #fff;
        border: none;
        border-radius: 10rpx;
      }
    }
  }
}

.message_scroll {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .messageBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 32rpx;
    padding: 12rpx 12rpx 24rpx;

    &_item {
      display: block;
      line-height: 60rpx;
      position: relative;
      padding: 0.625rem 0.625rem 0 0.625rem;

      &_time {
        color: rgba(170, 170, 170, 1);
        text-align: center;
      }

      &_box {
        display: flex;
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

          &::after {
            content: "";
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            border-top: 16rpx solid transparent;
            border-bottom: 16rpx solid transparent;
          }
        }
      }
    }

    &_item-pull {
      .messageBox_item_box {
        flex-direction: row;
      }

      .messageBox_item_box__content {
        margin-left: 1rem;
        background-color: #fff;
        border-color: #fff;

        &::after {
          border-right: 20rpx solid;
          border-right-color: inherit;
          top: 30rpx;
          left: -18rpx;
        }
      }
    }

    &_item-push {
      .messageBox_item_box {
        flex-direction: row-reverse;
      }

      .messageBox_item_box__content {
        margin-right: 1rem;
        background-color: #a0e959;
        border-color: #a0e959;

        &::after {
          border-left: 20rpx solid;
          border-left-color: inherit;
          top: 30rpx;
          right: -18rpx;
        }
      }
    }
  }
}
</style>