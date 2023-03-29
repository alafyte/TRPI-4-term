<template>
  <div :class="$style.slider_item">
    <section :class="$style.item">
    <p :class="$style.name">{{ itemData.name }}</p>
    <p :class="$style.description">{{ itemData.description}}</p>
    <button :class="$style.more"><a href="" target="_blank">Подробнее</a></button>
    </section>
    <section :class="$style.controls">
    <img :src="require('@/assets/' + itemData.img)" alt="">
      <div :class="$style.buttons">
        <button :class="$style.prev" @click="$emit('prevSlide', itemData.id)">
          <img :src="require('@/assets/' + 'Arrow 1.svg')" alt="">
        </button>
        <button :class="$style.next" @click="$emit('nextSlide', itemData.id)">
          <img :src="require('@/assets/' + 'Arrow 1.svg')" alt="">
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">


export default {
  name: "SliderItem",
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" module>
.slider_item {
  display: flex;
}
.controls {
  height: 533px;
}
.item {
  width: 416px;
  display: flex;
  flex-direction: column;
  margin-right: 134px;
  margin-top: 133px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 119px;
  height: 50px;
  margin-left: -180px;
  margin-top: -115px;
}
.name {
  text-align: justify;
  width: 416px;
  height: 72px;
  margin-bottom: 20px;
  font-family: 'Gilroy-Medium', 'Helvetica', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 150%;
  color: #FFFFFF;
}
.description {
  width: 416px;
  height: 84px;
  text-align: left;
  font-family: 'Gilroy-Medium', 'Helvetica', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 40px;
}
.next {
  transform: rotate(180deg);
  border-left: none;
}
.prev, .next {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 15px;
  gap: 10px;
  width: 60px;
  height: 50px;
  border: 1px solid #FFFFFF;
  background-color: #4FBFA5;
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
.more {
  background: #00868A;
  border: none;
  width: 163px;
  height: 50px;
  a {
    text-decoration: none;
    width: 113px;
    height: 21px;
    font-family: 'Gilroy-Medium', 'Helvetica', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid #FFFFFF;
  }
}
</style>