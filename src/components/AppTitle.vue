<template>
  <div class="store-wrap" :class="{ withvideo: withvideo }">
    <section id="video-header" class="cover" v-if="withvideo">
      <div class="play">
        <i class="material-icons-outlined">play_arrow</i> Trailer
      </div>

      <video muted loop autoplay @loadeddata="videoLoaded">
        <source :src="androidStore.video" @error="errorFunc" type="video/mp4" />
      </video>
    </section>

    <header
      id="app-title"
      :class="['container', { loading: mainStoreApp.installLoading }]"
    >
      <div class="img">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="img-container">
          <img
            loading="lazy"
            :src="androidStore.iconUrl"
            :alt="androidStore.name"
          />
        </div>
      </div>
      <div id="app-name">
        <h2 class="notranslate">
          {{ androidStore.name }}
          <img
            loading="lazy"
            src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/RTP_SLOTS/other_images/verify.png"
          />
        </h2>
        <span v-if="!mainStoreApp.installLoading">{{
          androidStore.subtitle
        }}</span>
        <span v-if="mainStoreApp.installLoading"
          >{{ Math.round(mainStoreApp.installProcess) }}%</span
        >

        <div><span>Contains ads</span><span>In-app purchases</span></div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { androidAssetsStore } from "../stores/android_store.ts";
import { mainStore } from "../stores/main_store.ts";
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();
const withvideo = ref(true);
const errorFunc = (e) => {
  withvideo.value = false;
};
const videoLoaded = () => {
  withvideo.value = true;
};
</script>

<style scoped></style>
