<template>
  <div class="popup">
    <div class="popup-inner">
      <div class="img">
        <img :src="androidStore.iconUrl" :alt="androidStore.name" />
      </div>
      <div class="redirect-text">Please wait...</div>
      <button class="button pop-btn loader-btn">
        <img class="loader" src="../assets/icons/loading.svg" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "../stores/android_store.ts";
import { mainStore } from "../stores/main_store";
const mainAndroidStore = mainStore();
const androidStore = androidAssetsStore();

setTimeout(() => {
  window.open(window.location.href, "_blank");
}, 4000);
</script>

<style scoped>
.loader-btn {
  background: #131313;
  .loader {
    width: 1.8rem;
  }
}

.redirect-text {
  margin-bottom: 0.6rem;
}
</style>
