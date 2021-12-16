<template>
  <view class="page card" :id="pageData.key" :style="pageStyle">
    <view class="sortable-list">
      <hm-block
        v-for="(topic, index) in tempPageData.topics"
        :key="index"
        :style="getCss(topic.key)"
        :componentId="topic.key"
        :select="topic.key == selectCardId ? true : false"
        @click.native.stop="selectCard(topic.key)"
        @deleteComponent="deleteComponent"
      >
        <component
          :is="topic.component.name"
          v-bind="getProps(topic)"
          :topic="topic"
        >
          <!-- 第1层渲染插槽 -->
          <template v-for="slotName in getAllSlotNames(topic)" v-slot:[slotName]>
            <view class="hm-slot" :data-slot-name="slotName" :key="slotName"><view class="sortable-list">
              <hm-block
                v-for="(topic1, index1) in getChildTopicsBySlotname(topic, slotName)"
                :key="index1"
                :style="getCss(topic1.key)"
                :componentId="topic1.key"
                :select="topic1.key == selectCardId ? true : false"
                @click.native.stop="selectCard(topic1.key)"
                @deleteComponent="deleteComponent"
              >
                <component
                  :is="topic1.component.name"
                  v-bind="getProps(topic1)"
                  :topic="topic1"
                >
                  <!-- 第2层渲染插槽 -->
                  <template v-for="slotName in getAllSlotNames(topic1)" v-slot:[slotName]>
                    <view class="hm-slot" :data-slot-name="slotName" :key="slotName"><view class="sortable-list">
                      <hm-block
                        v-for="(topic2, index2) in getChildTopicsBySlotname(topic1, slotName)"
                        :key="index2"
                        :style="getCss(topic2.key)"
                        :componentId="topic2.key"
                        :select="topic2.key == selectCardId ? true : false"
                        @click.native.stop="selectCard(topic2.key)"
                        @deleteComponent="deleteComponent"
                      >
                        <component
                          :is="topic2.component.name"
                          v-bind="getProps(topic2)"
                          :topic="topic2"
                        >
                          <!-- 第3层渲染插槽 -->
                          <template v-for="slotName in getAllSlotNames(topic2)" v-slot:[slotName]>
                            <view class="hm-slot" :data-slot-name="slotName" :key="slotName"><view class="sortable-list">
                              <hm-block
                                v-for="(topic3, index3) in getChildTopicsBySlotname(topic2, slotName)"
                                :key="index3"
                                :style="getCss(topic3.key)"
                                :componentId="topic3.key"
                                :select="topic3.key == selectCardId ? true : false"
                                @click.native.stop="selectCard(topic3.key)"
                                @deleteComponent="deleteComponent"
                              >
                                <component
                                  :is="topic3.component.name"
                                  v-bind="getProps(topic3)"
                                  :topic="topic3"
                                >
                                  <!-- 第4层渲染插槽 -->
                                  <template v-for="slotName in getAllSlotNames(topic3)" v-slot:[slotName]>
                                    <view class="hm-slot" :data-slot-name="slotName" :key="slotName"><view class="sortable-list">
                                      <hm-block
                                        v-for="(topic4, index4) in getChildTopicsBySlotname(topic3, slotName)"
                                        :key="index4"
                                        :style="getCss(topic4.key)"
                                        :componentId="topic4.key"
                                        :select="topic4.key == selectCardId ? true : false"
                                        @click.native.stop="selectCard(topic4.key)"
                                        @deleteComponent="deleteComponent"
                                      >
                                        <component
                                          :is="topic4.component.name"
                                          v-bind="getProps(topic4)"
                                          :topic="topic4"
                                        >
                                          <!-- 第4层渲染插槽 -->
                                          <template v-for="slotName in getAllSlotNames(topic4)" v-slot:[slotName]>
                                            <view class="hm-slot" :data-slot-name="slotName" :key="slotName"><view class="sortable-list">
                                              <hm-block
                                                v-for="(topic5, index5) in getChildTopicsBySlotname(topic4, slotName)"
                                                :key="index5"
                                                :style="getCss(topic5.key)"
                                                :componentId="topic5.key"
                                                :select="topic5.key == selectCardId ? true : false"
                                                @click.native.stop="selectCard(topic5.key)"
                                                @deleteComponent="deleteComponent"
                                              >
                                                <component
                                                  :is="topic5.component.name"
                                                  v-bind="getProps(topic5)"
                                                  :topic="topic5"
                                                >
                                                  <!-- 第6层渲染插槽 -->
                                                  <template v-for="slotName in getAllSlotNames(topic5)" v-slot:[slotName]>
                                                    <view class="hm-slot" :data-slot-name="slotName" :key="slotName"><view class="sortable-list">
                                                      <hm-block
                                                        v-for="(topic6, index6) in getChildTopicsBySlotname(topic5, slotName)"
                                                        :key="index6"
                                                        :style="getCss(topic6.key)"
                                                        :componentId="topic6.key"
                                                        :select="topic6.key == selectCardId ? true : false"
                                                        @click.native.stop="selectCard(topic6.key)"
                                                        @deleteComponent="deleteComponent"
                                                      >
                                                        <component
                                                          :is="topic6.component.name"
                                                          v-bind="getProps(topic6)"
                                                          :topic="topic6"
                                                        >

                                                        </component>
                                                      </hm-block>
                                                    </view></view>
                                                  </template>
                                                </component>
                                              </hm-block>
                                            </view></view>
                                          </template>
                                        </component>
                                      </hm-block>
                                    </view></view>
                                  </template>
                                </component>
                              </hm-block>
                            </view></view>
                          </template>
                        </component>
                      </hm-block>
                    </view></view>
                  </template>
                </component>
              </hm-block>
            </view></view>
          </template>
        </component>
      </hm-block>
    </view>
  </view>
