<template>
  <a ref="link" style="display: none"></a>
  <div class="popup">
    <div class="popup-inner" @click="openWeb()">
      <div class="img">
        <img
          loading="lazy"
          :src="androidStore.iconUrl"
          :alt="androidStore.name"
        />
      </div>
      <div class="text1">{{ title }}</div>
      <div class="text2">{{ description }}</div>
      <button class="button pop-btn">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script setup>
import { getParams } from "../utils/params";
import { androidAssetsStore } from "../stores/android_store.ts";
import { mainStore } from "../stores/main_store";
import { onMounted, ref } from "vue";
const mainAndroidStore = mainStore();
const androidStore = androidAssetsStore();

const link = ref();
defineProps({
  title: String,
  description: String,
  buttonText: String,
});

const openWeb = () => {
  window.open(
    `intent://navigate?url=${window.location.hostname}/${window.location.search}#Intent;scheme=googlechrome;end;`
  );
};

onMounted(() => {
  link.value.setAttribute(
    "href",
    `intent://navigate?url=${window.location.hostname}/${window.location.search}#Intent;scheme=googlechrome;end;`
  );
  link.value.click();
});
</script>
