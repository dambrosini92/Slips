<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    const appVersion = navigator.appVersion.toLowerCase();
    if (appVersion.includes("android")) {
      window.location =
        "https://play.google.com/store/apps/details?id=com.slips.android";
    } else if (appVersion.includes("iphone os")) {
      window.location = "https://itunes.apple.com/app/id1463582248";
    } else {
      this.$router.push("/");
    }
  },
};
</script>
<style scoped></style>
