<template>
  <view>
    <hm-uview-tag></hm-uview-tag>
    <hm-uview-tag
      :cList="list2"
      type="success"
      size="mini"
      shape="circle"
      mode="dark"
      :closeable="true"
      bgColor="green"
      color="black"
      borderColor="black"
      closeColor="black"
      marginRight="20px"
    ></hm-uview-tag>
  </view>
</template>

<script>
import HmUviewTag from "@/components/built-in/HmUviewTag.vue";

export default {
  components: { HmUviewTag },
  data() {
    return {
      list2: [
        {
          text: "标签1",
          show: true,
        },
        {
          text: "标签2",
          show: true,
        },
      ],
    };
  },
};
</script>

<style lang="less"></style>
