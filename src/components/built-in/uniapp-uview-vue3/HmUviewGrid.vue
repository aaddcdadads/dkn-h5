<template>
  <u-row
    type="flex"
    :align="align"
    :justify="justify"
    class="hm-grid"
    ref="hmGrid"
  >
    <u-col v-for="col in cols" :key="col.key" :span="col.span">
      <view class="ant-col-slot">
        <slot :name="`ant-col-slot-${col.key}`">
          <view class="hm-slot" :data-slot-name="`ant-col-slot-${col.key}`"
            ><view class="sortable-list"></view
          ></view>
        </slot>
      </view>
    </u-col>
  </u-row>
</template>

<script>
export default {
  name: "HmUviewGrid",
  components: {},
  props: {
    /**
     * 列数
     */
    colNum: {
      type: Number,
      default: 3,
    },
    /**
     * 列宽
     */
    colSpans: {
      type: String,
      default: "4 4 4",
    },
    /**
     * 垂直对齐
     * @type Enum
     * @options ["top", "center", "bottom"]
     */
    align: {
      type: String,
      default: "center",
    },
    /**
     * 水平排列
     * @type Enum
     * @options ["flex-start", "flex-end", "center", "space-between", "space-around"]
     */
    justify: {
      type: String,
      default: "space-between",
    },
  },
  data() {
    return {
      cColNum: 3,
      cColSpans: "8 8 8",
      cJustify: "space-between",
    };
  },
  watch: {
    colSpans(value) {
      this.cColSpans = value;
    },
  },
  computed: {
    cols() {
      let ret = [];
      let spans = this.cColSpans.split(" ");
      for (let i = 0; i < this.cColNum; i++) {
        ret.push({
          key: i,
          span: spans[i],
        });
      }
      console.log(`cols: `, ret);
      return ret;
    },
  },
  mounted() {
    this.cColNum = this.colNum;
    this.cColSpans = this.colSpans;
    this.cJustify = this.justify;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style scoped>
.hm-grid {
  width: 100%;
  min-width: 50vw;
  min-height: 10vh;
}

.ant-col-slot {
  min-height: 10vh;
  width: 100%;
}

.hm-grid .ant-col {
  display: flex;
  height: 100%;
}

.hm-grid .ant-col:hover {
  background: rgba(253, 71, 52, 0.1) !important;
}

.hm-grid .ant-col:empty {
  min-height: 10vh;
  background-color: white;
  border: 1px dashed #eee;
}
</style>