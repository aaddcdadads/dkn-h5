<template>
  <view>
    {{ title }}：
    <u-checkbox-group @change="checkboxGroupChange">
      <u-checkbox
        v-for="(item, index) in cList"
        :key="index"
        v-model="item.checked"
        name="checkboxs"
        :vakue="item.name"
        :disabled="item.disabled"
        @change="checkboxChange(item, index)"
        >{{ item.name }}</u-checkbox
      >
    </u-checkbox-group>
    <!-- <u-button @click="checkedAll">全选</u-button> -->
  </view>
</template>

<script>
export default {
  name: "HmUviewCheckbox",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "多选",
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            key: 1,
            name: "123",
            checked: true,
            disabled: false,
          },
          {
            key: 2,
            name: "321",
            checked: false,
            disabled: false,
          },
          {
            key: 3,
            name: "44",
            checked: false,
            disabled: false,
          },
        ];
      },
    },
  },
  data() {
    return {
      cList: [
        {
            key: 1,
            name: "123",
            checked: true,
            disabled: false,
          },
          {
            key: 2,
            name: "321",
            checked: false,
            disabled: false,
          },
          {
            key: 3,
            name: "44",
            checked: false,
            disabled: false,
          },
      ],
    };
  },
  watch: {
    list(value) {
      this.cList = value;
    },
  },
  mounted() {
    this.cList = this.list;
  },
  methods: {
    // 选中某个复选框时，由checkbox时触发
    checkboxChange(e, index) {
      this.$emit("checkboxChange", e);
      console.log("0", e);
      this.cList[index].checked = !e.checked;
      console.log("1", e);
    },
    // 选中任一checkbox时，由checkbox-group触发
    checkboxGroupChange(e) {
      console.log("2", e);
      this.$emit("checkboxGroupChange", e);
    },
    // 全选
    // checkedAll() {
    //   this.list.map(val => {
    //     val.checked = true;
    //   });
    // }
  },
};
</script>

<style lang="less">
</style>
