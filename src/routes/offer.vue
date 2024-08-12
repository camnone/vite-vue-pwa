<template></template>
<script setup lang="ts">
import { mainStore } from "../stores/main_store.ts";
import { androidAssetsStore } from "../stores/android_store.ts";
import { onMounted } from "vue";
import { userStatistics } from "../stores/user_statistics";
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();

mainStoreApp.generateLink();

onMounted(() => {
  fbq("track", "ViewContent");
  window.open(
    androidStore.offerLink + localStorage.getItem("construct_params"),
    "_self"
  );
});
</script>
<style scoped></style>
