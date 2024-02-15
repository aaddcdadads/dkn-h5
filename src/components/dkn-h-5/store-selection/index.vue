<template>
    <view style="display: flex; position: relative">
      <scroll-view
        :scroll-y="true"
        :scroll-into-view="toView"
        :scroll-with-animation="true"
        :style="{ height: 'calc(78vh - 56px)' }"
      >
        <u-radio-group
          v-model="name"
          @change="radioGroupChange"
          style="width: 100%"
        >
          <view v-for="(items, index) in data" :key="index" class="dataItemCard">
            <view class="dataItemCard-title" :id="items.pinyinKey">{{ items.city }}</view>
            <view
              v-for="(itemlist, key) in items.shop"
              :key="key"
              class="dataItemCard_list"
            >
              <view class="dataItemCard_list_name">
                <u-radio :name="itemlist.name">{{ itemlist.name }}</u-radio>
              </view>
              <view class="dataItemCard_list_address">
                <text> {{ itemlist.address }}</text>
              </view>
            </view>
          </view>
        </u-radio-group>
      </scroll-view>
      <view class="anchorBox" style="height: calc(78vh - 56px);overflow-y: auto;">
        <view v-for="(item, index) in anch" :key="index" class="itembox">
          <a class="anchors" @click="anchor(item)">{{ item }}</a>
        </view>
      </view>
    </view>
  </template>
  <script>
  import { pinyin } from "pinyin-pro";
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
                      name: "柳叶店1-1-1",
                      address:
                        "常德市武陵区柳叶大道与皂果交汇处万达广场一楼常德市武陵区柳叶大道与皂果交汇处万达广场一楼常德市武陵区柳叶大道与皂果交汇处万达广场一楼常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                    },
                  ],
                },
              ],
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
                  ],
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
                  ],
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
                      address:
                        "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    },
                    {
                      name: "洋湖店3",
                      address:
                        "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    },
                    {
                      name: "洋湖店4",
                      address:
                        "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    },
                  ],
                },
              ],
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
                  ],
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
                  ],
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
                      address:
                        "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    },
                    {
                      name: "洋湖店3",
                      address:
                        "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    },
                    {
                      name: "洋湖店4",
                      address:
                        "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    },
                  ],
                },
              ],
            },
            {
              anchor: "d",
              store: [
                {
                  city: "常德",
                  shop: [
                    {
                      name: "柳叶店",
                      address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                    },
                  ],
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
                  ],
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
                      address:
                        "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    },
                    {
                      name: "洋湖店3",
                      address:
                        "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    },
                    {
                      name: "洋湖店4",
                      address:
                        "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    },
                  ],
                },
              ],
            },
            {
              anchor: "e",
              store: [
                {
                  city: "常德",
                  shop: [
                    {
                      name: "柳叶店",
                      address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                    },
                  ],
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
                  ],
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
                      address:
                        "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    },
                    {
                      name: "洋湖店3",
                      address:
                        "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    },
                    {
                      name: "洋湖店4",
                      address:
                        "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    },
                  ],
                },
              ],
            },
            {
              anchor: "f",
              store: [
                {
                  city: "常德",
                  shop: [
                    {
                      name: "柳叶店",
                      address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                    },
                  ],
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
                  ],
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
                      address:
                        "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    },
                    {
                      name: "洋湖店3",
                      address:
                        "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    },
                    {
                      name: "洋湖店4",
                      address:
                        "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    },
                  ],
                },
              ],
            },
            {
              anchor: "g",
              store: [
                {
                  city: "常德",
                  shop: [
                    {
                      name: "柳叶店",
                      address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                    },
                  ],
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
                  ],
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
                      address:
                        "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    },
                    {
                      name: "洋湖店3",
                      address:
                        "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    },
                    {
                      name: "洋湖店4",
                      address:
                        "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    },
                  ],
                },
              ],
            },
            {
              anchor: "j",
              store: [
                {
                  city: "常德",
                  shop: [
                    {
                      name: "柳叶店",
                      address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                    },
                  ],
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
                  ],
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
                      address:
                        "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                    },
                    {
                      name: "洋湖店3",
                      address:
                        "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                    },
                    {
                      name: "洋湖店4",
                      address:
                        "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                    },
                  ],
                },
              ],
            },
          ];
        },
      },
    },
    watch: {
      list: {
        handler: function (val) {
          this.data = val;
          this.data = this.mapData(this.data);
        },
        deep: true,
      },
    },
    data() {
      return {
        scrollTop: null,
        data: [],
        height: 0,
        toView: "",
        item: null,
        anch: [
          `a`,
          `b`,
          `c`,
          `d`,
          `e`,
          `f`,
          `g`,
          `h`,
          `i`,
          `j`,
          `k`,
          `l`,
          `m`,
          `n`,
          `o`,
          `p`,
          `q`,
          `r`,
          `s`,
          `t`,
          `u`,
          `v`,
          `w`,
          `x`,
          `y`,
          `z`,
        ],
      };
    },
    mounted() {
      this.data = this.list;
      this.$nextTick(() => {
        const query = uni.createSelectorQuery().in();
        query
          .select(".anchorBox")
          .boundingClientRect((data) => {
            if (data.height < 300) {
              this.height = 300;
            } else {
              this.height = data.height;
            }
          })
          .exec();
      });
      this.data = this.mapData(this.data);
    },
    methods: {
      radioGroupChange(e) {
        let arr = JSON.parse(JSON.stringify(this.data));
        this.itemArray(arr, e);
        this.$emit("radioGroupChange", this.item);
      },
      itemArray(arr, e) {
        let length = arr.length;
        for (let i = 0; i < length; i++) {
          let stores = arr[i];
          if (arr[i].name !== undefined && arr[i].name === e) {
            this.item = arr[i];
            return;
          } else {
            for (let items in stores) {
              if (Array.isArray(stores[items])) {
                this.itemArray(stores[items], e);
              }
            }
          }
        }
      },
      anchor(e) {
        this.toView = e;
      },
      mapData(data) {
        let newData = data[0].store;
        newData.forEach((item) => {
          let Capital = pinyin(item.city, {
            pattern: "first",
            toneType: "none",
          })
            .charAt(0)
            .toLowerCase();
          item.pinyinKey = Capital;
        });
        newData = newData.sort((a, b) => a.city.localeCompare(b.city));
        return newData;
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  .shop {
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .shopItem {
    padding-top: 5px;
    margin-top: 10px;
    border-top: 0.5px solid #ffdedede;
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
    text-decoration: none;
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
  }
  
  .itembox:active {
    background: #2979ff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    border-radius: 50%;
  }
  
  .anchorBox {
    width: 20px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
  }
  
  .itembox {
    padding: 1px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .store_list {
    margin-top: 10px;
    padding-bottom: 15px;
    border-bottom: 0.5px solid #ffdedede;
  }
  .dataItemCard {
    width: 100%;
    padding: 0px 20px;
    &-title {
      width: 100%;
      line-height: 44px;
      border-bottom: 0.5px solid #ffdedede;
    }
    &_list {
      width: 100%;
      padding: 6px 0px;
      &_name {
        font-weight: 750;
        display: flex;
        align-items: center;
      }
      &_address {
        margin-left: 23px;
        font-size: 12px;
      }
    }
  }
  </style>
  