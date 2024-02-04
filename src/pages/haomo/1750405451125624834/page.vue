<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-9eb19edb-d56f-48b3-83bc-0cae29500890"
      >
        <scroll-list> </scroll-list>
      </view>
      <view
        class="ele-wrapper ele-wrapper-1489aac3-c520-426d-93db-6425e17438a3"
      >
        <information-input-box value="" placeholder="姓名/昵称">
        </information-input-box>
      </view>
      <view
        class="ele-wrapper ele-wrapper-9bd1715e-57b0-42d2-924b-0ac1a000960b"
      >
        <store-selection
          :list="[
            {
              anchor: 'a',
              store: [
                {
                  city: '安庆',
                  shop: [
                    {
                      name: '柳叶店',
                      address: '常德市武陵区柳叶大道与皂果交汇处万达广场一楼',
                    },
                  ],
                },
                {
                  city: '长沙',
                  shop: [
                    {
                      name: '梅溪湖店',
                      address: '湖南省长沙市丘林分三路1099号',
                    },
                    {
                      name: '湘江店路',
                      address: '湖南省长沙市丘林分三路1099号',
                    },
                    { name: '洋湖店', address: '湖南省长沙市丘林分三路1099号' },
                    { name: '洋湖店', address: '湖南省长沙市丘林分三路1099号' },
                  ],
                },
                {
                  city: '成都',
                  shop: [
                    {
                      name: '梅溪湖店',
                      address: '湖南省长沙市丘林分三路1099号',
                      checked: false,
                    },
                    {
                      name: '湘江店路',
                      address: '成都市郫都区德源镇红旗大道北段221号5号楼11楼',
                      checked: false,
                    },
                    {
                      name: '洋湖店1',
                      address: '成都高新区仁和街39号6栋2层1号',
                      checked: false,
                    },
                    {
                      name: '洋湖店2',
                      address:
                        '中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号',
                      checked: false,
                    },
                    {
                      name: '洋湖店3',
                      address:
                        '中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号',
                      checked: false,
                    },
                    {
                      name: '洋湖店4',
                      address:
                        '中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号',
                      checked: false,
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'b',
              store: [
                {
                  city: '亳州',
                  shop: [
                    {
                      name: '柳叶店',
                      address: '常德市武陵区柳叶大道与皂果交汇处万达广场一楼',
                    },
                  ],
                },
                {
                  city: '长沙',
                  shop: [
                    {
                      name: '梅溪湖店',
                      address: '湖南省长沙市丘林分三路1099号',
                    },
                    {
                      name: '湘江店路',
                      address: '湖南省长沙市丘林分三路1099号',
                    },
                    { name: '洋湖店', address: '湖南省长沙市丘林分三路1099号' },
                    { name: '洋湖店', address: '湖南省长沙市丘林分三路1099号' },
                  ],
                },
                {
                  city: '成都',
                  shop: [
                    {
                      name: '梅溪湖店',
                      address: '湖南省长沙市丘林分三路1099号',
                    },
                    {
                      name: '湘江店路',
                      address: '成都市郫都区德源镇红旗大道北段221号5号楼11楼',
                    },
                    {
                      name: '洋湖店1',
                      address: '成都高新区仁和街39号6栋2层1号',
                    },
                    {
                      name: '洋湖店2',
                      address:
                        '中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号',
                    },
                    {
                      name: '洋湖店3',
                      address:
                        '中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号',
                    },
                    {
                      name: '洋湖店4',
                      address:
                        '中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号',
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'c',
              store: [
                {
                  city: '常德',
                  shop: [
                    {
                      name: '柳叶店',
                      address: '常德市武陵区柳叶大道与皂果交汇处万达广场一楼',
                    },
                  ],
                },
                {
                  city: '长沙',
                  shop: [
                    {
                      name: '梅溪湖店',
                      address: '湖南省长沙市丘林分三路1099号',
                    },
                    {
                      name: '湘江店路',
                      address: '湖南省长沙市丘林分三路1099号',
                    },
                    { name: '洋湖店', address: '湖南省长沙市丘林分三路1099号' },
                    { name: '洋湖店', address: '湖南省长沙市丘林分三路1099号' },
                  ],
                },
                {
                  city: '成都',
                  shop: [
                    {
                      name: '梅溪湖店',
                      address: '湖南省长沙市丘林分三路1099号',
                      checked: false,
                    },
                    {
                      name: '湘江店路',
                      address: '成都市郫都区德源镇红旗大道北段221号5号楼11楼',
                      checked: false,
                    },
                    {
                      name: '洋湖店1',
                      address: '成都高新区仁和街39号6栋2层1号',
                      checked: false,
                    },
                    {
                      name: '洋湖店2',
                      address:
                        '中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号',
                      checked: false,
                    },
                    {
                      name: '洋湖店3',
                      address:
                        '中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号',
                      checked: false,
                    },
                    {
                      name: '洋湖店4',
                      address:
                        '中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号',
                      checked: false,
                    },
                  ],
                },
              ],
            },
          ]"
        >
        </store-selection>
      </view>
      <view
        class="ele-wrapper ele-wrapper-5d875c58-bb79-4f29-8396-d426954e4792"
      >
        <event-registration-information-card>
        </event-registration-information-card>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import ScrollList from "/@/components/dkn-h-5/scroll-list/index.vue";
import InformationInputBox from "/@/components/dkn-h-5/information-input-box/index.vue";
import StoreSelection from "/@/components/dkn-h-5/store-selection/index.vue";
import EventRegistrationInformationCard from "/@/components/dkn-h-5/event-registration-information-card/index.vue";

export default {
  name: "Test",
  components: {
    ScrollList,
    InformationInputBox,
    StoreSelection,
    EventRegistrationInformationCard,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {
      "1489aac3-c520-426d-93db-6425e17438a3": {
        value: "",
      },
    };
  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
}
</style>
