<template>
  <view>
    <Hm-uview-select></Hm-uview-select>
    <Hm-uview-select
      :show="true"
      :list="cList"
      mode="mutil-column"
      cancelColor="#606266"
      confirmColor="#2979ff"
      :defaultValue="[1, 1]"
      :maskCloseAble="false"
      title="请选择"
      confirmText="选择好了"
      cancelText="不确定"
      childName="children"
      @confirm="confirm"
      @cancel="cancel"
    ></Hm-uview-select>
  </view>
</template>

<script>
import HmUviewSelect from "@/components/built-in/uniapp-uview-vue3/HmUviewSelect.vue";

export default {
  components: { HmUviewSelect },
  data() {
    return {
      cList: [
        [
          {
            value: "1",
            label: "江",
          },
          {
            value: "2",
            label: "湖",
          },
        ],
        [
          {
            value: "3",
            label: "夜",
          },
          {
            value: "4",
            label: "雨",
          },
        ],
      ],
    };
  },
  methods: {
    confirm(e) {
      console.log(e);
    },
    cancel(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="less">
</style>
