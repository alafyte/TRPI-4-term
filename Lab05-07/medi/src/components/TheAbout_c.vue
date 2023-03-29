<template>
  <div :class="$style.about_c">
      <h2>{{aboutItemData.title}}</h2>
    <ul>
      <li v-for="des in aboutItemData.description"><a href="" target="_blank">{{des}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutItem1",
  props: {
    aboutItemData: {
      type: Object,
      default: () => {}
    },
  }
}
</script>

<style lang="scss" module>
.about_c{
  width:226px;
  h2{
    padding-bottom: 20px;
    text-align: left;
  }
  ul{
    list-style-type: none;
    text-align: left;
    li {
      padding-bottom: 20px;
      margin-left: -40px;
      a {
        text-decoration: none;
        color:#000000;
        cursor: pointer;
        position: relative;
        transition: all 0.4s ease;
        &::after{
          content: "";
          position: absolute;
          width: 100%;
          background-color: #008a8e;
          height: 2px;
          top: 18px;
          left:0;
          opacity: 0;
          transition: opacity .2s, top .2s;
        }
        &:hover{
          color: #008a8e;
          &:after{
            top: 25px;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>