<template>
  <div class="dots">
    <carouselDot v-for="(item, index) in numDots" :key="index" />
  </div>
</template>

<script>
import carouselDot from "./CarouselDot.vue";
export default {
  components: {
    carouselDot,
  },
  props: ["numDots"],
  data() {
    return {};
  },
};
</script>

<style>
</style>
