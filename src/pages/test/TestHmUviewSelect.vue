<template>
  <view>
    <Hm-uview-select></Hm-uview-select>
    <Hm-uview-select
      :show="true"
      :list="cList"
      mode="mutil-column-auto"
      cancelColor="#606266"
      confirmColor="#2979ff"
      :defaultValue="[1, 0, 0]"
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
        {
          value: 1,
          label: "中国",
          children: [
            {
              value: 2,
              label: "广东",
              children: [
                {
                  value: 3,
                  label: "深圳",
                },
                {
                  value: 4,
                  label: "广州",
                },
              ],
            },
            {
              value: 5,
              label: "广西",
              children: [
                {
                  value: 6,
                  label: "南宁",
                },
                {
                  value: 7,
                  label: "桂林",
                },
              ],
            },
          ],
        },
        {
          value: 8,
          label: "美国",
          children: [
            {
              value: 9,
              label: "纽约",
              children: [
                {
                  value: 10,
                  label: "中心广场",
                },
              ],
            },
          ],
        },
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
