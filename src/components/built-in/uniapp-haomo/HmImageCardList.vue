<template>
  <view :class="getClass(this.cShowMode)">
    <view
      v-for="(item,index) in cImgsList"
      :key="item.index"
      class="listbox flex-col"
      :style="{width:setBoxWidth(this.cShowMode,this.cAboutMargin),margin:'0rpx '+cAboutMargin+' 24rpx',background:listboxbgcolor}"
      @click="onClick(item,index)"
    >
      <view
        class="imgbox flex-content"
        :style="setImgHeight(this.cShowMode,this.cImgStyle)"
        @touchstart="cDeleteIcon.show && getTouchStart(item,index)"
        @touchend="cDeleteIcon.show && getTouchEnd(item,index)"
      >
        <img
          class="img"
          :src="item.imghref"
          v-if="!item.videoSrc"
          @click="cImgStyle.clickable && popupOpen(item,item.imghref,cImgsList)"
        />
        <video class="video" v-else :src="item.videoSrc"></video>
        <u-icon
          v-if="cDeleteIcon.iconShow"
          class="icon"
          :name="cDeleteIcon.name"
          :size="cDeleteIcon.size"
          :style="cDeleteIcon.style"
          @click="delClick(item,index)"
        ></u-icon>
      </view>
      <view v-if="item.title" class="titlebox flex-content">
        <text
          decode="decode"
          class="adrstext"
          :style="{fontSize:boldtextsize,color:boldtextcolor}"
        >{{item.title}}</text>
      </view>
      <view v-if="item.text" class="textbox">
        <text
          decode="decode"
          class="putext"
          :style="{fontSize:putextsize,color:putextcolor}"
        >{{item.text}}</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmImageCardList",
  props: {
    /**
     * 展现模式
     * @type Enum
     * @options ["nowrapRow","singleColumn","doubleRank","waterfallFlow"]
     */
    showMode: {
      type: String,
      default: "doubleRank"
    },
    /**
     * 左右外边距
     */
    aboutMargin: {
      type: String,
      default: "12rpx"
    },
    /**
     * 图片样式
     */
    imgStyle: {
      type: Object,
      default: function() {
        return {
          text:
            "无效字段,当且仅当showMode为nowrapRow或doubleRank时,高度生效,仅nowrapRow时,宽度生效(单个整体宽度)",
          text2:
            "无效字段,clickable:可点击;inside:预览缩略图(循环imgsList中所有imgHref)",
          clickable: false,
          inside: false,
          width: "100%",
          height: "336rpx"
        };
      }
    },
    /**
     * 长按图标设置
     */
    deleteIcon: {
      type: Object,
      default: function() {
        return {
          show: true,
          time: 300,
          name: "minus-circle",
          size: 30,
          style: {
            right: "12rpx",
            top: "12rpx"
          }
        };
      }
    },
    /**
     * 数据内容
     */
    imgsList: {
      type: Array,
      default: function() {
        return [
          {
            id: "1",
            imghref:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi2%2F1875411720%2FO1CN01UcMFyq1OZntRgFFU2_%21%211875411720.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668564849&t=c24b9ed6666906d828da99179e4dd94b",
            title: "这是一段比较长的描述标题,超出两行才出现省略号",
            text: "灯1"
          },
          {
            id: "2",
            imghref:
              "https://img0.baidu.com/it/u=3182847715,4123160739&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=424",
            title: "客厅",
            text: "这是描述文字，超出一行就出现省略号"
          },
          {
            id: "3",
            imghref:
              "https://img0.baidu.com/it/u=3182847715,4123160739&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=424",
            title: "客厅",
            text: "灯1"
          },
          {
            id: "4",
            imghref:
              "https://img0.baidu.com/it/u=1458576126,4143555283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            videoSrc:
              "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4",
            title: "客厅",
            text: "灯1"
          },
          {
            id: "5",
            imghref:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi2%2F1875411720%2FO1CN01UcMFyq1OZntRgFFU2_%21%211875411720.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668564849&t=c24b9ed6666906d828da99179e4dd94b",
            title: "客厅",
            text: "灯1"
          }
        ];
      }
    },
    /**
     * 卡片背景颜色
     * @type Color
     */
    listbgColor: {
      type: String,
      default: "#ffffff"
    },
    /**
     * 标题字大小
     */
    btextsize: {
      type: String,
      default: "16px"
    },
    /**
     * 标题字颜色
     * @type Color
     */
    btextcolor: {
      type: String,
      default: "#000"
    },
    /**
     * 描述字大小
     */
    mtextsize: {
      type: String,
      default: "14px"
    },
    /**
     * 描述字颜色
     * @type Color
     */
    mtextcolor: {
      type: String,
      default: "#666666"
    }
  },
  watch: {
    imgsList: {
      handler: function(value, oldValue) {
        this.cImgsList = value;
      },
      deep: true
    },
    imgStyle(value) {
      this.cImgStyle = value;
    },
    deleteIcon(value) {
      this.cDeleteIcon = value;
    },
    showMode(value) {
      this.cShowMode = value;
      this.cWidth = this.setBoxWidth(value, this.cAboutMargin);
      this.getClass(this.cShowMode);
    },
    aboutMargin(value) {
      this.cAboutMargin = value;
      this.cWidth = this.setBoxWidth(this.cShowMode, value);
    },
    listbgColor(value) {
      this.listboxbgcolor = value;
    },
    boldtextsize(value) {
      this.boldtextsize = this.getCssUnit(value);
    },
    boldtextcolor(value) {
      this.boldtextcolor = value;
    },
    putextsize(value) {
      this.putextsize = this.getCssUnit(value);
    },
    putextcolor(value) {
      this.putextcolor = value;
    }
  },
  mounted() {
    this.cImgsList = this.imgsList;
    this.listboxbgcolor = this.listbgColor;
    this.cDeleteIcon = this.deleteIcon;
    this.boldtextsize = this.getCssUnit(this.textsize);
    this.boldtextcolor = this.btextcolor;
    this.putextsize = this.getCssUnit(this.mtextsize);
    this.putextcolor = this.mtextcolor;
    this.cAboutMargin = this.aboutMargin;
    this.cImgStyle = this.imgStyle;
    this.cShowMode = this.showMode;
    this.cWidth = this.setBoxWidth(this.cShowMode, this.cAboutMargin);
    this.getClass(this.cShowMode);
  },
  data() {
    return {
      cShowMode: "doubleRank",
      cImgStyle: {},
      cAboutMargin: "12rpx",
      listboxbgcolor: "", //卡片背景颜色
      boldtextsize: "", //标题字大小
      boldtextcolor: "", //标题字颜色
      putextsize: "", //描述字大小
      putextcolor: "", //描述字颜色
      cImgsList: [],
      cDeleteIcon: {},
      timeOutEvent: 0
    };
  },
  methods: {
    // 设置分类型 样式
    getClass(e) {
      let className = {
        nowrapRow: "flex-nowrap HmImageCardList", //单行不换行滑动
        singleColumn: "inbox flex-row HmImageCardList", //单列滑动
        doubleRank: "inbox flex-row HmImageCardList", //双列滑动
        waterfallFlow: "multi-column HmImageCardList" //双列瀑布流
      };
      return className[e];
    },
    // 设置盒子大小
    setBoxWidth(mode, margin) {
      // let w = 100 / mode;
      let w = mode == "singleColumn" ? 100 : 50;
      let width = "auto";
      if (mode == "nowrapRow") {
        width = this.cImgStyle.width ? this.cImgStyle.width : "auto";
      } else {
        if (margin) {
          // margin:12rpx => str:rpx,num:12
          let str = String(margin).match(/[a-z|A-Z]+/gi);
          let num = String(margin).match(/\d+/gi);
          width = "calc(" + w.toFixed(2) + "% - " + 2 * num + str + ")";
        } else {
          width = w + "%";
        }
      }
      return width;
    },
    //设置盒子宽度
    setImgHeight(mode, style) {
      style.height = mode != "waterfallFlow" ? this.cImgStyle.height : "auto";
      return style;
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    popupOpen(e, imgSrc, arr) {
      if (this.cImgStyle.inside) {
        let imgSrcArr = [];
        arr.forEach(item => {
          imgSrcArr.push(item.imghref);
        });
        // #ifdef MP-WEIXIN
        wx.previewImage({
          urls: imgSrcArr
        });
        // #endif
        // #ifndef MP-WEIXIN
        uni.previewImage({
          urls: imgSrcArr
        });
        // #endif
      }
      console.log(
        "微信文档:https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html"
      );
      console.log(
        "uniapp文档:https://uniapp.dcloud.net.cn/api/media/image.html#unipreviewimageobject"
      );
      this.$emit("imgClick", e, imgSrc, arr);
    },
    getTouchStart: function(item, index) {
      var self = this;
      this.timeOutEvent = setTimeout(function() {
        self.cDeleteIcon.iconShow = true;
      }, self.cDeleteIcon.time);
    },
    getTouchEnd(item, index) {
      clearTimeout(this.timeOutEvent);
    },
    delClick(e, index) {
      this.cDeleteIcon.iconShow = false;
      this.$emit("delClick", e, index);
    },
    onClick: function(item, index) {
      this.$emit("onClick", item, index);
      console.log("进入卡片详情", item, index);
    }
  }
};
</script>
  
