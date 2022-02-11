<template>
  <view class="flex-col page">
    <view class="section_1"> </view>
    <view class="flex-col section_2">
      <view class="flex-col">
        <text class="text">{{ wagesText }}</text>
        <text class="text_1">¥{{ this.onMoney(wagesSize) }}</text>
      </view>
      <view class="justify-between">
        <view class="flex-row group_2">
          <text class="text_2">{{ wagesPeople }}</text>
          <text class="text_3">{{ time }}</text>
        </view>
        <view
          class="flex-col items-center text-wrapper"
          @click="onClick(wagesPeople, wagesSize, time)"
        >
          <text>{{ butText }}</text>
        </view>
      </view>
    </view>
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/612c9040718459001197fea4/61db996c2608c80011b0f648/16417974836076575019.png"
      class="image"
    />
    <view class="justify-between section_3">
      <text class="text_5">{{ title }}</text>
      <text class="text_6">{{ tips }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "HmPayrollCard",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "350px",
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "工资单确认",
    },
    /**
     * 提示文字
     */
    tips: {
      type: String,
      default: "请于工资结算前确认",
    },
    /**
     * 工资文字
     */
    wagesText: {
      type: String,
      default: "实发工资",
    },
    /**
     * 工资数
     */
    wagesSize: {
      type: String,
      default: "77775555",
    },
    /**
     * 工资人员
     */
    wagesPeople: {
      type: String,
      default: "小明",
    },
    /**
     * 按钮文字
     */
    butText: {
      type: String,
      default: "签字确认",
    },
    /**
     * 时间
     */
    time: {
      type: String,
      default: "2021.12.31",
    },
  },

  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
  },

  mounted() {
    this.cWidth = this.getCssUnit(this.width);
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onClick(wagesPeople, wagesSize, time) {
      //console.log("11", wagesPeople, wagesSize, time);
      this.$emit("onClick", wagesPeople, wagesSize, time);
    },
    onMoney: function (n) {
      let b = n + "";
      let len = b.length;
      if (len <= 3) {
        return b;
      }
      let r = len % 3;
      return r > 0
        ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",")
        : b.slice(r, len).match(/\d{3}/g).join(",");
    },
  },

  data() {
    return {
      cWidth: "",
    };
  },
};
</script>

<style lang="less">
.page {
  padding-bottom: 83px;
  background-color: #8f8686;
  width: v-bind(cWidth);
  border-radius: 4px;
  overflow-y: auto;
  position: relative;
  box-shadow: 0px 2px 12px 0px rgba(100, 101, 102, 0.08);
}
.section_1 {
  margin: 0 8px;
  background-image: linear-gradient(
    99.6deg,
    rgb(24, 144, 255) 0%,
    rgb(24, 144, 255) -20.69%,
    rgb(79, 170, 255) 117.75%,
    rgb(79, 170, 255) 100%
  );
  border-radius: 4px 4px 0px 0px;
  width: 327px;
  height: 58px;
}
.section_2 {
  padding: 22px 12px 10px;
  background-color: rgb(255, 255, 255);
  //box-shadow: 0px 2px 12px 0px rgba(100, 101, 102, 0.08);
  border-radius: 0px 0px 0px 4px;
  position: absolute;
  left: 0;
  right: 0;
  top: 36px;
}
.image {
  width: 108px;
  height: 83px;

  position: absolute;
  left: 210px;
  top: 15px;
}
.section_3 {
  padding: 12px 12px 10px;
  background-image: linear-gradient(
    96.7deg,
    rgb(24, 144, 255) 0%,
    rgb(24, 144, 255) -20.69%,
    rgb(71, 167, 255) 117.75%,
    rgb(71, 167, 255) 100%
  );
  border-radius: 4px 4px 0px 0px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.text_5 {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
}
.text_6 {
  margin: 3px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
  line-height: 14px;
  white-space: nowrap;
}
.text {
  color: rgba(153, 153, 153, 0.8);
  font-size: 12px;
  line-height: 17px;
  white-space: nowrap;
}
.text_1 {
  margin-top: 2px;
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  white-space: nowrap;
}
.group_2 {
  margin-top: 15px;
}
.text-wrapper {
  padding: 6px 0;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  background-color: rgb(24, 144, 255);
  border-radius: 4px;
  width: 88px;
  height: 32px;
}
.text_2 {
  color: rgb(102, 102, 102);
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  white-space: nowrap;
}
.text_3 {
  margin-left: 20px;
  color: rgb(102, 102, 102);
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  white-space: nowrap;
}

view,
image,
text {
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
}

.items-end {
  display: flex;
  align-items: flex-end;
}
</style>
