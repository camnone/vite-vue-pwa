<template>
  <section id="download-sec">
    <div class="container">
      <button id="more-info" class="button none">More info</button>

      <button
        v-if="mainStoreApp.startScanVirus && mainStoreApp.prompt == null"
        id="install"
        class="button"
      >
        <span class="preparing">
          Preparing
          <span class="round">
            {{ Math.round(mainStoreApp.preparingProcess) }}%</span
          >
        </span>
      </button>

      <button
        v-if="
          !mainStoreApp.installed &&
          !mainStoreApp.showOffer &&
          !mainStoreApp.startScanVirus
        "
        @click="install"
        id="install"
        class="button install-btn"
      >
        <span v-if="mainStoreApp.installTrue == false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <radialGradient
              id="a12"
              cx=".66"
              fx=".66"
              cy=".3125"
              fy=".3125"
              gradientTransform="scale(1.5)"
            >
              <stop offset="0" stop-color="#FFFFFF"></stop>
              <stop offset=".3" stop-color="#FFFFFF" stop-opacity=".9"></stop>
              <stop offset=".6" stop-color="#FFFFFF" stop-opacity=".6"></stop>
              <stop offset=".8" stop-color="#FFFFFF" stop-opacity=".3"></stop>
              <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"></stop>
            </radialGradient>
            <circle
              transform-origin="center"
              fill="none"
              stroke="url(#a12)"
              stroke-width="15"
              stroke-linecap="round"
              stroke-dasharray="200 1000"
              stroke-dashoffset="0"
              cx="100"
              cy="100"
              r="70"
            >
              <animateTransform
                type="rotate"
                attributeName="transform"
                calcMode="spline"
                dur="2"
                values="360;0"
                keyTimes="0;1"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
            <circle
              transform-origin="center"
              fill="none"
              opacity=".2"
              stroke="#FFFFFF"
              stroke-width="15"
              stroke-linecap="round"
              cx="100"
              cy="100"
              r="70"
            ></circle>
          </svg>
        </span>

        <span v-else class="white-text">Install</span>
      </button>

      <button
        v-if="mainStoreApp.installed && mainStoreApp.showOffer"
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
import { mainStore } from "../stores/main_store.ts";
import { componentsFuncStore } from "../stores/components_func_store.ts";
const componentsFunc = componentsFuncStore();
const mainStoreApp = mainStore();

const openApp = () => {
  mainStoreApp.allowBackFix = false;
  window.open(window.location.href, "_blank");
};

const install = () => {
  mainStoreApp.installApp();
};
</script>

<style scoped lang="scss">
.preparing {
  color: #fff;
}
.round {
  margin-left: 5px;
}

.install-btn {
  svg {
    width: 100%;
    max-width: 2rem;
  }
}

.disabled {
  background: #024f37;
  border: none;
  pointer-events: none;
  span {
    color: #beb9b9 !important;
  }
}
</style>
