<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-listPageCard">
        <hm-uview-bg-card
          ref="listPageCard"
          width="100%"
          height="100%"
          border-radius=""
          padding=""
          box-shadow-color="#00000000"
          class="ele-listPageCard"
        >
          <view class="ele-wrapper ele-wrapper-filterCard">
            <hm-uview-bg-card
              ref="filterCard"
              width="100%"
              height=""
              border-radius=""
              padding=""
              box-shadow-color="#00000000"
              class="ele-filterCard"
            >
              <view class="ele-wrapper ele-wrapper-pointTaskFilter">
                <hm-uview-filter
                  ref="pointTaskFilter"
                  :sort-option="pointTaskFilter.sortOption"
                  :filter-option="pointTaskFilter.filterOption"
                  :key-column="pointTaskFilter.keyColumn"
                  @search="onPointTaskFilterSearch"
                  class="ele-pointTaskFilter"
                >
                </hm-uview-filter>
              </view>
            </hm-uview-bg-card>
          </view>
          <view class="ele-wrapper ele-wrapper-pointTaskList">
            <hm-swipe-list
              ref="pointTaskList"
              @bindClick="onPointTaskListBindClick"
              @scrolltolower="onPointTaskListScrolltolower"
              @refresherrefresh="onPointTaskListRefresherrefresh"
              class="ele-pointTaskList"
            >
              <template #default="{ item }">
                <view class="ele-wrapper ele-wrapper-itemTest">
                  <hm-uview-button ref="itemTest" :text="item.title">
                  </hm-uview-button>
                </view>
              </template>
            </hm-swipe-list>
          </view>
          <view class="ele-wrapper ele-wrapper-editPointTaskPopup">
            <hm-uview-popup
              ref="editPointTaskPopup"
              v-model:show="editPointTaskPopup.show"
              width="100%"
              height="100%"
            >
              <view class="ele-wrapper ele-wrapper-editPointTaskForm">
                <hm-uview-formily
                  ref="editPointTaskForm"
                  :schema="editPointTaskForm.schema"
                  class="ele-editPointTaskForm"
                >
                </hm-uview-formily>
              </view>
              <view class="ele-wrapper ele-wrapper-cancel">
                <hm-uview-button
                  ref="cancel"
                  :type="cancel.type"
                  :text="cancel.text"
                  :custom-style="cancel.customStyle"
                  @click="onCancelClick"
                >
                </hm-uview-button>
              </view>
              <view class="ele-wrapper ele-wrapper-submit">
                <hm-uview-button
                  ref="submit"
                  :type="submit.type"
                  :text="submit.text"
                  :custom-style="submit.customStyle"
                  @click="onSubmitClick"
                >
                </hm-uview-button>
              </view>
            </hm-uview-popup>
          </view>
          <view class="ele-wrapper ele-wrapper-deletePointTaskModal">
            <hm-uview-modal
              ref="deletePointTaskModal"
              v-model:visible="deletePointTaskModal.visible"
              title="删除"
              height="60px"
              @onConfirm="onDeletePointTaskModalOnConfirm"
              @onCancel="onDeletePointTaskModalOnCancel"
            >
              <view class="ele-wrapper ele-wrapper-viewModalText">
                <hm-uview-text
                  ref="viewModalText"
                  text="是否确认删除？"
                  font-size="14px"
                  class="ele-viewModalText"
                >
                </hm-uview-text>
              </view>
            </hm-uview-modal>
          </view>
          <view
            class="ele-wrapper ele-wrapper-6bd00a02-f6b1-4836-957f-c36aa7db3b3b"
          >
            <hm-uview-button
              @click="onEle6Bd00A02F6B14836957FC36Aa7Db3B3BClick"
              class="ele-6bd00a02-f6b1-4836-957f-c36aa7db3b3b"
            >
            </hm-uview-button>
          </view>
        </hm-uview-bg-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmUviewBgCard from "/@/components/built-in/uniapp-uview-vue3/HmUviewBgCard.vue";
import HmUviewFilter from "/@/components/built-in/uniapp-uview-vue3/HmUviewFilter.vue";
import HmSwipeList from "/@/components/built-in/uniapp-haomo/HmSwipeList.vue";
import HmUviewButton from "/@/components/built-in/uniapp-uview-vue3/HmUviewButton.vue";
import HmUviewPopup from "/@/components/built-in/uniapp-uview-vue3/HmUviewPopup.vue";
import HmUviewFormily from "/@/components/built-in/uniapp-uview-vue3/HmUviewFormily.vue";
import HmUviewModal from "/@/components/built-in/uniapp-uview-vue3/HmUviewModal.vue";
import HmUviewText from "/@/components/built-in/uniapp-uview-vue3/HmUviewText.vue";


