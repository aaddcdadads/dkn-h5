<template>
  <view>
    <hm-monaco-editor
      :code="code"
      width="100%"
      height="400px"
      :options="options"
    ></hm-monaco-editor>
  </view>
</template>

<script>
import HmMonacoEditor from "@/components/built-in/third-party/HmMonacoEditor.vue";
export default {
  components: {
    HmMonacoEditor,
  },
  data() {
    return {
      code: `setTimeout(\'alert("hello elvis-code")\', 3000)`,
      options: {
        theme: "vs-dark",
        // 编辑器语言'javascript', 'yaml', 'xml'
        language: "xml",
        //    value:`<div><p>毫末</p> <p>毫末</p><p>毫末</p><p>毫末</p> <p>毫末</p> </div>`,
        // 是否折叠
        folding: true,
        // 折叠等高线
        foldingHighlight: true,
        // 折叠方式  auto | indentation
        foldingStrategy: "auto",
        // 是否一直显示折叠 always | mouseover
        showFoldingControls: "mouseover",
        // 等宽优化
        disableLayerHinting: false,
        // 空选择剪切板
        emptySelectionClipboard: true,
        // 选择剪切板
        selectionClipboard: false,
        // 自动布局
        automaticLayout: true,
        // 代码镜头
        codeLens: true,
        // 滚动完最后一行后再滚动一屏幕
        scrollBeyondLastLine: true,
        // 颜色装饰器
        colorDecorators: true,
        // 辅助功能支持  "auto" | "off" | "on"
        accessibilitySupport: "on",
        // 行号 取值： "on" | "off" | "relative" | "interval" | function
        lineNumbers: "on",
        // 行号最小字符   number
        lineNumbersMinChars: 3,
        enableSplitViewResizing: true,
      },
    };
  },
};
</script>
