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
    // http://stackoverflow.com/q/4467539
    _mod: (n, m) => ((n % m) + m) % m,

    // Distribute elements so that they align with the selected elemenent in the center
    arrange(centerIndex) {
      const center = this.$children[centerIndex];
      const half = (this.$children.length - 1) / 2;

      // Items that will be displayed to the left of the item at centerIndex
      const before = [];
      // Keep adding items before until half the non-centerIndex items have been added
      for (let i = centerIndex - 1; before.length < half; i--) {
        // this._mod is used to emulate a toroidal array by mapping elements below index 0 or beyond
        // the max index to elements in the valid array range
        before.push(this.$children[this._mod(i, this.$children.length)]);
      }

      // Items that will be displayed to the right of the item at centerIndex
      const after = [];
      for (
        let i = centerIndex + 1;
        after.length < this.$children.length - before.length - 1;
        i++
      ) {
        after.push(this.$children[this._mod(i, this.$children.length)]);
      }

      // Position all elements

      // Position center
      center.xtrans = 0;
      center.scale = 1;
      center.opacity = 1;
      center.zIndex = Math.max(before.length, after.length) + 1;

      // Position elements to left and right
      [before, after].forEach((list, listIndex) => {
        // Tracks the amount by which the parent was translated
        let parentTrans = 0;

        // Apply styles for each element in selected list
        list.forEach((item, i) => {
          // Set size
          item.scale = 0.8 ** (i + 1);
          // Set x offset. Negative for before, positive for after
          const absolute = 105 * item.scale * 1.125 + parentTrans;
          parentTrans = absolute; // Update how much parent was translated by
          item.xtrans = (listIndex == 0 ? -1 : 1) * absolute;
          // Set opacity
          item.opacity = Math.max(1 - 0.25 * (i / 2 + 1) ** 2, 0);
          // Set z-index
          item.zIndex = Math.max(before.length, after.length) - i;
        });
      });
    },
  },
};
</script>

<style>
</style>

