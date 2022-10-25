<template>
    <!-- 瀑布流 -->
    <hm-image-card-list class="test1" showMode="waterfallFlow" :imgsList="list">
    </hm-image-card-list>
    <!-- 单列 -->
    <hm-image-card-list class="test2" showMode="singleColumn" :imgsList="list">
    </hm-image-card-list>
</template>
<script>
import HmImageCardList from "@/components/built-in/uniapp-haomo/HmImageCardList.vue";
export default {
    components: { HmImageCardList },
    data() {
        return {
            list: [
                {
                id: "1",
                imghref: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi2%2F1875411720%2FO1CN01UcMFyq1OZntRgFFU2_%21%211875411720.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668564849&t=c24b9ed6666906d828da99179e4dd94b",
                title: "这是一段比较长的描述标题,超出两行才出现省略号",
                text: "长"
            },
            {
                id: "2",
                imghref: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi2%2F1875411720%2FO1CN01UcMFyq1OZntRgFFU2_%21%211875411720.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668564849&t=c24b9ed6666906d828da99179e4dd94b",
                title: "这是一段比较长的描述标题,超出两行才出现省略号",
                text: "长"
            },
            {
                id: "3",
                imghref: "https://img0.baidu.com/it/u=3182847715,4123160739&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=424",
                title: "较短",
                text: "这是描述文字，超出一行就出现省略号"
            },
            {
                id: "4",
                imghref: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.defanli.com%2Fi2%2F1875411720%2FO1CN01UcMFyq1OZntRgFFU2_%21%211875411720.jpg_q90.jpg&refer=http%3A%2F%2Fimg.defanli.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668564849&t=c24b9ed6666906d828da99179e4dd94b",
                title: "这是一段比较长的描述标题,超出两行才出现省略号",
                text: "长"
            }
        ]
        }
    }
}
</script>
<style scoped>
.test1 {
    background: red;
}

.test2 {
    background: green;
}
</style>