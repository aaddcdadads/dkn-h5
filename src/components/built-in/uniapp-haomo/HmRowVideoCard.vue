<template>
  <view class="box">
    <img class="video" :src="image1" />
    <view class="side">
      <span class="title">{{ title }}</span>
      <span class="desc">{{ desc }}</span>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmRowVideoCard",
  props: {
    /**
     * 图片
     */
    image1: {
      type: String,
      default:
        "http://hm-static-img.oss-cn-beijing.aliyuncs.com/uniapp/hm-components/video.png",
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "标题",
    },
    /**
     * 描述
     */
    desc: {
      type: String,
      default: "描述",
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.box {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 332px;
  height: 82px;
  padding: 5px 10px 5px 10px;
}

.video {
  width: 150px;
  height: 82px;
}

.side {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  height: 82px;
}

.title {
  width: 172px;
  height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 21px;
  white-space: pre-wrap;
  color: #131f3c;
  font-family: Helvetica;
  font-size: 15px;
}

.desc {
  opacity: 0.9;
  margin-top: 11px;
  line-height: 14px;
  white-space: pre;
  color: #8491b0;
  font-family: Helvetica;
  font-size: 12px;
}
</style>
