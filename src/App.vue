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
      console.log('l====',l,l.length)
      if ( l.length > 8) {
        return
      }
      console.log('l1====',l,l.length)
      setTimeout(async () => {
        const res = await this.$getAction('/api/dkn/activityUrl/list', { urlKey: l })
        if (!res.success || res.result.records===0) {
          return
        }
        window.location.href = `${window.location.origin}/${res.result.records[0].urlValue}`
      })
    }
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import "./uni_modules/vk-uview-ui/index.scss";
@import "./static/css/index.css";
</style>
