<template>
  <view
    :id="componentId"
    :style="blockStyle"
    class="hm-block"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
    :class="{ active: active, select: select }"
  >
    <slot></slot>
  </view>
</template>

<script>
import { toCamelCase } from '/@/utils/util';

export default {
  name: "HmBlock",
  components: {
  },
  props: {
    style: {
      type: String,
      default: "background-color: white;",
    },
    select: {
      type: Boolean,
      default: false,
    },
    componentId: {
      type: String,
    },
  },
  data() {
    return {
      active: false,
      widthStyle: "",
    };
  },
  computed: {
    blockStyle() {
      return this.convertCssToVueStyle(this.widthStyle + this.style);
    },
  },
  mounted() {
    console.log("HmBlock key", this.componentId);
    this.adjustWidth();
  },
  methods: {
    mouseover() {
      this.active = true;
    },
    mouseleave() {
      this.active = false;
    },
    deleteComponent() {
      this.$emit("deleteComponent", this.componentId);
    },
    /**
     * 若子组件的宽度为100%(此时实际宽度为0)，那么调整HmBlock的宽度为100%；
     */
    adjustWidth() {
      if (this.$el.children.length === 0) {
        return;
      }

      // console.log(this.$el.children[0].offsetWidth);
      // if (this.$el.children[0].offsetWidth === 0) {
      //   this.widthStyle = "width: 100%;";
      //   console.log(`before force update`);
      //   this.$forceUpdate();
      //   console.log(`after force update`);
      // }
    },
    convertCssToVueStyle(css) {
      if (!css) {
        return {
          backgroundColor: "inherit",
        };
      }

      let items = css.split(";");
      let style = {};
      items.forEach(item => {
        let cssItem = item.trim();
        if (!cssItem) {
          return;
        }

        if (cssItem.split(":").length < 2) {
          return;
        }
        style[toCamelCase(cssItem.split(":")[0].trim())] = cssItem.split(":")[1].trim();
      });
      return style;
    },
  },
};
</script>
<style scoped>
.hm-block {
  display: inline-block;
  min-height: 30px;
  min-width: 30px;
  border: 1px dashed rgba(255, 0, 0, 0.8);
  background-color: inherit;

  /* background: rgb(249, 252, 255); */
  /* border:1px dashed black; */
}

.hm-block.active {
  outline: 1px solid #409eff;
  background: rgb(237, 245, 255);
}
.select {
  outline: 2px solid #409eff;
  border: 1px solid #409eff;
}
.view-action {
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 24px;
  line-height: 28px;
  background: #409eff;
  z-index: 9;
}
.view-drag {
  position: absolute;
  left: -2px;
  top: -2px;
  bottom: -18px;
  height: 24px;
  line-height: 24px;
  background: #409eff;
  z-index: 9;
}
.anticon {
  font-size: 14px;
  color: #fff;
  margin: 0 5px;
  cursor: pointer;
}
</style>
