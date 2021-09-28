<template>
  <div class="layout fixed h-screen w-screen">
    <div class="content container max-w-2xl min-">
      <div class=" w-full flex items-center justify-center">
        <img class=" logo w-1/2 mb-16" src="../assets/Logo.svg" alt="" />
      </div>
      <div class=" w-full flex items-center justify-center">
      <p class="mytext" >Slips is an in­no­va­ti­ve and uni­que so­cial network mobile app that al­lo­ws you to in­te­ract in real time with real people, wi­thin the real pla­ces around the city where you are.</p>
      </div>
      <div class="btn rounded-full w-full flex items-center justify-center">
        <a
          target="blank"
          class="m-3"
          href="https://itunes.apple.com/app/id1463582248"
        >
          <img
            class="rounded-full shadow w-56 "
            src="../assets/IosBtn.svg"
            alt=""
        /></a>
      </div>
      <div class=" btn rounded-full w-full flex items-center justify-center">
        <a
          target="blank"
          class="m-3"
          href="https://play.google.com/store/apps/details?id=com.slips.android"
        >
          <img
            class="rounded-full shadow w-56 "
            src="../assets/AndroidBtn.svg"
            alt=""
        /></a>
      </div>
      <div class=" btn rounded-full w-full flex items-center justify-center">
        <a target="blank" class="m-3" href="mailto:info@slips.social">
          <img
            class="rounded-full shadow w-56 "
            src="../assets/EmailBtn.svg"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="w-full text-white text-xs text-center footer fixed">
      <span class="px-2">
        Copyright © {{ new Date().getFullYear() }} Slips inc. All rights
        reserved.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style src="../assets/styles.css"></style>

<style scoped>
.layout {
  background: linear-gradient(
    135deg,
    #e91d76,
    #cc1672 54%,
    #c31470 62%,
    #b6116e 71%,
    #ae0f6d 73%,
    #810466 84%,
    #4a0142
  );
}
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
