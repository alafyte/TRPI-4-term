<template>
  <div :class="$style.spec_Offers">
    <p>Актуальные спецпредложения</p>
    <div :class="$style.box_spec">
      <SpecOffersComponent :specItemData1="specData1"/>
    </div>
  </div>
</template>

<script>
import SpecOffersComponent from '@/components/TheSpecialOffers_c.vue';
export default {
  name: "SpecOffers",
  components:{
    SpecOffersComponent : SpecOffersComponent,
  },
  props:{
    specData1:{
      type : Array,
      default : () => []
    },
    // specData2:{
    //   type : Object,
    //   default : () => {}
    // },
    // specData3:{
    //   type : Object,
    //   default : () => {}
    // },
    // specData4:{
    //   type : Object,
    //   default : () => {}
    // }
  }
}
</script>

<style lang="scss" module>
.spec_Offers{
  width: 100%;
  height:556px;
  background: linear-gradient(180deg, rgb(230, 243, 244) 37%, rgb(230, 243, 244) 63%, rgb(255,255,255) 63%);
  font-family: 'Gilroy-medium', sans-serif;
  margin-right: auto;
  margin-left: auto;
  .box_spec{
    width: 1296px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
  }
  p{
    font-size: 48px;
    color:#008A8E;
    font-weight: bold;
    padding-top: 80px;
  }
}
</style>