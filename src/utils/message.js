import toast from '/@/components/built-in/uniapp-uview-vue3/HmUviewToast.vue';
// import toast from '/@/uni_modules/vk-uview-ui/components/u-toast/u-toast.vue'
import { createVNode, render } from 'vue'

// const divVNode = createVNode('div', { class: 'message' })
// render(divVNode, document.body)

// const div = divVNode.el

const message = (options) => {
    // 1. 动态创建虚拟DOM  -  createVNode(h) 函数
    const comVNode = createVNode(toast, options)
    // 2. 渲染到body页面中 -  render 函数
    render(comVNode, document.body)

}
export default message
