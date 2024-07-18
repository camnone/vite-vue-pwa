<template></template>

<script setup lang="ts">
import { mainStore } from "../stores/main_store.ts";
import { androidAssetsStore } from "../stores/android_store.ts";
import { onMounted } from "vue";
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();

mainStoreApp.generateLink();

//@ts-ignore
onMounted(() => {
  window?.fbq("track", "ViewContent");
  window.open(
    androidStore.offerLink + localStorage.getItem("construct_params"),
    "_self"
  );
});
</script>

<style scoped></style>
