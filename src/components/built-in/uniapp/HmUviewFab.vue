<template>
    <uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
        :direction="direction" :popMenu="popMenu" @trigger="trigger" 
        @fabClick="popMenu && fabClick($event)" 
        @click="!popMenu && addClick($event)"/>
</template>
<script>
export default {
    name: "HmUviewFab",
    props: {
        /**
         * 样式配置
         */
        pattern: {
            type: Object,
            default: function () {
                return {
                    color: '#7A7E83',
                    backgroundColor: '#fff',
                    selectedColor: '#007AFF',
                    buttonColor: '#007AFF',
                    iconColor: '#fff'
                }
            }
        },
        /**
         * 水平对齐方式
         * @type Enum
         * @options ["left","right"]
         */
        horizontal: {
            type: String,
            default: "left"
        },
        /**
         * 垂直对齐方式
         * @type Enum
         * @options ["top","bottom"]
         */
        vertical: {
            type: String,
            default: "bottom"
        },
        /**
         * 使用弹出菜单
         */
        popMenu: {
            type: Boolean,
            default: true
        },
        /**
         * 展开菜单配置
         */
        content: {
            type: Array,
            default: function () {
                return [
                    {
                        iconPath: '/static/logo.png',
                        selectedIconPath: '/static/image-active.png',
                        text: '相册',
                        active: false
                    },
                    {
                        iconPath: '/static/logo.png',
                        selectedIconPath: '/static/home-active.png',
                        text: '首页',
                        active: false
                    },
                    {
                        iconPath: '/static/logo.png',
                        selectedIconPath: '/static/star-active.png',
                        text: '收藏',
                        active: false
                    }
                ]
            }
        },
        /**
         * 菜单展示方式
         * @type Enum
         * @options ["horizontal","vertical"]
         */
        direction: {
            type: String,
            default: "horizontal"
        }
    },
    data() {
        return {

        }
    },
    methods: {
        trigger(e) {
            this.$emit("trigger", e);
            console.log("trigger", e);
        },
        fabClick(e) {
            this.$emit("fabClick", e);
             console.log("fabClick", e);
        },
        addClick(e) {
            this.$emit("addClick", e);
            console.log("addClick", e);
        },
    }
}
</script>