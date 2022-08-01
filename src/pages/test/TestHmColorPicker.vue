<template>
  <view>
    <!-- <hm-color-picker
    ></hm-color-picker>-->
    <br />
    <view>
      <hm-color-picker v-model:value="value" :width="300"></hm-color-picker>
    </view>
    {{value}}
  </view>
</template>

<script>
import HmColorPicker from '@/components/built-in/uniapp/HmColorPicker.vue';
export default {
  components: {
    HmColorPicker
  },
  data() {
    return {
      value: '#693939',
    };
  },
  methods: {
    colorChange(val) {
      // this.value = val
      console.log(val, 'val');
    }
  }
}
</script>

<style lang="less">
</style>
