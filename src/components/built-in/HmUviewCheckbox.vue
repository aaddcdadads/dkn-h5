<template>
  <view>
    <view class="checkbox-class">
      {{ title }}：
      <u-checkbox-group @change="checkboxGroupChange">
        <u-checkbox
          @change="checkboxChange"
          v-model="item.checked"
          v-for="(item, index) in list"
          :key="index"
          :name="item.name"
          >{{ item.name }}</u-checkbox
        >
      </u-checkbox-group>
      <!-- <u-button @click="checkedAll">全选</u-button> -->
    </view>
  </view>
</template>

<script>
// import uCheckbox from "uview-ui/components/u-checkbox/u-checkbox";
// import uCheckboxGroup from "uview-ui/components/u-checkbox-group/u-checkbox-group";
export default {
  components: {},
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
            name: "123",
            checked: true,
            disabled: false,
          },
          {
            name: "321",
            checked: false,
            disabled: false,
          },
          {
            name: "44",
            checked: false,
            disabled: false,
          },
        ];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    // 选中某个复选框时，由checkbox时触发
    checkboxChange(e) {
      console.log("1", e);
      this.$emit("checkboxChange", e);
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
