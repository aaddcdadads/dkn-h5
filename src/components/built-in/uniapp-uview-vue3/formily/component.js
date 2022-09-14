import { h, defineComponent } from "vue";
import UForm from '@/uni_modules/vk-uview-ui/components/u-form/u-form.vue'
import UFormItem from '@/uni_modules/vk-uview-ui/components/u-form-item/u-form-item.vue'
import UButton from '@/uni_modules/vk-uview-ui/components/u-button/u-button.vue'
import UInput from '@/uni_modules/vk-uview-ui/components/u-input/u-input.vue'
import USwitch from '@/uni_modules/vk-uview-ui/components/u-switch/u-switch.vue'

export const Form = UForm;

export const FormItem = UFormItem;

export const Button = UButton;

export const Input = defineComponent({
  name: 'Input',
  render() {
    const props = this.$attrs
    return h(
      UInput,
      {
        ...props,
        modelValue: props.value
      }
    )
  },
})

export const Switch = defineComponent({
  name: 'Switch',
  render() {
    const props = this.$attrs
    return h(
      USwitch,
      {
        ...props,
        modelValue: props.value
      }
    )
  },
})

export const Span = defineComponent({
  name: 'Span',
  render() {
    const props = this.$attrs
    return h(
      'span',
      {
        ...props,
      },
      props.value
    )
  },
})

export const Pre = defineComponent({
  name: 'Pre',
  render() {
    const props = this.$attrs
    return h(
      'pre',
      {
        ...props,
      },
      props.value
    )
  },
})


export const Img = defineComponent({
  name: 'Img',
  render() {
    const props = this.$attrs
    return h(
      'img',
      {
        ...props,
        src: props.value
      }
    )
  },
})
