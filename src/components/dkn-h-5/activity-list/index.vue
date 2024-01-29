<template>
  <view class="container" @click="onClick">
    <view class="div">
      <view class="imgleft"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAgHPBHBWz8+/jzaiVW1RAOASvd1dRt0cAAAC+SURBVFjD7ddLDoMwDARQOwHK/9e5/1kruuiiAiZRoiJUv6UXIwuyGIsx5lJzi3amc654AHiUbM45bBybc4qNkjlRDE49Nl6/fOZuKISYPML4SU4sPcL1ixzqEKOTI0/EcbKvrBGnLk9eT46VPGJ52dUgViO7EO92QaueqwKDRmHGoKBVuCokSIXTbBv99BsBFftr932QFmRBFmRB1wall4j0WpNetPJWv/SVXOZ6nF7Ys50Q/Kgh3keNMf/gBY3fnCSsomBkAAAAAElFTkSuQmCC"
          alt=""
      /></view>

      <view class="content"
        ><span>活动报名时间：{{ time }}</span></view
      >
    </view>
    <view class="div">
      <view class="imgleft"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAgHPBHBWz8+/jzaiVW1RAOASvd1dRt0cAAAC+SURBVFjD7ddLDoMwDARQOwHK/9e5/1kruuiiAiZRoiJUv6UXIwuyGIsx5lJzi3amc654AHiUbM45bBybc4qNkjlRDE49Nl6/fOZuKISYPML4SU4sPcL1ixzqEKOTI0/EcbKvrBGnLk9eT46VPGJ52dUgViO7EO92QaueqwKDRmHGoKBVuCokSIXTbBv99BsBFftr932QFmRBFmRB1wall4j0WpNetPJWv/SVXOZ6nF7Ys50Q/Kgh3keNMf/gBY3fnCSsomBkAAAAAElFTkSuQmCC"
          alt=""
      /></view>

      <view class="content"
        ><span>报名截止时间：{{ time1 }}</span></view
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
      <view class="content1">{{ speed1 }}</view>
    </view>
    <view class="div" @click="paly">
      <view class="imgleft"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAaVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8G612AAAAInRSTlMA5uvdDGFXJMPz1nA8CKFcm5cvswSLc4cQv7uMQjgqgHscYjY2ygAAAcJJREFUWMPtl92OgjAQhW1pUUAUBETxf97/ITcEs80yp6VdExITviuTGY4tPTN0VgsL38MhK8+RIBLRucwO/1XZFpL+IIttuEquIwJEOg/T2QuyIPYBMusNOdisfXXihJwksZ9OQ5M0HjL1jjzY1ZNCXAcree7r493F5E3sPPeEvElcLgD+qfRaqbWugJ8cfmbJ6e238lIWtHo8F+xPTyZ6YssVtrrTbD29jlFia9IrDKv326ivsF7AJHBeNc5gbxz3pwKvvG6lbGu89wIKSRoxGKXtf7aDzWiEhP2ZxuSDvnlCsRTUxzOWpczDwiKUAaESZx3JbO3OUkogdCbGUamjaT/I+R10kY1Es+N3OUmShfT+zrjxmABCVh31TlApiAYIbU3RAgK29i7xe4qCIuBlD1GNe2fkOn5sS0znMiS2JaZ0lQi2JSbDRRvOAbcRTNo0KWGkpbFBHn3sgWO4sV0JUZkyQ2aFRI4vc4xdhNEEuDqWq+0fSM5ziD1RfeT2TzZHvvrICx3pPugSQSJWKkZr3cxwrfngosW4kCeXOS6j4dfjj3d3mXeEmB5qZh2zpge/GUdRPBx3w3Dc9cPxwsLX8AOqSwi9SvwrdgAAAABJRU5ErkJggg=="
          alt=""
      /></view>

      <view class="content1" style="display: flex">
        <view>活动报名费用：</view>
        <view style=""
          ><span style="width: 100%; display: block">{{ projectOne }}</span
          ><span>{{ projectTwo }}</span></view
        >
      </view>
    </view>
    <view class="div">
      <view class="imgleft"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMAgATfn/vb879Y7+d8ZEUW97OtMgwI0qaXg3BrTz4g17p2KhDjxYxeJBzLiFQ43Jm3TAAAAbRJREFUWMPt1ddywjAQBVBhSS4xrmC6KSEJpN3//7w0GI+9m0iIzCQPPm8Yz5VmtVqLXq/373jR1A9yWR6q63JSHyfy5ZqcpUZj7p6ToGXomnOr0Vbbl7b1q0DHxK6us40G/Gl0TnsEMTLHjEKcbVJSIfsqRQEa+uv9AQhlynnhVlYgStPxBOhYue0oRJeshFheXKNXUInLqT2A2rr00T2o/KMlup2dGoIkGGPaSQNhEICxFu92Go1nYeKD0Z1H8UEYFaDumgkpNWSR2EzIBaiZcJDlIGrhYs5cKifjJ7TFj8JN1m6lm5FwlYVobG6FO+/gn7ezq87PFiqU8empvJ8OVplV1utuptQw9ZqxCWIzd9ltDU65vjwpYi9PsHKo3IK70NohSRwnoOLKpVm5sbdwavsJN4h5+zqZqyIMfSnDcKuel2kmGuuAGTJUtVI+V4ZptBcnSxD0ajzE+E4+O57Ozid/dXOSG/wkH3r8lp7IB82k/Ezad9eLzCOWH7mjQUvdZHDr8I7CaAcbyhy0hY3YHHQHK2NjEOyYx4/+raAJbGjP4bPIKS3mgzI3UlBkotfr/bU3qPvzND8JlcgAAAAASUVORK5CYII="
          alt=""
      /></view>

      <view class="content"
        ><span>已报名人数{{ number }}人</span></view
      >
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
      default: "2023.11.01 00:00-2024.02.15",
    },
    /**
     * 截止时间
     */
    time1: {
      type: String,
      default: "2023.11.01 ",
    },
    /**
     * 速度
     */
    speed1: {
      type: String,
      default: "1.314km/5.20km/9.99km",
    },
    /**
     * 活动一
     */
    projectOne: {
      type: String,
      default: "套餐项目一（￥0.0/人）",
    },
    /**
     * 活动二
     */
    projectTwo: {
      type: String,
      default: "套餐项目一（￥0.0/人）",
    },
    /**
     * 人数
     */
    number: {
      type: String,
      default: " 19999",
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
      console.log("first");
    },
    paly() {
      this.$emit("play");
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  background: #feeff7;
  // background: transparent;
  width: 100%;
}
.div {
  position: relative;
  width: 100%;
  display: flex;
  color: #d8477b;
  margin-bottom: 32rpx;
}
.imgleft {
  padding: 0 24rpx;

  > img {
    width: 40rpx;
    height: 40rpx;
  }
}
.content {
  line-height: 40rpx;
  font-weight: 500;
}
.content1 {
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

.item-tag {
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
