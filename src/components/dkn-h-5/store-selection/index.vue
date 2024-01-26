<template>
  <view class="box" style="overflow-y: auto;">
    <u-index-list :sticky="false">
      <view v-for="(items, index) in data" :key="index" class="shop">
        <u-index-anchor :use-slot="true" :custom-style="{ 'color': '#999999', 'backgroundColor': '#ffffff', 'padding': '0' }">
          <view class="title">{{ items.city }}</view>
        </u-index-anchor>
        <view v-for="(item,key) in items.shop" :key="key" class="shopItem">
          <view class="name">
            <radio class="change" :checked="item.checked" @click="onChange(index,key)"></radio>
            <view> <text>{{ item.shopname }}</text></view>
          </view>
          <view class="address">
            <text> {{ item.address }}</text>
          </view>
        </view>
      </view>
    </u-index-list>
  </view>
</template>
<script>
export default {
  props: {
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            city: "常德",
            shop: [
              {
                shopname: "柳叶店",
                address: "常德市武陵区柳叶大道与皂果交汇处万达广场一楼",
                checked:false,
              },
            ]
          },
          {
            city: "长沙",
            shop: [
              {
                shopname: "梅溪湖店",
                address: "湖南省长沙市丘林分三路1099号",
                checked:false,
              },
              {
                shopname: "湘江店路",
                address: "湖南省长沙市丘林分三路1099号",
                checked:false,
              },
              {
                shopname: "洋湖店",
                address: "湖南省长沙市丘林分三路1099号",
                checked:false,
              },
              {
                shopname: "洋湖店",
                address: "湖南省长沙市丘林分三路1099号",
                checked:false,
              },
            ]
          },
          {
            city: "成都",
            shop: [
              {
                shopname: "梅溪湖店",
                address: "湖南省长沙市丘林分三路1099号",
                checked:false,
              },
              {
                shopname: "湘江店路",
                address: "成都市郫都区德源镇红旗大道北段221号5号楼11楼",
                checked:false,
              },
              {
                shopname: "洋湖店",
                address: "成都高新区仁和街39号6栋2层1号",
                checked:false,
              },
              {
                shopname: "洋湖店",
                address: "中国（四川）自由贸易试验区成都高新区益州大道中段1800号1栋22-23层2201号、2301号",
                checked:false,
              },
              {
                shopname: "洋湖店",
                address: "中国（四川）自由贸易试验区成都市天府新区万安街道麓山大道二段18号附3号4栋-1层2号",
                checked:false,
              },
              {
                shopname: "洋湖店",
                address: "中国（四川）自由贸易试验区成都高新区吉瑞四路399号1栋8楼5、6号",
                checked:false,
              },
            ]
          }
        ]
      }
    }

  },
  watch:{
    list:{
      handler:function(val){
        this.data = val; 
      },
      deep:true,
    }
  },
  data() {
    return {
      scrollTop: null,
      data:[]
    }
  },
  mounted(){
    this.data = this.list;

  },
  methods:{
    onChange(e,m){
    this.data[e].shop[m].checked = !this.data[e].shop[m].checked;
    this.$emit("change",e,m);
    }
  }

}
</script>

<style scoped>
.shop {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f8f9f9;
}

.shopItem {
  margin-top: 10px;
}

.name {
  font-weight: 750;
  display: flex;
  align-items: center;
}

.change {
  transform: scale(0.7)
}

.address {
  margin-left: 30px;
  font-size: 12px;
  margin-top: 5px;
}</style>