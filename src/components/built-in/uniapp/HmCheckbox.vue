<template>
  <checkbox-group>
    <label v-for="item in items" :key="item.value">
      <checkbox
        class="checkbox"
        :value="value"
        :checked="item.checked"
        :color="color"
        :disabled="disabled"
        @change="onChange"
      />
      {{item.name}}
    </label>
  </checkbox-group>
</template>
<script>
export default {
  name: "HmCheckbox",
  props: {
    /**
     * 数据
     */
    items: {
      type: Array,
      default: function() {
        return [
          {
            name: "中国",
            checked: true
          },
          {
            name: "俄罗斯",
            checked: false
          },
          {
            name: "美国",
            checked: false
          },
          {
            name: "中国",
            checked: true
          },
          {
            name: "俄罗斯",
            checked: false
          },
          {
            name: "美国",
            checked: false
          }
        ];
      }
    },
    /**
     * 标识
     */
    value: {
      type: String,
      default: "item.value"
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 颜色
     * @type Color
     */
    color: {
      type: String,
      default: "#FFCC33"
    },
    /**
     * 缩放大小
     */
    scale: {
      type: String,
      default: "0.8"
    }
  },
  data() {
    return {
      cScale: ""
    };
  },
  mounted () {
      this.cScale = this.scale;
  },
  methods: {
    onChange() {
      this.$emit("change");
    }
  }
};
</script>
<style scoped>
.checkbox{
  transform:scale(v-bind(cScale));
}
</style>
