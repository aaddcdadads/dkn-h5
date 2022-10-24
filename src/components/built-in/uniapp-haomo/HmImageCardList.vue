<template>
    <view class="inbox flex-row">
      <view v-for="(item,index) in cImgsList" :key="item.index" class="listbox flex-col" @click="onClick(item,index)">
        <view class="imgbox flex-content">
          <view class="img" :style="{ backgroundImage: `url(${item.imghref})` }"></view>
        </view>
        <view class="titlebox flex-content">
          <text decode="decode" class="adrstext">{{item.addres}}</text>
        </view>
        <view class="textbox">
          <text decode="decode" class="putext">{{item.eqius}}</text>
        </view>
      </view>
    </view>
  </template>
  
  <script>
  export default {
    name: "HmUviewCardList",
    props: {
      /**
       * 数据内容
       */
      imgsList: {
        type: Array,
        default: function () {
          return [{
            id: "1",
            imghref: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi2%2F1875411720%2FO1CN01UcMFyq1OZntRgFFU2_%21%211875411720.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668564849&t=c24b9ed6666906d828da99179e4dd94b",
            addres: "客厅",
            eqius: "灯1"
          },
          {
            id: "2",
            imghref: "https://img0.baidu.com/it/u=1895837640,2691329714&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            addres: "客厅",
            eqius: "灯1"
          },
          {
            id: "3",
            imghref: "https://img0.baidu.com/it/u=3182847715,4123160739&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=424",
            addres: "客厅",
            eqius: "灯1"
          },
          {
            id: "3",
            imghref: "https://img0.baidu.com/it/u=1458576126,4143555283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            addres: "客厅",
            eqius: "灯1"
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
      imgsList(value) {
        this.cImgsList = value;
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
    },
    data() {
      return {
        listboxbgcolor: "", //卡片背景颜色
        boldtextsize: "", //标题字大小
        boldtextcolor: "", //标题字颜色
        putextsize: "", //描述字大小
        putextcolor: "", //描述字颜色
        cImgsList: []
      }
    },
    methods: {
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
  
  .img {
    width: 82px;
    height: 82px;
    background-color: #e8e8e8;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }
  
  .inbox {
    width: 100%;
    min-width: 200px;
    padding: 6px 10px;
    flex-wrap: wrap;
    background: transparent;
  }
  
  .listbox {
    width: 100px;
    height: 156px;
    padding: 12px;
    margin: 0px 6px 12px;
    flex: 0 0 calc(50% - 12px);
    border-radius: 8px;
    background-color: v-bind(listboxbgcolor);
      overflow:hidden;
  }
  
  .adrstext {
    font-size: v-bind(boldtextsize);
    color: v-bind(boldtextcolor);
    letter-spacing: 0;
    font-weight: 600;
  }
  
  .putext {
    font-size: v-bind(putextsize);
    color: v-bind(putextcolor);
    letter-spacing: 0;
    font-weight: 400;
  }
  </style>
  