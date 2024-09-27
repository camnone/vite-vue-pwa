<template>
  <div class="popup" @click="install">
    <div class="popup-inner">
      <div class="img">
        <img
          :src="androidStore.iconUrl"
          :alt="androidStore.name"
          loading="lazy"
        />
      </div>
      <div class="text1">Install it faster!</div>
      <div class="text2">Have fun playing with us</div>
      <button class="button pop-btn">Download</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { androidAssetsStore } from "../stores/android_store.ts";
import { mainStore } from "../stores/main_store";
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();

const install = () => {
  mainStoreApp.installApp();
  mainStoreApp.showAcceptInstall = false;
};
</script>

<style scoped lang="scss">
.popup {
  &-inner {
    .img {
      img {
        max-width: 180px;
      }
    }
    .text1 {
      font-size: 1.4rem;
    }

    .text2 {
      font-size: 0.8rem;
    }
  }
}
</style>
