<template>
  <view>
    <mp-html
      :content="content"
      :container-style="containerStyle"
      :copy-link="copyLink"
      :domain="domain"
      :error-img="errorImg"
      :lazy-load="lazyLoad"
      :loading-img="loadingImg"
      :pause-video="pauseVideo"
      :preview-img="previewImg"
      :scroll-table="scrollTable"
      :selectable="selectable"
      :set-title="setTitle"
      :show-img-menu="showImgMenu"
      :tag-style="tagStyle"
      :use-anchor="useAnchor"
      @load="load"
      @ready="ready"
      @error="error"
      @imgtap="imgtap"
      @linktap="linktap"
      @play="play"
    />
  </view>
</template>
<script>
import mpHtml from "mp-html/dist/uni-app/components/mp-html/mp-html";
export default {
  components: {
    mpHtml,
  },
  props: {
    /**
     * 容器的样式
     */
    containerStyle: {
      type: String,
      default: "font-size: 18px;",
    },
    /**
     * 用于渲染的 html 字符串
     */
    content: {
      type: String,
      default:function(){
        return `<div>
        <title>uniApp</title>
        <p style="text-align: center;" id="text">Hello World!</p>
        <section style="text-align: center; margin: 0px auto; margin-top: 0.5em;">
          <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;margin-bottom: 2em;">
            <span style="font-size: 18px; color: #595959;">图片</span>
          </section> 
          <img style="width:300px;" src='https://img0.baidu.com/it/u=2136891175,1458697858&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1702486800&t=6b43c417ef2b2855b53fe1bcf71d4485'/>
        </section>
        </div>
        <section style="text-align: center; margin: 0px auto; margin-top: 0.5em;">
            <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;margin-bottom: 1em;">
              <span style="font-size: 18px; color: #595959;">图片</span>
         </section>
         <video src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4" enable-danmu danmu-btn controls></video>
        </section>  
        <section style="margin-top: 1em;text-align: center;">
          <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;margin-bottom: 1em;">
            <span style="font-size: 18px; color: #595959;">表格</span>
          </section> 
          <table width="100%" cellspacing="0" cellpadding="5">
             <thead>
              <tr>
               <th align="center">标题 1</th>
               <th align="center">标题 2</th>
               <th align="center">标题 3</th>
              </tr>
             </thead>
            <tbody>
             <tr>
              <td align="center" colspan="2">内容 1</td>
              <td align="center" rowspan="2">内容 2</td>
             </tr>
            <tr>
              <td align="center" rowspan="2">内容 3</td>
              <td align="center">内容 4</td>
            </tr>
            <tr>
              <td align="center" colspan="2">内容 5</td>
            </tr>
            <tr>
             <td align="center">内容 6</td>
             <td align="center">内容 7</td>
             <td align="center"><a>链接</a></td>
            </tr>
           </tbody>
           </table>
           <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">含有合并单元格的表格</div>
          </section> 
            <p style="text-align: center;margin-top:0.5em"><a href="#text">跳转到列表</a></p>`
      } 
    },
    /**
     * 链接被点击时自动复制
     */
    copyLink: {
      type: Boolean,
      default: true,
    },
    /**
     * 主域名
     */
    domain: {
      type: String,
      default: "https://mp-html.oss-cn-hangzhou.aliyuncs.com",
    },
    /**
     * 出错时占位图
     */
    errorImg: {
      type: String,
      default: "",
    },
    /**
     * 开启图片懒加载
     */
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    /**
     * 加载时占位图链接
     */
    loadingImg: {
      type: String,
      default: "",
    },
    /**
     * 暂停其他视频
     */
    pauseVideo: {
      type: Boolean,
      default: true,
    },
    /**
     * 点击时可预览
     */
    previewImg: {
      type: Boolean,
      default: true,
    },
    /**
     * 表格能横向滚动
     */
    scrollTable: {
      type: Boolean,
      default: false,
    },
    /**
     * 文本长按复制
     */
    selectable: {
      type: Boolean,
      default: false,
    },
    /**
     * title标签页面标题
     */
    setTitle: {
      type: Boolean,
      default: true,
    },
    /**
     *  长按图片显示菜单
     */
    showImgMenu: {
      type: Boolean,
      default: true,
    },
    /**
     * 标签默认样式
     */
    tagStyle: {
      type: Object,
      default: function () {
        return {
          table: 'box-sizing: border-box; border-top: 1px solid #dfe2e5; border-left: 1px solid #dfe2e5;',
					th: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
					td: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
        };
      },
    },
    /**
     * 使用锚点链接
     */
    useAnchor: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      html: "",
    };
  },
  methods: {
    load() {
      this.$emit("load");
    },
    ready(e) {
      this.$emit("ready", e);
    },
    error(e) {
      this.$emit("error", e);
    },
    imgtap(e) {
      this.$emit("imgtap", e);
    },
    linktap(e) {
      this.$emit("linktap", e);
    },
    play() {
      this.$emit("play");
    },
  },
};
</script>