<style lang="less" scope>
page {
  width: 100vw;
  height: 100vh;
  background: #f1f2f3;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
}
// 取消影响其他全局
.HmImageCardList {
  view,
  image,
  text {
    box-sizing: border-box;
    flex-shrink: 0;
  }
}
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-nowrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
}
/* 瀑布流样式 */
.multi-column {
  width: 100%;
  min-width: 256px;
  column-count: 2;
  column-gap: 12rpx;
  padding: 24rpx 12rpx 0rpx;
}

.inbox {
  width: 100%;
  padding: 24rpx 0rpx 0rpx;
  flex-wrap: wrap;
  background: transparent;
}

.listbox {
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}

.multi-column .listbox {
  width: auto !important;
  break-inside: avoid;
}
.flex-nowrap .listbox {
  max-width: 100%;
}
.imgbox {
  position: relative;
}
// .imgbox .img {
//   width: 100%;
//   height: 100%;
//   vertical-align: middle;
// }
.imgbox .img {
  width: 100%;
  height: 100%;
  flex: 1;
  object-fit: cover;
  vertical-align: middle;
}
.imgbox .icon {
  position: absolute;
}
//重写视频样式
.video {
  width: 100%;
  height: 100%;
  //控制条的样式
  /deep/ .uni-video-bar {
    // display: block !important;
    height: 44rpx;
    background-color: rgba(0, 0, 0, 0.5);
    // background: cyan;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    display: flex;
    align-items: center;
    align-items: center;
    padding: 0 20rpx;
    z-index: 0;
    transform: translate3d(0, 0, 0);
    //播放暂停，时间，进度条
    // .uni-video-controls {
    //   display: flex;
    //   flex-grow: 1;
    //   // margin: 0 17rpx;
    //   margin: 0;
    //   //播放暂停按钮
    //   .uni-video-control-button {
    //     width: 13rpx;
    //     height: 15rpx;
    //     padding: 14.5rpx 12.5rpx 14.5rpx 12.5rpx;
    //     margin-left: -8.5rpx;
    //     box-sizing: content-box;
    //     cursor: pointer;
    //   }
    // }
  }
}
.titlebox {
  margin: 10rpx 16rpx;
}

.adrstext {
  min-height: 82rpx;
  letter-spacing: 0;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.multi-column .adrstext {
  min-height: 0px;
}
.textbox {
  margin: auto 16rpx 12rpx;
}
.putext {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  letter-spacing: 0;
  font-weight: 400;
}
</style>
  