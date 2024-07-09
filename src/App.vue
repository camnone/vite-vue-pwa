<script setup lang="ts">
import { androidAssetsStore } from "./stores/android_store";
import { mainStore } from "./stores/main_store";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { ref, reactive } from "vue";
const route = useRoute();
if (!import.meta.env.SSR) {
  const mainStoreApp = mainStore();
  const androidStore = androidAssetsStore();
  const defaultLanguage = ref("en");

  addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    mainStoreApp.prompt = event;
  });

  function loadGoogleTranslateScript() {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: defaultLanguage.value,
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }
  mainStoreApp.init();
  loadGoogleTranslateScript();
}
</script>

<template>
  <router-view />
</template>

<style scoped></style>
