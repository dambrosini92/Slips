<template>
  <div class="carousel" ref="carousel">
    <CarouselItem
      :currentImage="image"
      v-for="(image, index) in images"
      :key="index"
    >
      <img :src="require(`../assets/${image.src}`)" :alt="image.alt" />
    </CarouselItem>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
export default {
  components: {
    CarouselItem,
  },
  data() {
    return {
      images: [
        {
          src: "image_1.png",
          alt: "One Shot",
          description: "People can see only once Your story",
        },
        {
          src: "image_3.png",
          alt: "ChitChat",
          description: "The ping pong chat, users can text you only once",
        },
        {
          src: "image_2.png",
          alt: "Places",
          description: "Discover what's happening in real time",
        },
        {
          src: "image_4.png",
          alt: "Chat",
          description: "Oustanding private chat with your friends",
        },
        {
          src: "image_5.png",
          alt: "Map",
          description: "Discover places around the world",
        },
        {
          src: "image_6.png",
          alt: "Filters",
          description: "Animated 3D masks and filters ",
        },
        {
          src: "image_7.png",
          alt: "Most Active",
          description: "Most active People on the app",
        },
      ],
    };
  },
  mounted() {
    this.arrange(0);
  },
  methods: {

    _mod: (n, m) => ((n % m) + m) % m,

    arrange(centerIndex) {
      const center = this.$children[centerIndex];
      const half = (this.$children.length - 1) / 2;

      const before = [];
      for (let i = centerIndex - 1; before.length < half; i--) {
        before.push(this.$children[this._mod(i, this.$children.length)]);
      }

      const after = [];
      for (
        let i = centerIndex + 1;
        after.length < this.$children.length - before.length - 1;
        i++
      ) {
        after.push(this.$children[this._mod(i, this.$children.length)]);
      }

      center.xtrans = 0;
      center.scale = 1;
      center.opacity = 1;
      center.zIndex = Math.max(before.length, after.length) + 1;

      [before, after].forEach((list, listIndex) => {
      
        let parentTrans = 0;

        list.forEach((item, i) => {
          item.scale = 0.8 ** (i + 1);
          const absolute = 105 * item.scale * 1.125 + parentTrans;
          parentTrans = absolute; 
          item.xtrans = (listIndex == 0 ? -1 : 1) * absolute;
          item.opacity = Math.max(1 - 0.25 * (i / 2 + 1) ** 2, 0);
          item.zIndex = Math.max(before.length, after.length) - i;
        });
      });
    },
  },
};
</script>

<style>
</style>

