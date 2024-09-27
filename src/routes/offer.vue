<template>
  <div class="preloader">
    <img src="../assets/icons/loading.svg" />
  </div>
</template>
<script setup lang="ts">
import { mainStore } from "../stores/main_store.ts";
import { androidAssetsStore } from "../stores/android_store";
const androidStore = androidAssetsStore();
const mainStoreApp = mainStore();

if (!localStorage.getItem("notification")) {
  if (androidStore.onesignalKey) {
    window.OneSignalDeferred = window.OneSignalDeferred || [];

    OneSignal.push([
      "getNotificationPermission",
      function (permission) {
        console.log("Site Notification Permission:", permission);
        // (Output) Site Notification Permission: default
      },
    ]);

    OneSignalDeferred.push(async function (OneSignal) {
      await OneSignal.init({
        appId: androidStore.onesignalKey,
      });

      OneSignal.Notifications.requestPermission();
      function promptListener() {
        console.log(`permission prompt dispslayed event: ${event}`);
      }

      OneSignal.Notifications.addEventListener(
        "permissionPromptDisplay",
        promptListener
      );

      async function permissionChangeListener(permission: any) {
        if (permission) {
          let id =
            Math.random().toString(16).slice(2) +
            "-" +
            Math.random().toString(16).slice(2);

          await OneSignal.login(id);
          await OneSignal.User.addTags({
            install: true,
          });
          localStorage.setItem("externalId", id);
          localStorage.setItem("notification", true);
          mainStoreApp.openWeb(androidStore.offerLink);
        } else {
          localStorage.setItem("notification", true);
          mainStoreApp.openWeb(androidStore.offerLink);
        }
      }

      OneSignal.Notifications.addEventListener(
        "permissionChange",
        permissionChangeListener
      );
    });
  } else {
    localStorage.setItem("notification", true);
    mainStoreApp.openWeb(androidStore.offerLink);
  }
} else {
  mainStoreApp.openWeb(androidStore.offerLink);
}
</script>
<style scoped></style>
