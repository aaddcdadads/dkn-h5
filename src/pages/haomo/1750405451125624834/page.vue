<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-b186075d-5075-4af4-b62d-99ae640fb900"
      >
        <package-number-component
          :func-list="[
            {
              id: '1',
              placeholder: '参与人真实姓名+身份证号',
              disabled: false,
            },
            {
              id: '2',
              placeholder: '参与人真实姓名+身份证号',
              disabled: false,
            },
          ]"
          class="ele-b186075d-5075-4af4-b62d-99ae640fb900"
        >
        </package-number-component>
      </view>
      <view
        class="ele-wrapper ele-wrapper-39a6dc97-777e-4b33-95b1-3708bf923e63"
      >
        <registration-form-package-components>
        </registration-form-package-components>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import PackageNumberComponent from "/@/components/dkn-h-5/package-number-component/index.vue";
import RegistrationFormPackageComponents from "/@/components/dkn-h-5/registration-form-package-components/index.vue";

export default {
  name: "Test",
  components: {
    PackageNumberComponent,
    RegistrationFormPackageComponents,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {};
  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-b186075d-5075-4af4-b62d-99ae640fb900 {
  /deep/.input {
    height: 39px !important;
  }
}
</style>