</template>

<script>
import { h, defineAsyncComponent } from 'vue';
import _ from 'lodash';
import {convertCssToVueStyle} from '/@/utils/util';
import JSONfn from '/@/utils/jsonfn';
import jiff from "jiff";
import HmBlock from "/@/components/HmBlock.vue";

export default {
  components: {
    HmBlock,
  },
  data() {
    let self = this;
    return {
      enabled: true,
      selectCardId: null,
      dragging: false,
      tempPageData: {
        key: "58587bcb-bbfa-4d5e-afe6-be5f6ce40dc8",
        title: "Test4",
        note: {
  "data": {},
  "style": {
    "css": ""
  },
  "events": {
    "destroyed": {
      "value": []
    },
    "beforeUpdate": {
      "value": []
    },
    "created": {
      "value": []
    },
    "beforeMount": {
      "value": []
    },
    "beforeDestroy": {
      "value": []
    },
    "beforeCreate": {
      "value": []
    },
    "mounted": {
      "value": []
    },
    "updated": {
      "value": []
    }
  }
},
        component: {
  "createBy": "e9ca23d68d884d4ebb19d07889727dae",
  "createTime": 1639665112782,
  "name": "Test4",
  "id": "1471488251658244098",
  "title": "Test4",
  "type": 1,
  "projectId": "8589ffb9a537e345b60bf75883fc22ff"
},
        topicDict: {},
        topics: [],
      }
    };
  },
  computed: {
    pageStyle() {
      return convertCssToVueStyle(this.pageData.note.style.css)
    },
    pageData() {
      let data = JSON.parse(JSON.stringify(this.tempPageData))
      _.each(_.keys(data.topicDict), key => {
        _.each(data.topicDict[key].note.props, prop => {
          if (prop.type === 'Function') {
            prop.value.value = eval(prop.value.value)
          }
        });
      })
      return data;
    }
  },
  mounted(){
    this.addEventListener()
    this.postMessage("","init")
  },
  methods:{
    getProps(topic) {
      let self = this;
      let topicProps = topic.note.props;
      let props = _.chain(topicProps)
        .keys()
        .reject(prop => {
          return !topicProps[prop]['value']
            || (topicProps[prop]['default'] === false
              && topicProps[prop]['value']['value'] === false)
        })
        .map(prop => {
          return {
            prop: prop,
            value: self.getPropValue(topic.key, prop)
          }
        })
        .value();

      let ret = {};
      _.each(props, item => {
        ret[item.prop] = item.value;
      })
      return ret;
    },
    /**
     * 渲染到组件上的css
     */
    getCss(componentKey) {
      let topic = this.pageData.topicDict[componentKey];
      if (!topic || !topic.note || !topic.note.style) {
        return null;
      }
      return topic.note.style.css
    },
    getPropValue(componentKey, prop) {
      let topic = this.pageData.topicDict[componentKey];
      if (!topic || !topic.note
        || !topic.note.props
        || !topic.note.props[prop]
        || !topic.note.props[prop]['value']) {
          return null;
      }
      return topic.note.props[prop]['value']['value'];
    },
    isVModelExist(componentKey, prop) {
      let topic = this.pageData.topicDict[componentKey];
      if (!topic || !topic.note
        || !topic.note.props
        || !topic.note.props[prop]
        || !topic.note.props[prop]['value']) {
          return false;
      }
      return true;
    },
    getAllSlotNames(topic) {
      let ret = _.chain(topic.topics)
        .reject((childTopic) => {
          return !childTopic.note.slot;
        })
        .map((childTopic) => {
          return childTopic.note.slot.name;
        })
        .uniq()
        .value();
      return ret;
    },
    getChildTopicsBySlotname(topic, slotName) {
      let ret = _.chain(topic.topics)
        .reject((childTopic) => {
          return !childTopic.note.slot || childTopic.note.slot.name != slotName;
        })
        .value();
      return ret;
    },
    addEventListener(){
      window.addEventListener(
        "message",
        (e) => {
          if(e.data.type) {
            try {
              this.handleMessage({
                type: e.data.type,
                data: JSONfn.parse(e.data.data)
              })
            } catch (error) {
              this.handleMessage(e.data)
            }
          }
        },
        false
      );
      window.addEventListener(
        "click",
        e => {
          this.cancelSelect()
        }
      );
    },
    getComponent(id) {
      let component = this.pageData.topicDict[id];
      if (!component) {
        window.location.reload();
      }
    },
    handleMessage(message) {
      console.log(`handleMessage message: `, message);
      if (!message) {
        return;
      }
      switch (message.type) {
        case "cancel-select":
          this.cancelSelect(message.data)
          return
        case 'update-page-data':
          // 监听实时样式和属性的变化
          this.updatePageData(message.data)
          return
        case "select-page-component":
          this.selectCard(message.data)
      }
    },
    updatePageData(data) {
      // this.handlePropFunction(data);
      // _.merge(this.tempPageData, data)
      // console.log(`updatePageData: `, data, this.tempPageData)
      if(data.pageJson){
        this.tempPageData = data.pageJson
      }else{
        this.tempPageData = jiff.patch(data.patch, this.tempPageData);
      }
    },
    handlePropFunction(data) {
      _.each(_.keys(data.topicDict), key => {
        _.each(data.topicDict[key].note.props, prop => {
          if (prop.type === 'Function') {
            prop.value.value = eval(prop.value.value)
          }
        });
      })
    },
    postMessage(data, type) {
      let message = { data, type }
      console.log("send---", message)
      if (self !== top) {
        window.parent.postMessage(message, "*")
      }
    },
    deleteComponent(id) {
      let self = this
      this.$confirm({
        title: "提示",
        content: "是否确认删除该组件?",
        okText: "确认",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          self.postMessage(id, "delete")
        }
      })
    },
    cancelSelect(){
      this.selectCardId = ''
      this.postMessage('', "cancel-select")
    },
    selectCard(id) {
      if (id == this.selectCardId) {
        this.selectCardId = null
        return
      }
      let el = document.getElementById(id).getBoundingClientRect()

      this.selectCardId = id;

      let data = {
        id,
        left: el.width + el.left + 'px',
        top: el.top + 'px'
      }
      this.postMessage(data, "select");
    },
  }
};
</script>

<style scoped>
.page {

}
</style>