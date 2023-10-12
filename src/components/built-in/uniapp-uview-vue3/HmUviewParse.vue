<template>
  <u-read-more ref="uReadMore" :toggle="true" :show-height="cNeedHidden ? showHeight : 'auto'" :close-text="closeText"
    :show-text="showText" :allow-click="allowClick" @open="open" @close="close" @onClick="onClick">
    <u-parse v-if="show" :id="[elId]" :html="cData.html" :autopause="autopause" :autoscroll="autoscroll" :autoset-title="autosetTitle"
      :domain="domain" :lazy-load="lazyLoad" :loading-img="loadingImg" :selectable="selectable"
      :show-with-animation="showWithAnimation" :tag-style="tagStyle" :use-anchor="useAnchor" :use-cache="useCache"
      @load="parseLoaded">
    </u-parse>
  </u-read-more>
</template>

<script>
import { cloneDeep } from '/@/utils/util';
export default {
  name: "HmUviewParse",
  props: {
    /**
     * 数据
     */
    data: {
      type: Object,
      default: function () {
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
      default: function () {
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
    /**
     * 是否需要隐藏
     */
    needHidden: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否允许展开
     */
    allowClick: {
      type: Boolean,
      default: true
    },
    /**
     * 展开高度
     */
    showHeight: {
      type: Number,
      default: 0
    },
    /**
     * 关闭文字
     */
    closeText: {
      type: String,
      default: "展开"
    },
    /**
     * 展开文字
     */
    showText: {
      type: String,
      default: "收起"
    },
  },
  data() {
    return {
      show: true,
      cNeedHidden: false,
      cData: {
        html: ''
      },
      elId: this.$u.guid(),
    };
  },
  watch: {
    needHidden(value) {
      this.cNeedHidden = value;
    },
    data: {
      handler: function (val, oldVal) {
        this.show = false;
        this.cData = cloneDeep(val);
        this.show = true;
      },
      deep: true
    }
  },
  mounted() {
    this.show = false;
    this.cNeedHidden = this.needHidden;
    this.cData = cloneDeep(this.data);
    this.show = true;
  },
  methods: {
    parseLoaded() {
      let self = this;
      setTimeout(() => {
        let parse = '#' + self.elId;
        let query = uni.createSelectorQuery().in(this);
        query.select(parse).boundingClientRect()
        query.exec(res => {
          if (res[0].height > uni.upx2px(self.showHeight)) {
            // 自定义的,默认init()是无参数的,传参强制改变状态
            self.$refs.uReadMore.init(res[0].height);
          } else {
            self.$refs.uReadMore.init()
          }
        });
      }, 30);
    },
    open(e) {
      this.$emit("open", e);
    },
    close(e) {
      this.$emit("close", e);
    },
    onClick(e) {
      this.$emit("onClick", e);
    }
  },
};
</script>

<style lang="less"></style>
