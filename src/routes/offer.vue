<template></template>
<script setup lang="ts">
import { mainStore } from "../stores/main_store.ts";
const mainStoreApp = mainStore();

mainStoreApp.openWeb();
</script>
<style scoped></style>
