  <template>
  <u-collapse
    class="uCollapse"
    :accordion="accordion"
    :arrow="arrow"
    :arrow-color="arrowColor"
    :item-style="itemStyle"
    :head-style="headStyle"
    :body-style="bodyStyle"
    @change="onChange"
  >
    <u-collapse-item
      :align="align"
      v-for="(item, index) in cList"
      :index="index"
      :key="index"
      :open="item.open"
      :disabled="item.disabled"
      :active-style="item.activeStyle"
      :title="item.head"
      @change="onChangeItem"
    >
      <slot :name="`collapse-slot-${index}`">
        <view class="hm-slot" :data-slot-name="`collapse-slot-${index}`">
        </view>
      </slot>
    </u-collapse-item>
  </u-collapse>
</template>

<script>
export default {
  name: "HmDateList",
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "300px",
    },
    /**
     * 手风琴模式
     */
    accordion: {
      type: Boolean,
      default: true,
    },
    /**
     * 右侧箭头
     */
    arrow: {
      type: Boolean,
      default: true,
    },
    /**
     * 箭头颜色
     * @type Color
     */
    arrowColor: {
      type: String,
      default: "#909399",
    },
    /**
     * 行样式
     */
    itemStyle: {
      type: Object,
      default: function () {
        return {
          borderBottom: "1px solid rgb(205, 204, 204)",
        };
      },
    },
    /**
     * 行标题样式
     */
    headStyle: {
      type: Object,
      default: function () {
        return {
          margin: "2px 15px 2px 15px",
          fontSize: "18px",
        };
      },
    },
    /**
     * 行主体样式
     */
    bodyStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 标题对齐方式
     * @type Enum
     * @options ["left","center","right"]
     */
    align: {
      type: String,
      default: "left",
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            head: "单位基本信息",
            open: false,
            disabled: false,
          },
          {
            head: "探测回路类型",
            open: false,
          },
          {
            head: "配电箱",
            open: false,
          },
        ];
      },
    },
  },

  watch: {
    list: {
      handler: function (value, oldValue) {
        this.cList = value;
      },
      deep: true,
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
  },

  mounted() {
    this.cList = this.list;
    this.cWidth = this.width;
  },
  methods: {
    onChange(activeNames) {
      //console.log("activeNames",activeNames);
      this.$emit("onChange", activeNames);
    },
    onChangeItem(active) {
      //console.log("active",active);
      this.$emit("onChangeItem", active);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },

  data() {
    return {
      cList: "",
      cWidth: "",
    };
  },
};
</script>

<style lang="less">
.uCollapse {
  width: v-bind(cWidth);
}
.hm-slot {
  background-color: rgb(235, 238, 240);
  width: 100%;
  height: 100px;
}
</style>
