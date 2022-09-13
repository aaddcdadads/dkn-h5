<template>
  <view>
    <view class="xuanfu" id="moveDiv" :style="moveStyle" @touchstart="down" @touchmove="move" @touchend="end"
      @click="click">
      <view class="slot-box">
      <slot name="moveDiv"></slot>
    </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "50px"
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "50px"
    },
    /**
     * 移动盒子样式
     */
    moveStyle: {
      type: Object,
      default: function () {
        return {
          background: "cyan",
          borderRadius: "50%",
          right: "25px",
          bottom: "25px",
        };
      },
    },

    /**
     * 隐藏比例
     */
    hideScale: {
      type: String,
      default: "0.875"
    },
    /**
     * 点击还原距离
     */
    restoreDistance: {
      type: Number,
      default: 12
    },
    /**
     * css定位
     * @options ["fixed","absolute","relative","inherit"]
     */
    position: {
      type: String,
      default: "fixed"
    },
    /**
     * 是否固定
     */
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      flags: false,
      positionTemp: { x: 0, y: 0 }, // 记录手指点击的位置
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: "",
      cWidth: "50px",
      cHeight: "50px",
      cHideScale: "0.875",
      cPosition: "fixed"
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    hideScale(value) {
      this.cHideScale = this.percentage(value);
    },
    position(value) {
      this.cPosition = value;
    }
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cHideScale = this.percentage(this.hideScale);
    this.cPosition = this.position;
  },
  methods: {
    percentage(e) {

    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    click(event) {
      let windowWidth = document.documentElement.clientWidth;
      if (this.xPum < 0) {
        moveDiv.style.left = 0 + this.restoreDistance + "px";
      } else if (this.xPum + moveDiv.clientWidth > windowWidth) {
        moveDiv.style.left = windowWidth - moveDiv.clientWidth - this.restoreDistance + "px";
      }
      this.$emit("onClick", event);
    },
    down(event) {
      if (this.fixed) {
        console.info("固定盒子，不准它移动");
        return;
      }
      this.flags = true;
      var touch;
      // 该if判断是用touch还是mouse来移动
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.positionTemp.x = touch.clientX; // 手指点击后的位置
      this.positionTemp.y = touch.clientY;

      this.dx = moveDiv.offsetLeft; // 移动的div元素的位置
      this.dy = moveDiv.offsetTop;
    },
    move(event) {
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.positionTemp.x; // 手指移动的变化量
        this.ny = touch.clientY - this.positionTemp.y;

        this.xPum = this.dx + this.nx; // 移动后，div元素的位置
        this.yPum = this.dy + this.ny;

        let windowWidth = document.documentElement.clientWidth;
        let windowHeight = document.documentElement.clientHeight;

        if (this.xPum >= 0 && this.xPum + moveDiv.clientWidth <= windowWidth) {
          // movediv的左右边，未出界
          moveDiv.style.left = this.xPum + "px";
        } else if (this.xPum < 0) {
          // 左边出界，则左边缘贴边
          //moveDiv.style.left = 0 + "px";
          moveDiv.style.left = "calc(-" + this.hideScale + " * " + this.cWidth + ")";
        } else if (this.xPum + moveDiv.clientWidth > windowWidth) {
          // 右边缘出界
          moveDiv.style.left = "calc(" + (windowWidth - moveDiv.clientWidth) + "px + calc(" + this.hideScale + " * " + this.cWidth + "))";
          // console.log("dx", windowWidth - moveDiv.clientWidth)
        }
        // 上下未出界
        if (this.yPum > 0 && this.yPum + moveDiv.clientHeight < windowHeight) {
          moveDiv.style.top = this.yPum + "px";
        } else if (this.yPum <= 0) {
          // 上边缘出界
          moveDiv.style.top = 0 + "px";
        } else if (this.yPum + moveDiv.clientHeight >= windowHeight) {
          // 下边缘
          // console.log("windowHeight:", windowHeight)
          // console.log("moveDiv.clientHeight:", moveDiv.clientHeight)
          // console.log(this.yPum + moveDiv.clientHeight)
          moveDiv.style.top = windowHeight - moveDiv.clientHeight + "px";
        }

        // 阻止页面的滑动默认事件，为了只让悬浮球滑动，其他部分不滑动；如果碰到滑动问题，1.2 请注意是否获取到 touchmove, 系统默认passive: true，无法使用preventDefault
        // document.addEventListener("touchmove", function(){
        //  event.preventDefault();
        // }, { passive: false });
        // document.addEventListener("mousemove", function(){
        //   event.preventDefault();
        // }, { passive: false });
        document.addEventListener("touchmove", this.preventDefault, {
          passive: false,
        });
        document.addEventListener("mousemove", this.preventDefault, {
          passive: false,
        });
      }
    },
    //鼠标释放时候的函数，鼠标释放，移除之前添加的侦听事件，将passive设置为true，不然背景会滑动不了
    end(event) {

      this.flags = false;
      // 注意事项，在添加和删除监听事件时，其function必须是同名的函数，不能为匿名函数。
      document.removeEventListener("touchmove", this.preventDefault, false);
      document.removeEventListener("mousemove", this.preventDefault, false);
      // 下面两句是保证在移除监听事件后，除了悬浮球的部分还能够滑动，如果不添加，则无法滑动
      document.addEventListener("touchmove", function (e) {
        window.event.returnValue = true;
      });
      document.addEventListener("mousemove", function (e) {
        window.event.returnValue = true;
      });
    },
    preventDefault(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.xuanfu {
  /* 如果碰到滑动问题，1.3 请检查 z-index。z-index需比web大一级*/
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  position: v-bind(cPosition);
  /* fixed */
  z-index: 999;
}
.slot-box{
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>