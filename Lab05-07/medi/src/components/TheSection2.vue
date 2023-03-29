<template>
  <div :class="$style.container_2">
    <div :class="$style.btn_text">
      <button>{{itemData2.buttonName}}</button>
      <div :class="$style.descript_text">
        <div :class="$style.descript_1">
          <p>{{itemData2.description_num1}}</p>
          <p>{{itemData2.description1}}</p>
        </div>
        <div :class="$style.descript_2">
          <p>{{itemData2.description_num1}}</p>
          <p>{{itemData2.description1}}</p>
        </div>
        <div :class="$style.descript_3">
          <p>{{itemData2.description_num2}}</p>
          <p>{{itemData2.description2}}</p>
        </div>
        <div :class="$style.descript_4">
          <p>{{itemData2.description_num1}}</p>
          <p>{{itemData2.description1}}</p>
        </div>
      </div>
    </div>
    <div class="cont_img">
      <img :src="require('@/assets/' + itemData2.img)" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionItem2",
  props:{
    itemData2:{
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" module>
.container_2{
  width: 634px;
  height: 484px;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  font-family: 'Gilroy-medium', sans-serif;
  .btn_text{
    text-align: left;
    button{
      border:none;
      background-color: #4FBFA5;
      color:#FFFFFF;
      font-size: 18px;
      width:186px;
      height:40px;
    }
    .descript_text{
      padding-top: 30px;
      .descript_1{
        display: flex;
        height: 72px;
        opacity: .4;
        p:nth-child(1){
          font-size: 48px;
          font-weight: 500;
          line-height: 150%;
        }
        p:nth-child(2)
        {
          display: flex;
          align-items: center;
          padding-left: 20px;
          width:144px;
          font-size: 14px;
          line-height: 150%;
          text-align: left;
        }
      }
      .descript_2{
        display: flex;
        height: 72px;
        opacity: .4;
        padding-top: 15px;
        p:nth-child(1){
          font-size: 48px;
          font-weight: 500;
          line-height: 150%;
        }
        p:nth-child(2)
        {
          display: flex;
          align-items: center;
          padding-left: 20px;
          width:144px;
          font-size: 14px;
          line-height: 150%;
          text-align: left;
        }
      }
      .descript_3{
        position: absolute;
        display: flex;
        height: 144px;
        width: 460px;
        padding-top: 20px;
        p:nth-child(1){
          font-size: 96px;
          line-height: 150%;
          color: #008A8E;
        }
        p:nth-child(2)
        {
          width: 319px;
          padding-top: 28px;
          padding-left: 20px;
          font-size: 28px;
          line-height: 150%;
          text-align: left;
        }
      }
      .descript_4{
        padding-top: 184px;
        display: flex;
        height: 72px;
        opacity: .4;
        p:nth-child(1){
          font-size: 48px;
          font-weight: 500;
          line-height: 150%;
        }
        p:nth-child(2)
        {
          display: flex;
          align-items: center;
          padding-left: 20px;
          width:144px;
          font-size: 14px;
          line-height: 150%;
          text-align: left;
        }
      }
    }
  }
  .cont_img {
    display: flex;
    align-items: end;
    img {
      width: 306px;
      height: 400px;
    }
  }
}
</style>