<template>
  <AndroidLayout>
    <!-- <AppBar /> -->
    <AppTitle />
    <AppStats />
    <AppDownloads />
    <AppImgGallery />
    <AppAbout />
    <AppFullAbout />
    <AppRating />
    <AppReviews />
    <AppFullReviews />
    <AppDeveloper :class="{ bottomPad: isOnclick }" />
    <AppFooter v-if="!isOnclick" />
    <AppNotice />
    <AppRedirectPopUp
      description="you need to go to the browser"
      title="To install the application"
      buttonText="Go to browser"
      v-if="mainStoreApp.redirectToGoogle"
    />
    <AppAcceptInstal v-if="mainStoreApp.showAcceptInstall" />

    <ChangeFocusPopUp
      @click="showFocusPopUp = false"
      v-if="showFocusPopUp == true"
    />

    <div class="popup sw-loading" style="background-color: #1919199e">
      <div class="popup-inner">
        <img
          loading="lazy"
          src="../assets/icons/loading.svg"
          style="width: 100%; max-width: 8rem"
        />
      </div>
    </div>
  </AndroidLayout>
</template>

<script setup lang="ts">
import { getParams } from "../utils/params";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Loader from "../components/AppLoader.vue";
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
import ChangeFocusPopUp from "../components/change_focus_popup.vue";
import AppNotice from "../components/AppNotice.vue";
import AppRedirectPopUp from "../components/AppRedirectPopUp.vue";
import AppAcceptInstal from "../components/AppAcceptInstal.vue";
import { onMounted } from "vue";
import AndroidLayout from "../layouts/default.vue";
import { mainStore } from "../stores/main_store.ts";
import { androidAssetsStore } from "../stores/android_store.ts";
import * as lox from "../stores/backfix_store";
import { getCook } from "../utils/cookie";
const mainStoreApp = mainStore();
const androidStore = androidAssetsStore();
const leavePage = ref(false);
const router = useRouter();
const showFocusPopUp = ref(false);
const isOnclick = ref(getParams("external_id") ? true : false);
console.log(getParams("external_id"));

// document.addEventListener("visibilitychange", (event) => {
//   if (document.visibilityState == "visible") {
//   } else {
//     showFocusPopUp.value = true;
//   }
// });

addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  mainStoreApp.installTrue = true;
  mainStoreApp.startScanVirus = false;
  mainStoreApp.preparingProcess = 0;
  mainStoreApp.installLoading = false;
  mainStoreApp.startScanVirus = false;
  mainStoreApp.prompt = event;
});

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
  const internalHandler = async (e) => {
    e.preventDefault(); // required in some browsers
    e.returnValue = ""; // required in some browsers
    if (localStorage.getItem("resources")) {
      await mainStoreApp.openWeb(JSON.parse(readCookie("offerLink")));
    }
  };

  loadGoogleTranslateScript();
  changeLanguage();
});
</script>

<style lang="scss">
.bottomPad {
  padding-bottom: 4rem;
}
</style>
