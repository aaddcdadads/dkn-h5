<template>
  <view>
    <view :style="{ height: height + 'px' }" style="position: relative;">
      <view class="box" :style="{ height: height + 15 + 'px' }" style="overflow-y: auto;">
        <u-radio-group v-model="name" @change="radioGroupChange">
          <view v-for="(items, index) in data" :key="index" class="shop" :id="items.anchor">
            <view v-for="item in items.store" class="store_list">
              <view class="title">{{ item.city }}</view>
              <view v-for="(itemlist, key) in item.shop" :key="key" class="shopItem">
                <view class="name">
                  <u-radio :name="itemlist.name"> {{ itemlist.name }}</u-radio>
                </view>
                <view class="address">
                  <text> {{ itemlist.address }}</text>
                </view>
              </view>
            </view>
          </view>
        </u-radio-group>
      </view>
      <view class="anchorBox">
        <view v-for="item in data" class="itembox">
          <a href="#a" class="anchors">{{ item.anchor }}</a>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    /**
     * 选择店名
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            anchor: "a",
            store: [
              {
                city: "安庆",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ]
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",

                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",

                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",

                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ]
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                    checked: false,
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                    checked: false,
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                    checked: false,
                  },
                  {
                    name: "洋湖店2",
                    address: "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    checked: false,
                  },
                  {
                    name: "洋湖店3",
                    address: "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    checked: false,
                  },
                  {
                    name: "洋湖店4",
                    address: "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    checked: false,
                  },
                ]
              }
            ]
          },
          {
            anchor: "b",
            store: [
              {
                city: "亳州",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ]
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",

                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",

                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",

                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ]
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                  },
                  {
                    name: "洋湖店2",
                    address: "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                  },
                  {
                    name: "洋湖店3",
                    address: "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                  },
                  {
                    name: "洋湖店4",
                    address: "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                  },
                ]
              }
            ]
          },
          {
            anchor: "c",
            store: [
              {
                city: "常德",
                shop: [
                  {
                    name: "柳叶店",
                    address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                  },
                ]
              },
              {
                city: "长沙",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",

                  },
                  {
                    name: "湘江店路",
                    address: "湖南省长沙市丘林分三路1099号",

                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",

                  },
                  {
                    name: "洋湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                  },
                ]
              },
              {
                city: "成都",
                shop: [
                  {
                    name: "梅溪湖店",
                    address: "湖南省长沙市丘林分三路1099号",
                    checked: false,
                  },
                  {
                    name: "湘江店路",
                    address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                    checked: false,
                  },
                  {
                    name: "洋湖店1",
                    address: "成都高新区仁和街39号6栋2层1号",
                    checked: false,
                  },
                  {
                    name: "洋湖店2",
                    address: "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    checked: false,
                  },
                  {
                    name: "洋湖店3",
                    address: "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    checked: false,
                  },
                  {
                    name: "洋湖店4",
                    address: "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    checked: false,
                  },
                ]
              }
            ]
          },
        ]
      }
    }
  },
  watch: {
    list: {
      handler: function (val) {
        this.data = val;
      },
      deep: true,
    }
  },
  data() {
    return {
      scrollTop: null,
      data: [],
      height: 0,
    }
  },
  mounted() {
    this.data = this.list;
    this.$nextTick(() => {
      const query = uni.createSelectorQuery().in();
      query.select('.anchorBox').boundingClientRect(data => {
        if (data.height < 300) {
          this.height = 300;
        } else {
          this.height = data.height;
        }
      }).exec();
    })
  },
  methods: {
    onChange(e, m) {
      this.$emit("change", e, m);
    },
    radioGroupChange() {
      this.$emit("radioGroupChange");
    },
    anchor(e) {
      return `#${e}`
    },
  }

}
</script>

<style scoped>
.shop {
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
}

.shopItem {
  margin-top: 10px;
}

.name {
  font-weight: 750;
  display: flex;
  align-items: center;
}

.address {
  margin-left: 23px;
  font-size: 12px;
  margin-top: 5px;
}

.anchors {
  color: #999999;
  text-decoration: none;
  font-family: 'ArialMT', 'Arial', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
}

.anchorBox {
  position: absolute;
  right: 5px;
  top: 10px;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.itembox {
  background-color: #f2f2f2;
  padding: 5px 3px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.store_list {
  margin-top: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f8f9f9;
}
</style>