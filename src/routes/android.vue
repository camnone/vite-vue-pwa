<template>
  <AndroidLayout>
    <AppBar />
    <AppTitle />
    <AppStats />
    <AppDownloads />
    <AppImgGallery />
    <AppAbout />
    <AppFullAbout />
    <AppRating />
    <AppReviews />
    <AppFullReviews />
    <AppDeveloper />
    <AppFooter />
    <AppNotice />
    <AppRedirectPopUp
      description="you need to go to the browser"
      title="To install the application"
      buttonText="Go to browser"
      v-if="mainStoreApp.redirectToGoogle"
    />

    <AppAcceptInstal v-if="mainStoreApp.showAcceptInstall" />
  </AndroidLayout>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import AppBar from "../components/AppBar.vue";
import AppTitle from "../components/AppTitle.vue";
import AppStats from "../components/AppStats.vue";
import AppDownloads from "../components/AppDownloads.vue";
import AppImgGallery from "../components/AppImgGallery.vue";
import AppAbout from "../components/AppAbout.vue";
import AppFullAbout from "../components/AppFullAbout.vue";
import AppRating from "../components/AppRating.vue";
import AppReviews from "../components/AppReviews.vue";
import AppFullReviews from "../components/AppFullReviews.vue";
import AppDeveloper from "../components/AppDeveloper.vue";
import AppFooter from "../components/AppFooter.vue";
import AppNotice from "../components/AppNotice.vue";
import AppRedirectPopUp from "../components/AppRedirectPopUp.vue";
import AppAcceptInstal from "../components/AppAcceptInstal.vue";
import { onMounted } from "vue";
import AndroidLayout from "../layouts/default.vue";
import { mainStore } from "../stores/main_store.ts";
const mainStoreApp = mainStore();
const leavePage = ref(false);
const router = useRouter();

function getBrowserLocales(options = {}) {
  const defaultOptions = {
    languageCodeOnly: false,
  };
  const opt = {
    ...defaultOptions,
    ...options,
  };
  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;
  if (!browserLocales) {
    return undefined;
  }
  return browserLocales.map((locale) => {
    const trimmedLocale = locale.trim();
    return opt.languageCodeOnly ? trimmedLocale.split(/-|_/)[0] : trimmedLocale;
  });
}
const defaultLanguage = ref(getBrowserLocales({ languageCodeOnly: true })[0]);
function changeLanguage() {
  window.location = `#googtrans(${defaultLanguage.value})`;
}
function loadGoogleTranslateScript() {
  const script = document.createElement("script");
  script.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.head.appendChild(script);

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
}

onMounted(() => {
  loadGoogleTranslateScript();
  changeLanguage();
  mainStoreApp.oneSignalEvent();
});
</script>

<style scoped></style>
