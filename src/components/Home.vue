<template>

  <div class="layout h-screen w-screen" >
    <div class="container">
      <div class="myheader">
        <img src="../assets/Logo.svg" alt="" />
      </div>
      <div class="row">
        <div class="column">
          <div class="textcolumn">
          <div class="mytext">Slips is an in­no­va­ti­ve so­cial app that al­lo­ws you to in­te­ract in real time with real people, wi­thin the real pla­ces around the city where you are.</div>
          <div id="cardtitle" class="mytexttitle">ONE SHOT</div>
          <div id="carddesctiption" class="mytext">People can see only once Your story</div>
          </div>
        </div>
        <div class="column">
          <div class="carouselbackground">
            <carousel>
              <div v-for="(image,i) in images"  v-bind:key="i">
                  <img :src="require(`../assets/${image.src}`)" :alt="image.alt">
              </div>
            </carousel>
          </div>
        </div>
      </div>
      <div class="btn rounded-full mydiv">
        <a target="blank" class="m-3" href="mailto:info@slips.social">
          <img
            class="rounded-full shadow w-56 "
            src="../assets/EmailBtn.svg"
            alt=""
          />
        </a>
      </div>
      <div class="text-white text-xs myfooter mydiv">
        <span class="px-2">
          Copyright © {{ new Date().getFullYear() }} Slips inc. All rights reserved.</span>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data () {
        return {
            images: [
              { src: "image_1.png", alt: 'One Shot', description: 'People can see only once Your story' },
              { src: "image_3.png", alt: 'ChitChat' , description: 'The ping pong chat, users can text you only once'},
              { src: "image_2.png", alt: 'Places' , description: 'Discover what\'s happening in real time' },
              { src: "image_4.png", alt: 'Chat' , description: 'Oustanding private chat with your friends' },
              { src: "image_5.png", alt: 'Map' , description: 'Discover places around the world'},
              { src: "image_6.png", alt: 'Filters' , description: 'Animated 3D masks and filters '},
              { src: "image_7.png", alt: 'Most Active', description: 'Most active People on the app' },
            ]
        }
  }
};
</script>

<style src="../assets/styles.css"></style>

<style scoped>
.layout {
  background-color: #000; 
  background-repeat: repeat;
  background-image: url("../assets/texture.png");
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