export default {
  name: "ListPage",
  components: {
    HmUviewBgCard,
    HmUviewFilter,
    HmSwipeList,
    HmUviewButton,
    HmUviewPopup,
    HmUviewFormily,
    HmUviewModal,
    HmUviewText,
  },
  data() {
    let self = this;
    return {
      pointTaskParams: {},
      editPointTaskPopup: {
        show: false,
      },
      deletePointTaskModal: {
        visible: false,
      },
      pointTaskFilter: {
        sortOption: [],
        filterOption: [
          {
            name: "备注",
            code: "remark",
            type: "Input",
            show: true,
          },
        ],
        keyColumn: "name",
      },
      itemTest: {
        text: "按钮",
      },
      editPointTaskForm: {
        schema: {
          type: "object",
          properties: {
            form: {
              type: "void",
              "x-component": "Form",
              "x-component-props": {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                },
              },
              properties: {
                name: {
                  type: "string",
                  maxLength: 1,
                  default: "",
                  "x-decorator": "FormItem",
                  "x-decorator-props": {
                    label: "姓名",
                    name: "name",
                    style: {
                      width: "100%",
                    },
                    "label-col": {
                      span: 2,
                    },
                    "wrapper-col": {
                      span: 14,
                    },
                    class: ["required"],
                  },
                  "x-component": "Input",
                  "x-component-props": {},
                },
                remark: {
                  type: "string",
                  maxLength: 1,
                  default: "",
                  "x-decorator": "FormItem",
                  "x-decorator-props": {
                    label: "备注",
                    name: "remark",
                    style: {
                      width: "100%",
                    },
                    "label-col": {
                      span: 2,
                    },
                    "wrapper-col": {
                      span: 14,
                    },
                    class: ["required"],
                  },
                  "x-component": "Input",
                  "x-component-props": {},
                },
              },
            },
          },
        },
      },
      cancel: {
        type: "error",
        text: "取消",
        customStyle: {},
      },
      submit: {
        type: "primary",
        text: "提交",
        customStyle: {},
      },
    };
  },
  watch: {},
  mounted(e) {
    this.onMounted(e);
  },
  methods: {
    onMounted() {
      //当前页
      this.pointTaskPageNo = 1;
    },

    onPointTaskFilterSearch(item) {
      console.log("item", item);
      //当前页
      this.pointTaskPageNo = 1;
      //当前筛选项
      this.pointTaskParams = {};
      if (item.filter.name) {
        this.pointTaskParams.name = item.filter.name;
      }
      if (item.filter.remark) {
        this.pointTaskParams.remark = item.filter.remark;
      }
    },
    onPointTaskListBindClick(data, item, index) {
      let self = this;
      console.log("data", data, item, index);
      this.currentPointTaskId = item.id;
      if (data.index == 0) {
        this.editPointTaskPopup.show = true;
        this.$nextTick(() => {
          self.$refs.editPointTaskForm.setFormValues(item);
        });
      } else if (data.index == 1) {
        this.deletePointTaskModal.visible = true;
      }
    },
    onPointTaskListScrolltolower(data) {
      console.log("到底", data);
      this.pointTaskPageNo++;
    },
    onPointTaskListRefresherrefresh() {
    },
    onCancelClick() {
      this.editPointTaskPopup.show = false;
    },
    onSubmitClick() {
    },
    onDeletePointTaskModalOnConfirm() {
    },
    onDeletePointTaskModalOnCancel() {
      this.deletePointTaskModal.visible = false;
    },
    onEle6Bd00A02F6B14836957FC36Aa7Db3B3BClick() {
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-listPageCard {
  width: 100%;
  display: flex;
}

.ele-wrapper-filterCard {
  width: 100%;
}

.ele-wrapper-pointTaskFilter {
  width: 100%;
  /deep/.u-row[data-v-29a54948] {
    margin-top: 10px;
  }
  /deep/.search__input[data-v-6e3ff7af] {
    border-color: rgb(220, 223, 230) !important;
  }
}

.ele-wrapper-pointTaskList {
  width: 100%;
  flex: 1;
}

.ele-wrapper-editPointTaskForm {
  margin-top: 30px;
}

.ele-wrapper-viewModalText {
  margin-top: 10px;
  margin-left: 90px;
}

.ele-wrapper-6bd00a02-f6b1-4836-957f-c36aa7db3b3b {
  display: none;
}
</style>
