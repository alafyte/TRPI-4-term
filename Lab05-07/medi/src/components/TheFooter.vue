<template>
  <footer :class="$style.footer">
    <div :class="$style.cont1">
     {{footerItemData.descript1[0]}}<br>
     {{footerItemData.descript1[1]}}<br>
     {{footerItemData.descript1[2]}}<br>
    </div>
    <div :class="$style.cont2"><a href="">{{footerItemData.descript2}}</a></div>
    <div :class="$style.cont3">
      <button :class="$style.cont31">
        <div>
          <img :src="require('@/assets/' + footerItemData.but_img2)" alt="">
        </div>
        <div>{{footerItemData.but_name2}}</div>
      </button>
    </div>
    <div :class="$style.cont4" v-for="h in footerItemData.social_img">
      <a href="#"><img :src="require('@/assets/' + h)" alt=""></a>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "footerItem",
  props: {
    footerItemData: {
      type: Object,
      default: () => {}
    },
  }
}
</script>

<style module lang="scss">
.footer{
  display: flex;
  height: 90px;
  justify-content: center;
  margin-left:auto;
  margin-right: auto;
  .cont1{
    padding:20px 0 16px 25px;
    border-left: 1px solid #C4C4C4;
    display: flex;
    text-align: left;
    font-size: 12px;
  }
  .cont2{
    font-size: 12px;
    display: flex;
    flex:none;
    align-items: center;
    padding:38px 71px 34px 70px;
    text-decoration: underline;
    a{
      color:black;
    }
  }
  .cont3{
    padding:25px 30px;
    border-right: 1px solid #C4C4C4;
    font-family: 'Gilroy-medium', sans-serif;
    .cont31{
      border: none;
      padding: 0;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      background-color: #00868A;
      color: #ffff;
      transition: background-color .2s linear;
      &:hover{
        background-color: #4FBFA5;
      }
      div:nth-child(1){
        padding: 10px 10px 8px 15px;
      }
      div:nth-child(2){
        padding-right: 15px;
        padding-top:0;
      }
    }
  }
  .cont4{
    padding: 33px 28px;
    border-right: 1px solid #C4C4C4;
  }
}
</style>
