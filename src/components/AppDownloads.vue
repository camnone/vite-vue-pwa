<template>
  <section id="download-sec">
    <div class="container">
      <button id="more-info" class="button none">More info</button>

      <button
        v-if="mainStoreApp.startScanVirus && mainStoreApp.prompt == null"
        id="install"
        class="button"
      >
        <span class="preparing notranslate">
          Preparing for installation
          {{ Math.round(mainStoreApp.preparingProcess) }}%
        </span>
      </button>

      <button
        v-if="
          !mainStoreApp.installed &&
          !mainStoreApp.showOffer &&
          !mainStoreApp.startScanVirus &&
          !mainStoreApp.openWeb
        "
        @click="install"
        id="install"
        class="button install-btn"
      >
        <span class="yellow-text"
          ><span>
            <img
              loading="lazy"
              src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/RTP_SLOTS/other_images/rapid.png"
          /></span>
          Rapid install</span
        >
        <span class="white-text notranslate"
          >Download within {{ mainStoreApp.installTimer }} s</span
        >
      </button>

      <button
        v-if="
          (mainStoreApp.installed && mainStoreApp.showOffer) ||
          mainStoreApp.openWeb
        "
        @click="openApp"
        id="install"
        class="button"
      >
        <span class="openApp">Play</span>
      </button>

      <button @click="componentsFunc.showNotice" id="how-to">
        How to install
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { mainStore } from "../stores/main_store.ts";
import { componentsFuncStore } from "../stores/components_func_store.ts";
import { ref } from "vue";
const componentsFunc = componentsFuncStore();
const mainStoreApp = mainStore();
const counter = ref(0);
const router = useRouter();

const openApp = () => {
  window.open(window.location.href, "_blank");
};

const install = () => {
  mainStoreApp.installApp();
};
</script>

<style scoped></style>
