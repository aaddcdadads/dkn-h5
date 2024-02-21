<template>
  <hm-calendar ref="calendar"></hm-calendar>
  <button @click="open">打开日历</button>
</template>
<script>
import HmCalendar from "@/components/built-in/uniapp/HmCalendar.vue";
export default {
  components: {
    HmCalendar,
  },
  methods: {
    open() {
      this.$refs.calendar.open();
      console.log("open2");
    },
  },
};
</script>