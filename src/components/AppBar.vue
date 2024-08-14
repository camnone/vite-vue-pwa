<template>
  <div ref="topBar" class="topbar" id="topbar">
    <img loading="lazy" class="left" :src="store.topBarGoogle" />

    <img class="right" loading="lazy" :src="store.topBarTopDev" />
  </div>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "../stores/android_store";

const store = androidAssetsStore();
</script>
