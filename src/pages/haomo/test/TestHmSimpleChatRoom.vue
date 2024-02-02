<template>
  <view class="chat-room">
    <hm-simple-chat-room
      ref="test"
      :messageList="test.messageList"
      :getDataMap="test.getDataMap"
      :theme="test.theme"
    ></hm-simple-chat-room>
  </view>
</template>
<script>
import HmSimpleChatRoom from "/@/components/built-in/uniapp-haomo/HmSimpleChatRoom.vue";
export default {
  components: { HmSimpleChatRoom },
  data() {
    return {
      test: {
        messageList: [
          {
            id:"1",
            type:2,
            content:"发送消息",
            sendTime:"2023-10-09 23:56:34"
          },
          {
            id:"2",
            type:1,
            content:"接收消息",
            sendTime:"2023-10-10 00:01:14"
          },
          {
            id:"3",
            type:1,
            content:"接收消息2",
            sendTime:"2023-10-10 00:04:14"
          },
          {
            id:"4",
            type:2,
            content:"发送消息",
            sendTime:"2023-10-11 10:23:34"
          },
        ],
        getDataMap: {},
        theme:{}
      },
    };
  },
};
</script>
<style lang="less" scoped>
.chat-room{
  width:100%;
  height:100%;
}

</style>
