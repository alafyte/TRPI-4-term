<template>
  <div :class="$style.spec_component" v-for="sp in specItemData1" :key="sp.id">
    <button :class="$style.btn_main">{{sp.buttonName}}</button>
      <div :class="$style.cont_img">
        <img :src="require('@/assets/' + sp.img)" alt="">
      </div>
      <div :class="$style.text_btn">
        <div>{{sp.description}}</div>
        <div :class="$style.arrow_btn">
          <button :class="$style.next">
            <img :src="require('@/assets/' + 'Arrow 1.svg')" alt="">
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "SpecItem1",
  props:{
    specItemData1:{
      type: Array,
      default: () => []
    },
  }
};
</script>

<style lang="scss" module>
.spec_component{
  width: 306px;
  height: 344px;
  background-color: #008A8E;
  font-family: 'Gilroy-medium', sans-serif;
  .btn_main{
    position: absolute;
    transform: translate(-123px, 30px);
    font-family: 'Gilroy-medium', sans-serif;
    line-height: 21px;
    border:none;
    background-color: #4FBFA5;
    color:#FFFFFF;
    font-size: 18px;
    width:148px;
    height:40px;
    padding: 9px 15px 10px 15px;
  }
  .text_btn{
    display: inline-flex;
    padding: 25px 30px;
    div{
      color: #FFFFFF;
      font-size: 21px;
      line-height: 150%;
      font-weight: 700;
      text-align: left;
      padding-right: 15px;
    }
    .arrow_btn{
      padding-top: 10px;
      .next{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 15px;
        gap: 10px;
        width: 50px;
        height: 40px;
        transform: rotate(180deg);
        border: 1px solid #FFFFFF;
        background-color: #008A8E;
        transition: border 0.1s ease;
        img {
          transition: all 0.3s ease;
        }
        &:hover {
          cursor: pointer;
          border: 2px solid #FFFFFF;
          img {
            transform: translateX(-4px);
          }
        }
      }
    }
  }
}
</style>