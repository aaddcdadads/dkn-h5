<template>
  <view class="container" @click="onClick">
    <view class="div">
      <view class="imgleft"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAgHPBHBWz8+/jzaiVW1RAOASvd1dRt0cAAAC+SURBVFjD7ddLDoMwDARQOwHK/9e5/1kruuiiAiZRoiJUv6UXIwuyGIsx5lJzi3amc654AHiUbM45bBybc4qNkjlRDE49Nl6/fOZuKISYPML4SU4sPcL1ixzqEKOTI0/EcbKvrBGnLk9eT46VPGJ52dUgViO7EO92QaueqwKDRmHGoKBVuCokSIXTbBv99BsBFftr932QFmRBFmRB1wall4j0WpNetPJWv/SVXOZ6nF7Ys50Q/Kgh3keNMf/gBY3fnCSsomBkAAAAAElFTkSuQmCC"
          alt=""
      /></view>

      <view class="content"
        ><span>{{ time }}</span></view
      >
    </view>

    <view class="div" @click="speed">
      <view class="imgleft"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMABPvv2mEI86UyEAz36WsWxbWWiYI4KBzj38u/rJpWTCCgkXhA0btzRDx8XFAkBkXCyQAAAexJREFUWMPtltl2gjAQhkMiiwLivlbFfZ/3f7xaEzsUnISlveg5fHd4cj6ZZDI/rKbmX2H1hdg4rDp9eNCr7hlxeBBUFx3gC7eyZwVPvMo73ZCi0K4o2sKL2bmKJxKAeOPyogUkCQZl26kJKSbLcqIOZOg0S3iW8Aa+iIp6nAm8RWytYqIBUDR2RTzjAEh4kZ3ygGZeoLgz0Lgxy88MaNoFPLausAKeVggkIi40X2nURBm2mJk7B5Ku6g6RZ0Z1NYWNcUnXN3hOQHOVS9r4dtr5SvIhl8SufFxpRW0gCdXVn6OXpiWAZJn6q4ZO1DMWNnJRpI1WiolsHauDZm20kqitPcI3N9pzA5K1euUAw04zX+XRi2aPU4Ul5sLZGK3bRxbNU6JTZgJ7mmh15WFYzxSZQoKeyjqOgamJ3vWPXXUuLryY+rKwPaovxmg9YAJ4oNhlCps6pmjlI4YM5W8b9cSTXU5yxd1IYIcADQfPVNExRqtIjz5/4A5xcOaItgGZEVG2sAXtiWXH7snw86foEZExWk+MYgPIkfbs8D5rF2DHvgE7LbhrCkNWxmjt5/qe7BqjNfTJN56jh4+M0WprsqUt8nxECBxUJJGcUUKbsPKaD5me+LjY2PrMX+MsrYbvce757DewLFZTU/N3fAIk9Mbrw/3SgQAAAABJRU5ErkJggg=="
          alt=""
      /></view>
      <view class="item-tag">
        <span>跑步</span>
      </view>
      <view class="content1"
        >{{speed}}</view
      >
      <view class="imgright"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVHic7duxTQNRFETRWSogdEBAQBH0BL1AAB1YohQSiAgogAIISJAIhoAIyYzHwdc39j0F7D5dyd5oJAAAAGCDZdSDbV9IupK0kvQk6X5Zls9R7/tXbF/a/vBvL7ZXs2/bC7YfvdkrkSTZ/vojEJEkyfZbCEQk29dbAhHJ9i2RtiBSgUgFIhWIVCBSgUgFIhWIVCBSgUgFIhWIVCBSgUgFIhWIVCBSYYdIp7NvnaaM9DD7zqmKSO8j3nsy4qGDePYBe8v2TfETW8++c4oyznH+Se8Q5/g+88QJiBMQJyBOQJyAOAFxAuIExAmIExAnIE5AnIA4AXEC4gTECcwUITNjlszMoTIzqMt8QJPMkaPec/2Mes8kPUu6Y9QLAACAg/EN1xkgFnijszwAAAAASUVORK5CYII="
          alt=""
      /></view>
    </view>
    <view class="div" @click="paly">
      <view class="imgleft"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMA5uvdDGFXJMPz1nA8CKFcm5cvswSLc4cQv7uMQjgqgHscYjY2ygAAAcJJREFUWMPtl92OgjAQhW1pUUAUBETxf97/ITcEs80yp6VdExITviuTGY4tPTN0VgsL38MhK8+RIBLRucwO/1XZFpL+IIttuEquIwJEOg/T2QuyIPYBMusNOdisfXXihJwksZ9OQ5M0HjL1jjzY1ZNCXAcree7r493F5E3sPPeEvElcLgD+qfRaqbWugJ8cfmbJ6e238lIWtHo8F+xPTyZ6YssVtrrTbD29jlFia9IrDKv326ivsF7AJHBeNc5gbxz3pwKvvG6lbGu89wIKSRoxGKXtf7aDzWiEhP2ZxuSDvnlCsRTUxzOWpczDwiKUAaESZx3JbO3OUkogdCbGUamjaT/I+R10kY1Es+N3OUmShfT+zrjxmABCVh31TlApiAYIbU3RAgK29i7xe4qCIuBlD1GNe2fkOn5sS0znMiS2JaZ0lQi2JSbDRRvOAbcRTNo0KWGkpbFBHn3sgWO4sV0JUZkyQ2aFRI4vc4xdhNEEuDqWq+0fSM5ziD1RfeT2TzZHvvrICx3pPugSQSJWKkZr3cxwrfngosW4kCeXOS6j4dfjj3d3mXeEmB5qZh2zpge/GUdRPBx3w3Dc9cPxwsLX8AOqSwi9SvwrdgAAAABJRU5ErkJggg=="
          alt=""
      /></view>

      <view class="content"
        ><span>{{ text }}</span></view
      >
      <view class="imgright"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVHic7duxTQNRFETRWSogdEBAQBH0BL1AAB1YohQSiAgogAIISJAIhoAIyYzHwdc39j0F7D5dyd5oJAAAAGCDZdSDbV9IupK0kvQk6X5Zls9R7/tXbF/a/vBvL7ZXs2/bC7YfvdkrkSTZ/vojEJEkyfZbCEQk29dbAhHJ9i2RtiBSgUgFIhWIVCBSgUgFIhWIVCBSgUgFIhWIVCBSgUgFIhWIVCBSYYdIp7NvnaaM9DD7zqmKSO8j3nsy4qGDePYBe8v2TfETW8++c4oyznH+Se8Q5/g+88QJiBMQJyBOQJyAOAFxAuIExAmIExAnIE5AnIA4AXEC4gTECcwUITNjlszMoTIzqMt8QJPMkaPec/2Mes8kPUu6Y9QLAACAg/EN1xkgFnijszwAAAAASUVORK5CYII="
          alt=""
      /></view>
    </view>
    <view class="div">
      <view class="imgleft"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMAgATfn/vb879Y7+d8ZEUW97OtMgwI0qaXg3BrTz4g17p2KhDjxYxeJBzLiFQ43Jm3TAAAAbRJREFUWMPt1ddywjAQBVBhSS4xrmC6KSEJpN3//7w0GI+9m0iIzCQPPm8Yz5VmtVqLXq/373jR1A9yWR6q63JSHyfy5ZqcpUZj7p6ToGXomnOr0Vbbl7b1q0DHxK6us40G/Gl0TnsEMTLHjEKcbVJSIfsqRQEa+uv9AQhlynnhVlYgStPxBOhYue0oRJeshFheXKNXUInLqT2A2rr00T2o/KMlup2dGoIkGGPaSQNhEICxFu92Go1nYeKD0Z1H8UEYFaDumgkpNWSR2EzIBaiZcJDlIGrhYs5cKifjJ7TFj8JN1m6lm5FwlYVobG6FO+/gn7ezq87PFiqU8empvJ8OVplV1utuptQw9ZqxCWIzd9ltDU65vjwpYi9PsHKo3IK70NohSRwnoOLKpVm5sbdwavsJN4h5+zqZqyIMfSnDcKuel2kmGuuAGTJUtVI+V4ZptBcnSxD0ajzE+E4+O57Ozid/dXOSG/wkH3r8lp7IB82k/Ezad9eLzCOWH7mjQUvdZHDr8I7CaAcbyhy0hY3YHHQHK2NjEOyYx4/+raAJbGjP4bPIKS3mgzI3UlBkotfr/bU3qPvzND8JlcgAAAAASUVORK5CYII="
          alt=""
      /></view>

      <view class="content"
        ><span>已报名{{ number }}人</span></view
      >
      <view class="imgright1">
        <img :src="src" alt="" />
        <img :src="src1" alt="" />
        <img :src="src2" alt="" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    /**
     * 时间
     */
    time: {
      type: String,
      default: "活动时间 2023.11.01 00:00-2024.02.15 23:50:00",
    },
    /**
     * 速度
     */
    speed: {
      type: String,
      default:"1.314km/5.20km/9.99km",
    },
    /**
     * 内容
     */
    text: {
      type: String,
      default: "如何玩转 👉",
    },
    /**
     * 人数
     */
    number: {
      type: String,
      default: " 154,480 ",
    },
    /**
     * 头像
     */
    src: {
      type: String,
      default:
        "https://static1.keepcdn.com/user-avatar/2024/01/26/17/64a6478409762200010b5a9a/eb8e36f18edc8afe8ed35ad48c0aaf08_900x900.jpg?imageMogr2/thumbnail/80x/quality/90",
    },
    /**
     * 头像1
     */
    src1: {
      type: String,
      default:
        "https://static1.keepcdn.com/user-avatar/2024/01/11/20/659d378a21b01a0001a1ce85/29813bbf0652b2c86ce101c20ad0db3d_1020x1020.jpg?imageMogr2/thumbnail/80x/quality/90",
    },
    /**
     * 头像2
     */
    src2: {
      type: String,
      default:
        "data:image/png;base64,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",
    },
  },
  data() {
    return {
      cLanguage: "zh",
      cType: 1,
      cTypeTwo: 1,
      isCollectDisabled: false,
      isLikeDisabled: false,
    };
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
    speed() {
      this.$emit("speed");
      console.log("first")
    },
    paly() {
      this.$emit("play");
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  background: transparent;
  width: 100%;
}
.div {
  position: relative;
  width: 100%;
  display: flex;
  color: #fff;
  margin-bottom: 32rpx;
}
.imgleft {
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  line-height: 100%;

  > img {
    width: 40rpx;
    height: 40rpx;
  }
}
.content {
  margin-left: 64rpx;
  line-height: 40rpx;
  font-weight: 500;
}
.content1 {
  line-height: 40rpx;
  font-weight: 500;
}
.imgright {
  position: absolute;
  right: 0;
  float: right;
  width: 24rpx;
  > img {
    width: 24rpx;
    height: 24rpx;
    margin-top: 8rpx;
  }
}
.imgright1 {
  position: absolute;
  right: 0;
  float: right;
  top: -12rpx;
  display: flex;
  > img {
    border-radius: 50%;
    display: block;
    height: 60rpx;
    margin-left: -0.256410256410256rem;
    -o-object-fit: cover;
    object-fit: cover;
    width: 60rpx;
  }
}
.item-tag {
  margin-left: 64rpx;
  background: #fff;
  border-radius: 8rpx;
  box-sizing: border-box;
  flex-shrink: 0;
  font-family: PingFangSC-Medium, PingFang SC;

  font-weight: 500;
  line-height: 10px;
  margin-right: 0.153846153846154rem;
  padding: 5px 6px;
  > span {
    color: #f797bd;
    font-size: 10px;
    font-weight: 500;
  }
}
</style>
