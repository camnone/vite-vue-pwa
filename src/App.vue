<script setup lang="ts">
import { androidAssetsStore } from "./stores/android_store";
import { mainStore } from "./stores/main_store";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { ref, reactive } from "vue";
import { readCookie, reedDeepCookie } from "./utils/cookie";
const route = useRoute();
const defaultLanguage = ref("en");
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

function changeLanguage(lang) {
  let googleTranslateComboBox = document.querySelector(".goog-te-combo");
  if (googleTranslateComboBox) {
    googleTranslateComboBox.value = lang;
  }
  window.location = `#googtrans(${defaultLanguage.value}\|${lang})`;
  //location.reload();
}

if (!import.meta.env.SSR) {
  const mainStoreApp = mainStore();
  const androidStore = androidAssetsStore();

  addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    mainStoreApp.prompt = event;
  });

  mainStoreApp.init();
  loadGoogleTranslateScript();
  changeLanguage("es");
}
</script>

<template>
  <router-view />
</template>

<style scoped></style>
