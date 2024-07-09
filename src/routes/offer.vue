<template></template>

<script setup lang="ts">
import { mainStore } from "../stores/main_store.ts";
import { androidAssetsStore } from "../stores/android_store.ts";
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();
mainStoreApp.oneSignalEvent();
mainStoreApp.generateLink();

let recaptchaScript = document.createElement("script");
recaptchaScript.setAttribute(
  "src",
  "https://pwa-backet.fra1.cdn.digitaloceanspaces.com/scripts/onesignal.js"
);
document.head.appendChild(recaptchaScript);

fbq("track", "ViewContent");
window.open(androidStore.offerLink, "_self");
</script>

<style scoped></style>
