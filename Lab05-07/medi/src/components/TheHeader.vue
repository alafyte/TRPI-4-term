<template>
  <header :class="$style.header">
    <div :class="$style.cont1">
      <img :src="require('@/assets/' + headerItemData.img)" alt="">
    </div>
    <div :class="$style.cont2">{{headerItemData.phone}}</div>
    <div :class="$style.cont3">
<!--      <div class="cont31">-->
<!--        <a>{{headerItemData.but_name1}}</a>-->
<!--      </div>-->
<!--      <div class="cont32">-->
<!--        <img :src="require('@/assets/' + headerItemData.but_img1)" alt="">-->
<!--      </div>-->
      <div :class="$style.cont55">
        <a href="">
          {{headerItemData.but_name1}}
          <img :src="require('@/assets/' + headerItemData.but_img1)" alt="">
        </a>
        <ul :class="$style.submenu">
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul>
      </div>
    </div>
    <div :class="$style.cont4">
      <button :class="$style.cont41">
        <div>
          <img :src="require('@/assets/' + headerItemData.but_img2)" alt="">
        </div>
        <div>{{headerItemData.but_name2}}</div>
      </button>
    </div>
    <div :class="$style.cont5" v-for="h in headerItemData.social_img">
      <a href="#"><img :src="require('@/assets/' + h)" alt=""></a>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "headerItem",
  props: {
    headerItemData: {
      type: Object,
      default: () => {}
    },
  }
}
</script>

<style module lang="scss">
.header{
  display: flex;
  height: 90px;
  justify-content: center;
  .cont1{
    padding: 18px 35px 17px 35px;
    border-left: 1px solid #C4C4C4;
    border-right: 1px solid #C4C4C4;
    display: flex;
    font-size: calc(40px);
    align-items: center;
    img{
      display: block;
    }
  }
  .cont2{
    display: flex;
    flex:none;
    align-items: center;
    font-size: 16px;
    padding:35px 30px;
  }
  .cont3{
    display: flex;
    flex:none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding: 36px 30px 35px 30px;
    border-left: 1px solid #C4C4C4;
    border-right: 1px solid #C4C4C4;
    .cont31{
      padding-right:15px;
    }
  }
  .cont4{
    padding:25px 30px;
    border-right: 1px solid #C4C4C4;
    font-family: 'Gilroy-medium', sans-serif;
    .cont41{
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
  .cont5{
    padding: 33px 28px;
    border-right: 1px solid #C4C4C4;
  }
  .cont55{
    display: flex;
    align-items: center;
    &:hover{
      .submenu{
        visibility: visible;
      }
    }
    a{
      text-decoration: none;
      color: #000000;
      display: flex;
      align-items: center;
      padding-right: 15px;
      &:hover{
        img{
          transform: rotate(180deg) translateX(-15px);
        }
      }
      img{
        transform: translateX(15px);
        transition: all .3s linear;
      }
    }
    .submenu{
      width:198.5px;
      list-style-type: none;
      position: absolute;
      right:751px;
      top:90px;
      z-index: 10;
      transition: 0.5s ease-in-out;
      visibility: hidden;
      background: #FFFFFF;
      padding: 0;
      li{
        padding-bottom:15px;
      }
    }
  }
}
</style>
