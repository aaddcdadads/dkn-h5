<template>
  <view>
    <hm-uview-cell
      :list="list1"
      :arrow="true"
      arrowDirection="right"
      :borderBottom="true"
      :borderTop="false"
      bg-color="transparent"
      iconSize="17px"
      @click="onClick"
    ></hm-uview-cell>
    <hm-uview-cell
      :list="list2"
      :arrow="false"
      arrowDirection="up"
      :borderBottom="false"
      :borderTop="true"
      bg-color="#ffefef"
      iconSize="20px"
      @click="onClick"
    ></hm-uview-cell>
  </view>
</template>

<script>
import HmUviewCell from "@/components/built-in/HmUviewCell.vue";

export default {
  components: { HmUviewCell },
  data() {
    return {
      list1: [
        {
            key: 1,
            title: "左侧标题list1",
            icon: "setting-fill",
            required: true,
            label: "标题下方的描述信息list1",
            value: "右侧内容list1",
          },
          {
            key: 2,
            title: "左侧标题list1",
            icon: "setting-fill",
            required: false,
            label: "",
            value: "右侧内容list1",
          }
      ],
      list2: [
        {
            key: 1,
            title: "左侧标题list2",
            icon: "setting-fill",
            required: true,
            label: "标题下方的描述信息list2",
            value: "右侧内容list2",
          },
          {
            key: 2,
            title: "左侧标题list2",
            icon: "setting-fill",
            required: false,
            label: "",
            value: "右侧内容list2",
          }
      ],
    };
  },
  methods: {
    onClick(e) {
      console.log("e", e);
      this.$emit("e", e);
    },
  },
};
</script>

<style lang="less"></style>
