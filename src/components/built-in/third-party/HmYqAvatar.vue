<template>
  <view style="position: fixed; width: 100%; height: 100%">
    <avatar
      ref="avatar"
      :noTab="noTab"
      :selWidth="selWidth"
      :selHeight="selHeight"
      :avatarSrc="avatarSrc"
      :expWidth="expWidth"
      :expHeight="expHeight"
      :quality="quality"
      :inner="inner"
      :avatarStyle="avatarStyle"
      :index="index"
      :fileType="fileType"
      :minScale="minScale"
      :maxScale="maxScale"
      :canRotate="canRotate"
      :canScale="canScale"
      :stretch="stretch"
      :lock="lock"
      @upload="myUpload"
      @init="init"
      @end="end"
    >
    </avatar>
  </view>
</template>
<script>
import avatar from "../../../uni_modules/yq-avatar/yq-avatar";
export default {
  components: {
    avatar,
  },
  props: {
    /**
     * 裁剪区域宽
     */
    selWidth: {
      type: String,
      default: "250px",
    },
    /**
     * 裁剪区域高
     */
    selHeight: {
      type: String,
      default: "250px",
    },
    /**
     * 是否存在tabBar
     */
    noTab: {
      type: Boolean,
      default: true,
    },
    /**
     * 头像地址
     */
    avatarSrc: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/haomo-hql/haomo/210924233115O14-0-lp.jpeg",
    },
    /**
     * 头像样式
     */
    avatarStyle: {
      type: String,
      default: function () {
        return "width:150px;height:150px;margin:10px";
      },
    },
    /**
     * 设置导出图片宽度
     */
    expWidth: {
      type: String,
      default: "200px",
    },
    /**
     * 设置导出图片高度
     */
    expHeight: {
      type: String,
      default: "200px",
    },
    /**
     * 禁用移动与旋转
     */
    inner: {
      type: Boolean,
      default: false,
    },
    /**
     * 生成图片质量
     */
    quality: {
      type: Number,
      default: 0.1,
    },
    /**
     * 索引
     */
    index: {
      type: String,
    },
    /**
     * 报错图片格式
     */
    fileType: {
      type: String,
      default: "png",
    },
    /**
     * 缩放允许的最小比例
     */
    minScale: {
      type: Number,
      default: 0.9,
    },
    /**
     * 缩放允许最大比例
     */
    maxScale: {
      type: Number,
      default: 3,
    },
    /**
     * 是否允许旋转
     */
    canRotate: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否允许缩放
     */
    canScale: {
      type: Boolean,
      default: true,
    },
    /**
     * 图片铺满裁剪框
     * @type Enum
     * @options ["x", "y", "long", "short","longSel","shortSel"]
     */
    stretch: {
      type: String,
      default: "",
    },
    /**
     * 锁定图片移动方向
     *	@type Enum
     * @options ["x", "y", "long", "short","longSel","shortSel"]
     */
    lock: {
      type: String,
      default: "",
    },
  },
	watch:{},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    myUpload(rsp) {
			this.$emit("upload",rsp);
    },
    init() {
      this.$emit("init");
    },
    end() {
      this.$emit("end");
    },
  },
};
</script>

<style>
</style>
