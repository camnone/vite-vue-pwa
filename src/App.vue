<script setup lang="ts">
import { androidAssetsStore } from "./stores/android_store";
import { mainStore } from "./stores/main_store";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();

if (!import.meta.env.SSR) {
  addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    mainStoreApp.prompt = event;
  });
  mainStoreApp.init();
}
</script>

<template>
  <router-view />
</template>

<style scoped></style>
