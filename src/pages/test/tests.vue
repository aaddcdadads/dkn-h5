<template>
  <view class="inbox flex-row">
    <view
      v-for="(item, index) in cSeceneList"
      :key="item.index"
      class="listbox"
      :class="[{ highBigBox: index == activeindex }]"
      @click="Highlight(item, index)"
      @touchstart="getTouchStart(item)"
      @touchend="getTouchEnd(item)"
    >
      <view class="flex-col bigbox">
        <view
          v-show="setup1"
          class="img_tool"
          @click.stop=""
          @click="setup(item,index)"
        ></view>
        <checkbox value="cb" v-show="setup2" class="checkbox" @click.stop="" />
        <view class="textbox flex-col">
          <text decode="decode" class="boldtext">{{ item.scenename }}</text>
          <text decode="decode" class="putext">{{ item.scenealert }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "sceneCard",
  props: {
    /**
     * 数据内容
     */
    seceneList: {
      type: Array,
      default: function () {
        return [
          {
            id: "1",
            scenename: "场景名称1",
            scenealert: "场景位置说明",
          },
          {
            id: "2",
            scenename: "场景名称2",
            scenealert: "场景位置说明",
          },
          {
            id: "3",
            scenename: "场景名称2",
            scenealert: "场景位置说明",
          },
          {
            id: "4",
            scenename: "场景名称2",
            scenealert: "场景位置说明",
          },
        ];
      },
    },
    /**
     * 卡片背景颜色
     * @type Color
     */
    listbgcolor: {
      type: String,
      default: "#ffffff",
    },
    /**
     * 粗体字大小
     */
    btextsize: {
      type: String,
      default: "16px",
    },
    /**
     * 描述字大小
     */
    mtextsize: {
      type: String,
      default: "12px",
    },
  },
  watch: {
    bgcolor(value) {
      this.bgcolor = value;
    },
    boldtextsize(value) {
      this.boldtextsize = this.getCssUnit(value);
    },
    putextsize(value) {
      this.putextsize = this.getCssUnit(value);
    },
    seceneList(value) {
      this.cSeceneList = value;
    },
  },
  mounted() {
    this.cSeceneList = this.seceneList;
    this.bgcolor = this.listbgcolor;
    this.boldtextsize = this.getCssUnit(this.textsize);
    this.putextsize = this.getCssUnit(this.mtextsize);
  },
  data() {
    return {
      timeOutEvent: 0,
      bgcolor: "", //背景颜色
      boldtextsize: "", //粗体字大小
      putextsize: "", //描述字大小
      setup1: true,
      setup2: false,
      activeindex: null,
      ind: -1,
      cSeceneList: [
        {
          id: "1",
          scenename: "场景名称1",
          scenealert: "场景位置说明",
        },
        {
          id: "2",
          scenename: "场景名称2",
          scenealert: "场景位置说明",
        },
        {
          id: "3",
          scenename: "场景名称2",
          scenealert: "场景位置说明",
        },
        {
          id: "4",
          scenename: "场景名称2",
          scenealert: "场景位置说明",
        },
      ],
    };
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    Highlight: function (item, index) {
      this.$emit("Highlight", item, index);
      console.log("高亮事件");
      if (this.ind === index) {
        this.activeindex = null;
        this.ind = false;
      } else {
        this.activeindex = index;
        this.ind = index;
      }
    },
    getTouchStart: function (item) {
      var self = this;
      this.timeOutEvent = setTimeout(function () {
        console.log("进入长按");
        self.longPress(item);
      }, 500);
    },
    getTouchEnd(item) {
      clearTimeout(this.timeOutEvent);
    },
    longPress(e) {
      this.$emit("longPress",e);
      this.timeOutEvent = 0;
      console.log("执行的内容");
      this.setup1 = false;
      this.setup2 = true;
    },
    longtap: function (e) {
      this.$emit("longtap");
      console.log("进入长按", e);
      this.setup1 = false;
      this.setup2 = true;
    },
    setup: function (e,index) {
      this.$emit("setup", e,index);
      console.log("进入设置", e,index);
    },
  },
};
</script>

<style lang="less">
page {
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
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

.img_tool {
  width: 24px;
  height: 22px;
  margin-left: calc(100% - 24px);
  display: block;
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 9;
  background: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/61c527e72ffc780012400355/16403107674708847028.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.checkbox {
  width: 24px;
  height: 22px;
  margin-left: calc(100% - 24px);
  display: block;
  position: absolute;
  top: 2px;
  right: 2px;
}
.inbox {
  background-color: transparent;
  width: 100%;
  padding: 12px 0px;
}

.listbox {
  width: 150px;
  height: 92px;
  background-color: v-bind(bgcolor);
  border-radius: 4px;
  padding: 12px;
  margin-right: 12px;
}

.bigbox {
  width: 100%;
  height: 100%;
  position: relative;
}

.highBigBox {
  background-color: cyan;
  background-image: linear-gradient(225deg, #74dee0 0%, #23bec5 100%);
  .boldtext {
    color: #ffffff;
  }
  .putext {
    color: #ffffff;
  }
  .img_tool {
    width: 24px;
    height: 22px;
    margin-left: calc(100% - 24px);
    display: block;
    position: absolute;
    top: 2px;
    right: 2px;
    z-index: 9;
    background: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/61c527e72ffc780012400355/16403107674643339674.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}

.boldtext {
  height: 34px;
  line-height: 22px;
  font-size: v-bind(boldtextsize);
  color: #000000;
  font-weight: 500;
  padding-top: 10px;
}

.putext {
  width: 100%;
  max-height: 34px;
  overflow: auto;
  line-height: 17px;
  font-size: v-bind(putextsize);
  color: #8c8c8c;
  font-weight: 400;
}

/deep/ .uni-checkbox-input {
  border-radius: 50% !important;
}
</style>
