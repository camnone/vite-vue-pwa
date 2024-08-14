<script setup lang="ts">
import { androidAssetsStore } from "./stores/android_store";
import { mainStore } from "./stores/main_store";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { ref, reactive } from "vue";
import { readCookie, reedDeepCookie } from "./utils/cookie";
const route = useRoute();

if (!import.meta.env.SSR) {
  const mainStoreApp = mainStore();
  const androidStore = androidAssetsStore();

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    androidStore.topBarGoogle = androidStore.topBarGoogleWhite;
    androidStore.topBarTopDev = androidStore.topBarTopDevWhite;
  }

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.classList.remove("dark");
    androidStore.topBarGoogle = androidStore.topBarGoogleBlack;
    androidStore.topBarTopDev = androidStore.topBarTopDevBlack;
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        document.body.classList.add("dark");
        androidStore.topBarGoogle = androidStore.topBarGoogleWhite;
        androidStore.topBarTopDev = androidStore.topBarTopDevWhite;
        document.body.style = "";
      } else {
        document.body.classList.remove("dark");
        androidStore.topBarGoogle = androidStore.topBarGoogleBlack;
        androidStore.topBarTopDev = androidStore.topBarTopDevBlack;
      }
    });

  addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    mainStoreApp.prompt = event;
  });

  onMounted(() => {
    mainStoreApp.init();
  });
}
</script>

<template>
  <router-view />
</template>

<style scoped></style>
