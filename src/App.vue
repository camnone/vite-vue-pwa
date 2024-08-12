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

  addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    mainStoreApp.prompt = event;
  });
  const isMeta = mainStoreApp.isFbOrInst();
  onMounted(() => {
    mainStoreApp.init();
    // if (isMeta) {
    //   mainStoreApp.init();
    // } else {
    //   if (window.location.hostname == "localhost") {
    //     mainStoreApp.init();
    //   } else {
    //     mainStoreApp.oneSignalEvent();
    //   }
    // }
  });
}
</script>

<template>
  <router-view />
</template>

<style scoped></style>
