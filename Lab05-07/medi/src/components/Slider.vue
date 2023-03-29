<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <div ref="slider" :class="$style.slider" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%'}">
        <SliderItem
          v-for="item in sliderData"
          :key="item.id"
          :itemData="item"
          @prevSlide="prevSlide"
          @nextSlide="nextSlide"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SliderItem from "@/components/SliderItem.vue"
export default {
  name: "Slider",
  components: {
    SliderItem: SliderItem
  },
  props: {
    sliderData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentSlideIndex: 0
    }
  },
  methods: {
    prevSlide() {
      this.$refs.slider.style.opacity = '0';
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex -= 1;
      } else {
        this.currentSlideIndex = this.sliderData.length - 1;
      }
      this.$refs.slider.style.opacity = '1';
    },
    nextSlide() {
      if (this.currentSlideIndex == this.sliderData.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    }
  }
}
</script>

<style module lang="scss">
  .container {
    width: 100%;
    height: 100%;
    background-color: #4FBFA5;
  }
  .wrapper {
    width: 1296px;
    overflow: hidden;
    margin: 0 auto;
  }
  .slider {
    display: flex;
    transition: all 0.5s ease;
  }
</style>