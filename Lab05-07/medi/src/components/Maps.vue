<template>
  <div :class="$style.modal_mask">
    <div :class="$style.modal_wrapper">
      <div :class="$style.modal_container">
        <a :class="$style.close" @click="$emit('close')"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#008A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g opacity="0.4">
            <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg></a>
        <iframe :class="$style.map" :src="mapSource" width="794" height="552" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Maps",
  props: {
    mapSource: String,
  }
}
</script>

<style module lang="scss">
.modal_mask {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  color: black;
}

.modal_wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal_container {
  width: 794px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 17px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Gilroy-Medium, Helvetica, sans-serif;
}
.close {
  display: block;
  float: right;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 2px;
  img {
    width: 30px;
    height: 30px;
  }
}
.map {
  display: block;
  margin: 0 auto;
  border-radius: 17px;
}
</style>