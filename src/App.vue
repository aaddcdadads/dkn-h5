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
  mounted () {
    const currentPath = window.location.href;
    const url = currentPath.split("?");
    console.log('url====',url)
    if (url.length > 1) {
      return
    }
    const lastSegment = currentPath.split(`${window.location.origin}/`);
    console.log('lastSegment====',lastSegment)
    if (lastSegment.length === 2) {
      let l = lastSegment[1]
      const codes = l.split("C")
      window.location.href = `${window.location.origin}/?code=${codes[0]}&channel=${codes[1]}`
    }
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import "./uni_modules/vk-uview-ui/index.scss";
@import "./static/css/index.css";
</style>
