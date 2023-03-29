<template>
  <div :class="$style.container_main">
    <div :class="$style.container1">
      <button v-for="b in buttonitem" :key="b.id"><a href="">{{b.name}}</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonItem",
  props:{
    buttonitem:{
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" module>
.container_main{
  color: #FFFFFF;
  background-color: #4FBFA5;
  .container1{
    display: flex;
    width: 1296px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    button{
      border: none;
      a{
        font-family: 'Gilroy-medium', sans-serif;
        font-size: 21px;
        text-decoration: none;
        color:#FFFFFF;
      }
      &:hover {
        cursor: pointer;
        border: 1px solid #FFFFFF;
      }
    }
    button:hover{
      color:#c7c7c7;
      background-color: #00d6dc;
      cursor: pointer;
      transition: color .3s ease;
    }
    button:nth-child(1){
      width:648px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #00868A;
    }
    button:nth-child(2){
      width:324px;
      display: flex;
      flex: none;
      justify-content: center;
      align-items: center;
      background-color: #4FBFA5;
    }
    button:nth-child(3){
      width:324px;
      display: flex;
      flex: none;
      justify-content: center;
      align-items: center;
      background-color: #00868A;
    }
  }
}
</style>