<template>
  <div class="hm-news-card" @click="onClick(cOptions)">
    <div class="container">
      <div class="box" @click="onClickUrl">
        <img class="img" :src="cOptions.img" />
        <span class="title">{{ cOptions.title }}</span>
        <div class="submain">
          <span class="author">{{ cOptions.author }}</span>
          <span class="date">{{ cOptions.date }}</span>
        </div>
        <span class="summary">{{ cOptions.summary }}</span>
        <div class="row_2" />
        <div class="ft">
          <span class="comments" v-show="cOptions['showComments']">{{
            cOptions.comments
          }}</span>
          <span class="likes" v-show="cOptions['showLikes']">{{
            cOptions.likes
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HmNewsCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_22946_0_3.png",
          title: "新闻标题",
          author: "作者",
          date: "16 MAY 2016",
          summary: "新闻概要。新闻概要长度最好控制在50字符以内",
          comments: "14 评论",
          likes: "254 喜欢",
          url: "",
          showComments: true,
          showLikes: true,
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
    onClickUrl() {
      console.log("first"),
        uni.navigateTo({
          url: this.options.url,
        });
    },
  },
};
</script>
<style>
.hm-news-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 774rpx;
}

.container {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  height: 736rpx;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
}

.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  width: 692rpx;
  height: 736rpx;
  filter: drop-shadow(0px 1px 6px 1px rgba(0, 0, 0, 0.05));
}

.img {
  width: 692rpx;
  height: 378rpx;
  overflow: hidden;
}

.title {
  margin-top: 26rpx;
  margin-left: 38rpx;
  max-width: 630rpx;
  height: 44rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 44rpx;
  letter-spacing: 0px;
  white-space: pre;
  color: #030303;
  font-family: Helvetica;
  font-size: 36rpx;
  font-weight: normal;
}

.submain {
  display: flex;
  flex-direction: row;
  margin-top: 14rpx;
}

.author {
  margin-left: 38rpx;
  width: 150rpx;
  height: 28rpx;
  line-height: 28rpx;
  white-space: nowrap;
  color: #b8e986;
  font-family: Helvetica;
  font-size: 24rpx;
  font-weight: normal;
}

.date {
  margin-left: 28rpx;
  width: 146rpx;
  height: 28rpx;
  line-height: 28rpx;
  white-space: pre;
  color: #c7c7cd;
  font-family: Helvetica;
  font-size: 24rpx;
  font-weight: normal;
}

.summary {
  margin-top: 16rpx;
  margin-left: 38rpx;
  width: 554rpx;
  height: 88rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 44rpx;
  letter-spacing: 0px;
  white-space: pre-wrap;
  color: #8f8e94;
  font-family: Helvetica;
  font-size: 28rpx;
  font-weight: normal;
}

.row_2 {
  display: flex;
  margin-top: 42rpx;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(239, 239, 244, 1);
  width: 692rpx;
  height: 8rpx;
}

.ft {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 28rpx;
  padding-right: 48rpx;
  padding-left: 40rpx;
  width: 692rpx;
}

.comments {
  width: 182rpx;
  height: 24rpx;
  line-height: 24rpx;
  letter-spacing: 1.67px;
  white-space: pre;
  color: #8f8e94;
  font-family: Helvetica;
  font-size: 20rpx;
  font-weight: normal;
}

.likes {
  width: 126rpx;
  height: 24rpx;
  line-height: 24rpx;
  letter-spacing: 1.67px;
  white-space: pre;
  color: #8f8e94;
  font-family: Helvetica;
  font-size: 20rpx;
  font-weight: normal;
}
</style>
