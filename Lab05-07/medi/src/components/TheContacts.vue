<template>
  <div class="about_contacts">
      <div class="cont_phone">
        <p>{{contactsItemData[0].title}}</p>
        <p>{{contactsItemData[0].phone}}</p>
      </div>
      <div class="cont_address">
        <p>{{contactsItemData[1].title}}</p>
        <p>{{contactsItemData[1].address}}</p>
        <button class="btn_c" @click="showMap1 = true">Как проехать?</button>
      </div>
      <div class="cont_address">
        <p>{{contactsItemData[2].title}}</p>
        <p>{{contactsItemData[2].address}}</p>
        <button class="btn_c" @click="showMap2 = true">Как проехать?</button>
      </div>
    <Transition name="modal">
      <Maps :mapSource="firstSource" v-if="showMap1" @close="showMap1 = false"/>
    </Transition>
    <Transition name="modal">
      <Maps :mapSource="secondSource" v-if="showMap2" @close="showMap2 = false"/>
    </Transition>
  </div>
</template>

<script>
import Maps from '@/components/Maps.vue';
export default {
  name: "AboutItem2",
  components: {
    Maps : Maps
  },
  props: {
    contactsItemData: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      showMap1: false,
      showMap2: false,
      firstSource: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ade5eb70726209c38909d8c70b1ea3c8bee0c6817fe1414243c0a54e251a0fed1&amp;source=constructor',
      secondSource: 'https://yandex.ru/map-widget/v1/?um=constructor%3A5931c954d4c57952fea1263aa7080bacb39654d7a1ca9f8688be87a80575aeb3&amp;source=constructor'
    }
  }
}
</script>

<style lang="scss">
.about_contacts{
  margin-top:10px;
  text-align: left;
  height:357px;
  width: 251px;
  .cont_phone{
    p:nth-child(1){
      text-transform: uppercase;
      font-weight: 500;
      font-size: 11px;
      line-height: 150%;
      padding-bottom:10px;
    }
    p:nth-child(2){
      font-weight: 700;
      font-size: 21px;
      line-height: 150%;
    }
  }
  .cont_address{
    padding-top:30px;
    p:nth-child(1){
      text-transform: uppercase;
      font-weight: 500;
      font-size: 11px;
      line-height: 150%;
    }
    p:nth-child(2){
      padding-top:10px;
      padding-bottom: 15px;
      font-weight: 700;
      font-size: 21px;
      line-height: 150%;
    }
    .btn_c{
      cursor: pointer;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #FFFFFF;
      border:none;
      width:164px;
      height:45px;
      background-color: #008A8E;
    }
  }
  .modal-enter {
    opacity: 0;
    .modal-container {
      transform: scale(1.1);
    }
  }

  .modal-leave-active {
    opacity: 0;
    .modal-container {
      transform: scale(1.1);
    }
  }
}
</style>