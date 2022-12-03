<template>
  <hm-loop :value="data">
    <template #default="{ item }">
      <button
        :size="item.size"
        :plain="item.plain"
        :type="item.type"
        :disabled="item.disabled"
        shape="square"
        @click="onClick"
      >
        {{ item.text }}
      </button>
    </template>
  </hm-loop>
  
</template>

<script>
import HmButton from "@/components/built-in/uniapp/HmButton.vue";
import HmLoop from "@/components/built-in/uniapp-haomo/HmLoop.vue";

export default {
  components: { 
    HmButton,
    HmLoop 
  },
  data() {
    return {
      data: [{
        size: 'mini',
        plain: false,
        type: 'primary',
        disabled: false,
        shape: 'square',
        text: '按钮'
      }, {
        size: 'default',
        plain: false,
        type: 'warn',
        disabled: false,
        shape: 'square',
        text: '按钮'
      }, {
        size: 'mini',
        plain: true,
        type: 'default',
        disabled: true,
        shape: 'square',
        text: '按钮'
      }],
    };
  },
  methods: {
  },
};
</script>

<style lang="less">
</style>
