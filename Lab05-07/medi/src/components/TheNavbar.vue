<template>
  <div class="panel1">
    <nav>
      <div v-for="item in navitem" :key="item.id"><a href="">{{item.name}}</a></div>
      <button @click="showModal = true">Запись на прием</button>
      <Transition name="modal">
        <Appointment v-if="showModal" @close="showModal = false"/>
      </Transition>
    </nav>
  </div>
</template>

<script>
import Appointment from "@/components/Appointment.vue";
export default {
  components: {
    Appointment : Appointment
  },
  data() {
    return {
      showModal: false
    }
  },
  props:{
    navitem:{
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang="scss">
.panel1{
  height: 87px;
  background-color: #4fbfa5;
  display: flex;
  font-family: 'Gilroy-medium', sans-serif;

  nav{
    font-family: 'Gilroy-medium', sans-serif;
    display: flex;
    align-items: center;
    height: 87px;
    font-size: 18px;
    color:#ffff;
    margin-right: auto;
    margin-left: auto;
    a{
      text-decoration: none;
      color:#ffff;
      position: relative;
      transition: all 0.4s ease;
      &::after{
        content: "";
        position: absolute;
        height: 2px;
        background-color: #e0e0e0;
        width: 0;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
        transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
      }
      &:hover{
        color: #e0e0e0;
        &:after{
          width: 100%;
        }
      }

    }
    div:nth-child(1){
      margin-left: 65px;
    }
    div:nth-child(2n){
      margin-left:65px;
      margin-right:65px;
      flex:none;
    }
    button{
      cursor: pointer;
      font-family: 'Gilroy-medium', sans-serif;
      height: 45px;
      background-color: #ffff;
      border:none;
      font-size: 18px;
      padding: 10px 15px;
      margin-left:95px;
      margin-right:10px;
      &:hover{
        background-color: #E6F3F4;
      }
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