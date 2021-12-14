<template>
  <div class="carousel-item" v-bind:style="style" v-on:click="centerSelf">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["currentImage"],
  data() {
    return {
      zIndex: 0,
      xtrans: 0,
      ytrans: 0,
      scale: 1,
      opacity: 1,
    };
  },
  computed: {
     image() {
       return this.currentImage;
     },
    style() {
      return {
        transition: "transform 0.5s, opacity 0.5s",
        transform: this.transform,
        "z-index": this.zIndex,
        opacity: this.opacity,
        cursor: "pointer",
      };
    },

    transform() {
      return [
        `translate(${this.xtrans - 50}%, ${this.ytrans - 50}%)`,
        `scale(${this.scale})`,
      ].join(" ");
    },
  },
  methods: {

    fade(element, text) {
      let op = 1;
      let timer = setInterval(function () {
        if (op <= 0.1) {
          clearInterval(timer);
          element.innerHTML = text;
          let _op = 0.1;
          element.style.display = "block";
          let _timer = setInterval(function () {
            if (_op >= 1) {
              clearInterval(_timer);
            }
            element.style.opacity = _op;
            element.style.filter = "alpha(opacity=" + _op * 100 + ")";
            _op += _op * 0.1;
          }, 10);
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op -= op * 0.1;
      }, 10);
    },

    centerSelf() {
      this.$parent.arrange(this.$parent.$children.indexOf(this));
      const element = document.getElementById("cardtitle");
      const descrelement = document.getElementById("carddesctiption");
      const title = this.image.alt;
      const description = this.image.description;
      this.fade(descrelement, description);
      this.fade(element, title.toUpperCase());
    },
  },
};
</script>

<style>
</style>

