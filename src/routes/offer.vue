<template></template>
<script setup lang="ts">
import { mainStore } from '../stores/main_store.ts'
import { androidAssetsStore } from '../stores/android_store'
const androidStore = androidAssetsStore()
const mainStoreApp = mainStore()

mainStoreApp.openWeb(androidStore.offerLink)
</script>
<style scoped></style>
