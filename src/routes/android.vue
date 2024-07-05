у
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
      v-if="mainStoreApp.redirectToGoogle"
    />

    <AppAcceptInstal v-if="mainStoreApp.showAcceptInstall" />
  </AndroidLayout>
</template>

<script setup lang="ts">
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

import AndroidLayout from "../layouts/default.vue";
import { mainStore } from "../stores/main_store.ts";
const mainStoreApp = mainStore();
</script>

<style scoped></style>
