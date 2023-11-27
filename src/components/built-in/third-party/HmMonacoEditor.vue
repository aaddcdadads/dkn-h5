<template>
  <view class="content">
    <elvis-code
      ref="elvisEditor"
      :height="height"
      :options="options"
      :width="width"
      :code="code"
    ></elvis-code>
  </view>
</template>

<script>
import ElvisCode from "@/uni_modules/elvis-code/components/elvis-code/elvis-code.vue";
export default {
  components: {
    ElvisCode,
  },
  props: {
    /**
     * 高
     */
    height: {
      type: String,
      default: "500px",
    },
    /**
     * 宽
     */
    width: {
      type: String,
      default: "100%",
    },
    /**
     * 编辑器配置
     */
    options: {
      type: Object,
      default: function () {
        return {
          // 默认主题 vs,vs-dark,hc-black
          theme: "vs-dark",
          // value: "",
          // 编辑器语言'javascript', 'yaml', 'json', 'xml'
          language: "javascript",
          // 是否折叠
          folding: true,
          // 折叠等高线
          foldingHighlight: true,
          // 折叠方式  auto | indentation
          foldingStrategy: "",
          // 是否一直显示折叠 always | mouseover
          showFoldingControls: "always",
          // 等宽优化
          disableLayerHinting: true,
          // 空选择剪切板
          emptySelectionClipboard: false,
          // 选择剪切板
          selectionClipboard: false,
          // 自动布局
          automaticLayout: true,
          // 代码镜头
          codeLens: false,
          // 滚动完最后一行后再滚动一屏幕
          scrollBeyondLastLine: false,
          // 颜色装饰器
          colorDecorators: false,
          // 辅助功能支持  "auto" | "off" | "on"
          accessibilitySupport: "off",
          // 行号 取值： "on" | "off" | "relative" | "interval" | function
          lineNumbers: "on",
          // 行号最小字符   number
          lineNumbersMinChars: 5,
          enableSplitViewResizing: false,
        };
      },
    },
    /**
     * 代码
     */
    code: {
      type: String,
      default: `<div>
  <p>毫末</p>
  <p>毫末</p>
  <p>毫末</p>
  <p>毫末</p>
  <p>毫末</p>
</div>`,
    },
  },
  watch: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
