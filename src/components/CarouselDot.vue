<template>
  <div class="dot" v-bind:style="style"></div>
</template>

<script>
export default {
  data() {
    return { selected: true };
  },
  computed: {
    style: () => ({
      opacity: this.selected ? 1 : 0.5,
    }),
  },
};
</script>

<style >
</style>


