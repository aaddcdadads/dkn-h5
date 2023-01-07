<template>
  <u-parse
    :html="cContent.html"
    :autopause="autopause"
    :autoscroll="autoscroll"
    :autoset-title="autosetTitle"
    :domain="domain"
    :lazy-load="lazyLoad"
    :loading-img="loadingImg"
    :selectable="selectable"
    :show-with-animation="showWithAnimation"
    :tag-style="tagStyle"
    :use-anchor="useAnchor"
    :use-cache="useCache">
    </u-parse>
</template>

<script>
import { cloneDeep } from '/@/utils/util';

export default {
  name: "HmUviewParse",
  props: {
    /**
     * 数据
     */
    content: {
      type: Object,
      default: function() {
        return {
          html: '<h1 style="text-align: center;">新闻</h1><h2 style="text-align: center;">作者：胡小根</h2><p> &nbsp; &nbsp;这是正文。</p><p> &nbsp; &nbsp;这是结尾。</p>',
        }
      } 
    },
    /**
     * 暂停其他播放
     */
    autopause: {
      type: Boolean,
      default: true,
    },
    /**
     * 表格单独滚动
     */
    autoscroll: {
      type: Boolean,
      default: false,
    },
    /**
     * title设置为标题
     */
    autosetTitle: {
      type: Boolean,
      default: true,
    },
    /**
     * 主域名
     */
    domain: {
      type: String,
      default: "",
    },
    /**
     * 图片懒加载
     */
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    /**
     * 图片占位图
     */
    loadingImg: {
      type: String,
      default: "",
    },
    /**
     * 允许长按复制
     */
    selectable: {
      type: Boolean,
      default: true,
    },
    /**
     * 使用渐显动画
     */
    showWithAnimation: {
      type: Boolean,
      default: true,
    },
    /**
     * 标签默认样式
     */
    tagStyle: {
      type: Object,
      default: function() {
        return {};
      },
    },
    /**
     * 页面内锚点
     */
    useAnchor: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否使用缓存
     */
    useCache: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cContent: {
        html: ''
      }
    };
  },
  watch: {
    content: {
      handler: function(val, oldVal) {
        this.cContent = cloneDeep(val);
      },
      deep: true
    }
  },
  mounted() {
    this.cContent = cloneDeep(this.content);
  },
  methods: {
  },
};
</script>

<style lang="less">
</style>
