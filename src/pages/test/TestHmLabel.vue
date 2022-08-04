<template>
  <checkbox-group class="uni-list" @change="checkboxChange">
    <label
      class="uni-list-cell uni-list-cell-pd"
      v-for="item in checkboxItems"
      :key="item.name"
    >
      <view>
        <checkbox :value="item.name" :checked="item.checked"></checkbox>
      </view>
      <view>{{ item.value }}</view>
    </label>
  </checkbox-group>
</template>

<script>
import HmLabel from "@/components/built-in/uniapp/HmLabel.vue";

export default {
  components: { HmLabel },
  data() {
    return {
      checkboxItems: [
        {
          name: "USA",
          value: "美国",
        },
        {
          name: "CHN",
          value: "中国",
          checked: "true",
        },
      ],
    };
  },
  props: {
    /**
     * 默认配置项
     */
    checkboxItems: {
      type: Array,
      default: function () {
        return [
          {
            name: "USA",
            value: "美国",
          },
          {
            name: "CHN",
            value: "中国",
            checked: "true",
          },
        ];
      },
    },
  },
  methods: {
    /**
     * 点击选项触发
     */
    checkboxChange: function (e) {
      console.log(e);
      var checked = e.target.value;
      var changed = {};
      for (var i = 0; i < this.checkboxItems.length; i++) {
        if (checked.indexOf(this.checkboxItems[i].name) !== -1) {
          changed["checkboxItems[" + i + "].checked"] = true;
        } else {
          changed["checkboxItems[" + i + "].checked"] = false;
        }
      }
    },
  },
};
</script>

<style lang="less">
</style>
