<template>
  <view :class="showMode=='waterfallFlow' ? 'multi-column' : 'inbox flex-row'">
    <view v-for="(item,index) in cImgsList" :key="item.index" class="listbox flex-col"
      :style="{width:setBoxWidth(showMode,cAboutMargin),margin:'0rpx '+cAboutMargin+' 24rpx',background:listboxbgcolor}"
      @click="onClick(item,index)">
      <view class="imgbox flex-content" :style="{height:setImgHeight(showMode,imgHeight)}">
        <img :src="item.imghref" />
      </view>
      <view v-if="item.title" class="titlebox flex-content">
        <text decode="decode" class="adrstext"
          :style="{fontSize:boldtextsize,color:boldtextcolor}">{{item.title}}</text>
      </view>
      <view v-if="item.text" class="textbox">
        <text decode="decode" class="putext" :style="{fontSize:putextsize,color:putextcolor}">{{item.text}}</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmUviewCardList",
  props: {
    /**
     * 展现模式
     * @type Enum
     * @options ["singleColumn","doubleRank","waterfallFlow"]
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
     * 双列固定图高
     */
    imgHeight: {
      type: String,
      default: "336rpx"
    },
    /**
     * 数据内容
     */
    imgsList: {
      type: Array,
      default: function () {
        return [{
          id: "1",
          imghref: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi2%2F1875411720%2FO1CN01UcMFyq1OZntRgFFU2_%21%211875411720.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668564849&t=c24b9ed6666906d828da99179e4dd94b",
          title: "这是一段比较长的描述标题,超出两行才出现省略号",
          text: "灯1"
        },
        {
          id: "2",
          imghref: "https://img0.baidu.com/it/u=3182847715,4123160739&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=424",
          title: "客厅",
          text: "这是描述文字，超出一行就出现省略号"
        },
        {
          id: "3",
          imghref: "https://img0.baidu.com/it/u=3182847715,4123160739&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=424",
          title: "客厅",
          text: "灯1"
        },
        {
          id: "4",
          imghref: "https://img0.baidu.com/it/u=1458576126,4143555283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          title: "客厅",
          text: "灯1"
        },
        {
          id: "5",
          imghref: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi2%2F1875411720%2FO1CN01UcMFyq1OZntRgFFU2_%21%211875411720.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668564849&t=c24b9ed6666906d828da99179e4dd94b",
          title: "客厅",
          text: "灯1"
        }
        ];
      },
    },
    /**
     * 卡片背景颜色
     * @type Color
     */
    listbgColor: {
      type: String,
      default: "#ffffff",
    },
    /**
     * 标题字大小
     */
    btextsize: {
      type: String,
      default: "12px",

    },
    /**
     * 标题字颜色
     * @type Color
     */
    btextcolor: {
      type: String,
      default: "#000",
    },
    /**
     * 描述字大小
     */
    mtextsize: {
      type: String,
      default: "12px",
    },
    /**
     * 描述字颜色
     * @type Color
     */
    mtextcolor: {
      type: String,
      default: "#666666",
    }
  },
  watch: {
    imgsList: {
      handler: function (value, oldValue) {
        this.cImgsList = value;
      },
      deep: true,
    },
    aboutMargin(value) {
      this.cAboutMargin = value;
      this.cWidth = this.setBoxWidth(this.showMode, value);
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
    },
  },
  mounted() {
    this.cImgsList = this.imgsList;
    this.listboxbgcolor = this.listbgColor;
    this.boldtextsize = this.getCssUnit(this.textsize);
    this.boldtextcolor = this.btextcolor;
    this.putextsize = this.getCssUnit(this.mtextsize);
    this.putextcolor = this.mtextcolor;
    this.cAboutMargin = this.aboutMargin;
    this.cWidth = this.setBoxWidth(this.showMode, this.cAboutMargin);
  },
  data() {
    return {
      cAboutMargin: "",
      listboxbgcolor: "", //卡片背景颜色
      boldtextsize: "", //标题字大小
      boldtextcolor: "", //标题字颜色
      putextsize: "", //描述字大小
      putextcolor: "", //描述字颜色
      cImgsList: []
    }
  },
  methods: {
    setBoxWidth(mode, margin) {
      // let w = 100 / mode;
      let w = mode == 'singleColumn' ? 100 : 50;
      let width = "auto";
      if (margin) {
        // margin:12rpx => str:rpx,num:12
        let str = String(margin).match(/[a-z|A-Z]+/gi);
        let num = String(margin).match(/\d+/gi);
        width = "calc(" + w.toFixed(2) + "% - " + 2 * num + str + ")";
      } else {
        width = w + "%";
      }
      return width;
    },
    setImgHeight(mode, h) {
      let height = mode == "doubleRank" ? h : 'auto';
      return height;
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onClick: function (item, index) {
      this.$emit("onClick", item, index);
      console.log("进入卡片详情", item, index);
    }

  }
}
</script>
  
<style>
page {
  width: 100vw;
  height: 100vh;
  background: #f1f2f3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
}

view,
image,
text {
  box-sizing: border-box;
  flex-shrink: 0;
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


/* 瀑布流样式 */
.multi-column {
  width: 100%;
  min-width: 256px;
  column-count: 2;
  column-gap: 12rpx;
  padding: 24rpx 24rpx 0rpx;
}

.inbox {
  width: 100%;
  padding: 24rpx 24rpx 0rpx;
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

img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.titlebox{
  margin: 10rpx 16rpx;
}

.adrstext {
  letter-spacing: 0;
  font-weight: 600;
  overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.textbox{
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
  