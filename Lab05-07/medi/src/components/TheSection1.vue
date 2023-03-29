<template>
  <div :class="$style.container_1">
    <div :class="$style.wrap1">
      <div :class="$style.btn">
        <button>{{itemData1.buttonName}}</button>
      </div>
      <div :class="$style.descript">{{itemData1.description}}</div>
      <div :class="$style.more_btn">
        <button :class="$style.next">
          <img :src="require('@/assets/' + 'Arrow 1.svg')" alt="">
        </button>
        <div>Подробнее</div>
      </div>
    </div>
    <div :class="$style.wrap2">
      <img :src="require('@/assets/' + itemData1.img)" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionItem1",
  props:{
    itemData1:{
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" module>
.container_1{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Gilroy-medium', sans-serif;
  width:526px;
  height:580px;
  background-color: #008A8E;
  .wrap1{
    display: flex;
    flex-direction: column;
    .btn{
      padding-top: 35px;
      padding-left: 40px;
      display: flex;
      justify-content: left;
      button{
        font-family: 'Gilroy-medium', sans-serif;
        line-height: 21px;
        border:none;
        background-color: #4FBFA5;
        color:#FFFFFF;
        font-size: 18px;
        width:125px;
        height:40px;
      }
    }
    .descript{
      color: #FFFFFF;
      font-size: 30px;
      text-align: left;
      line-height: 50px;
      text-transform: none;
      padding-left:40px;
      padding-top:30px;
    }
    .more_btn{
      display: flex;
      align-items: center;
      padding-left:40px;
      padding-top:28px;
      color:#FFFFFF;
      text-transform: uppercase;
      height: 40px;
      font-weight: bold;
      letter-spacing: 1px;
      .next{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 15px;
        transform: rotate(180deg);
        gap: 10px;
        width: 50px;
        height: 40px;
        border: 1px solid #FFFFFF;
        background-color: #008A8E;
        transition: border 0.1s ease;
        img {
          transition: all 0.3s ease;
        }
        &:hover{
          cursor: pointer;
          border: 2px solid #FFFFFF;
          img {
            transform: translateX(-4px);
          }
        }
      }
      div{
        margin-left:20px;
      }
    }
  }
  .wrap2{
    margin-top:38px;
  }
}
</style>