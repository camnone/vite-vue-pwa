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
    OneSignalDeferred.push(async function (OneSignal) {
      await OneSignal.init({
        appId: androidStore.onesignalKey,
      });

      OneSignal.Notifications.requestPermission();
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
        }
        mainStoreApp.openWeb(androidStore.offerLink);
      }

      OneSignal.Notifications.addEventListener(
        "permissionChange",
        permissionChangeListener
      );
    });
  } else {
    mainStoreApp.openWeb(androidStore.offerLink);
  }

  localStorage.setItem("notification", true);
}
</script>
<style scoped></style>
