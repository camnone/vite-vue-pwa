<template></template>

<script setup lang="ts">
import { mainStore } from "../stores/main_store.ts";
import { androidAssetsStore } from "../stores/android_store.ts";
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();

// mainStoreApp.generateLink();
fbq("track", "ViewContent");
window.open(androidStore.offerLink, "_self");
</script>

<style scoped></style>
