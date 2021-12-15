<template>
  <div class="layout w-screen">
    <div class="container">
      <div class="myheader">
        <img class="myimage" src="../assets/Logo.svg" alt="" />
      </div>
      <div class="row">
        <div class="column">
          <div class="textcolumn">
            <div class="descrtext">
              Slips is an in­no­va­ti­ve so­cial app that al­lo­ws you to
              in­te­ract in real time with real people, wi­thin the real pla­ces
              around the city where you are.
            </div>
            <div id="cardtitle" class="mytexttitle">ONE SHOT</div>
            <div id="carddesctiption" class="mytext">
              People can see only once Your story
            </div>
            <div class="rounded-full mydiv">
                <a target="blank" class="m-3" href="mailto:info@slips.social">
                <img
                  class="rounded-full shadow w-56"
                  src="../assets/EmailBtn.svg"
                  alt=""
                />
                </a>
         <a target="blank" class="instabutton" href="https://www.instagram.com/its.slips/">
          <img
            class="instalogo"
            src="../assets/insta_logo.svg"
            alt=""
          />
        </a>
      </div>
          </div>
        </div>
        <div class="column">
          <div class="carouselbackground">
            <Carousel />
          </div>
        </div>
      </div>
      <div class="mydivmobile">
        <div target="blank" class="contactbutton" href="mailto:info@slips.social">
          <img
            class="myimage"
            src="../assets/EmailBtn.svg"
            alt=""
          />
        </div>
        <div target="blank" class="instabutton" href="https://www.instagram.com/its.slips/">
          <img
            class="myimage"
            src="../assets/insta_logo.svg"
            alt=""
          />
        </div>
      </div>
      
      <div class="text-white text-xs myfooter">
        <span class="px-2">
          Copyright © {{ new Date().getFullYear() }} Slips inc. All rights
          reserved.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
export default {
  name: "App",
  components: {
    Carousel,
  },
  data() {
    return {};
  },
};
</script>

<style src="../assets/styles.css"></style>

<style scoped>
.layout {
  background-color: #fafafa;
}

/**linear-gradient(
    135deg,
    #e91d76,
    #cc1672 54%,
    #c31470 62%,
    #b6116e 71%,
    #ae0f6d 73%,
    #810466 84%,
    #4a0142 */

.content {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo {
  min-width: 14rem;
}

.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}

.footer {
  bottom: 1rem;
}
</style>
