<script>
import * as HmWxUtils from '/@/utils/hmWxUtils.js';

export default {
  onLaunch: function () {
    console.log('App Launch')
    HmWxUtils.uniStorage();
    // #ifdef MP-WEIXIN
    HmWxUtils.requestWxInfo();
    // #endif
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
/*每个页面公共css */
@import "./uni_modules/vk-uview-ui/index.scss";
@import "./static/css/index.css";
</style>
