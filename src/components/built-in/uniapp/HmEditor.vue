<template>
  <view class="container">
    <editor
      id="editor"
      class="ql-container"
      :placeholder="placeholder"
      :read-only="readOnly"
      @ready="onEditorReady"
    ></editor>
    <button type="warn" @tap="undo">撤销</button>
  </view>
</template>
<script>
export default {
  props: {
    /**
     * 是否设置只读
     */
    readOnly: {
      type: Boolean,
      default: false
    },
    /**
     * 提示信息
     */
    placeholder: {
      type: String,
      default: "开始输入内容"
	},
	
  },
  data() {
    return {};
  },
  methods: {
    onEditorReady() {
      // #ifdef MP-BAIDU
      this.editorCtx = requireDynamicLib("editorLib").createEditorContext(
        "editorId"
      );
      // #endif

      // #ifdef APP-PLUS || H5 ||MP-WEIXIN
      uni
        .createSelectorQuery()
        .select("#editor")
        .context(res => {
          this.editorCtx = res.context;
        })
        .exec();
      // #endif
    },
    undo() {
      this.editorCtx.undo();
    }
  }
};
</script>
<style>
.container {
  padding: 10px;
}

#editor {
  width: 100%;
  height: 300px;
  background-color: #cccccc;
}

button {
  margin-top: 10px;
}
</style>