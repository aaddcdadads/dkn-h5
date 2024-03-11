<template>
  <view>
    <rate></rate>
    <rate :value="rate.value" :label="rate.label" :displayText="rate.displayText"></rate>
  </view>
</template>
<script>
import rate from "@/components/built-in/uniapp-haomo/HmUniappRate.vue";
export default {
  components: { rate },
  data() {
    return {
      rate: {
        label: "星级",
        value: 3,
        displayText:{
          show:true,
          format:"return (value * 2) + '星'",
          style:{
            color:'#000',
            fontWeight:'600'
          }
        }
      },
    };
  },
};
</script>