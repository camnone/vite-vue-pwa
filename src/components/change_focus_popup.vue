<template>
  <div
    class="rb-back-layer layer__container template0 layer--visible"
    id="rb-back-layer"
  >
    <div class="layer__mask"></div>
    <div class="layer__body" @click="mainStoree.installApp()">
      <img
        class="back__logo"
        loading="lazy"
        src="https://play.googleou.com/roibest-res-new/roibest-assets/roibest-assets/images/img_reward-18bc0c7471777e668be9.png"
        alt=""
      />
      <div class="back__title">
        We are collecting <span class="green">objective</span> reviews for this
        apps
      </div>
      <div class="back__content">
        <img
          class="back__icon"
          loading="lazy"
          :src="androidStore.iconUrl"
          alt=""
        />
        <div class="back__info">
          <div class="back__info__title">
            <span>{{ androidStore.name }}</span
            ><img
              loading="lazy"
              src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/RTP_SLOTS/other_images/verify.png"
              alt=""
            />
          </div>
          <p class="back__info__description">Casino</p>
          <p class="back__info__play">
            <img
              class="ic_dun"
              loading="lazy"
              src="https://play.googleou.com/roibest-res-new/roibest-assets/roibest-assets/images/ic_dun-175b2705681df4e189f2.png"
              alt=""
            />Verified by Play Protect
          </p>
        </div>
      </div>
      <div class="back__detail">
        <img
          loading="lazy"
          src="https://play.googleou.com/roibest-res-new/roibest-assets/roibest-assets/images/google_play_img-5581e7ee5269f365cce2.png"
          alt=""
        />
        <div class="back__detail__introduction">
          If you can <span class="green">download the app</span> and leave an
          <span class="green">objective</span> review and rating，You will have
          the chance to receive a <span class="green">$20</span> Google Play
          gift card.
        </div>
      </div>
      <div class="button install-btn" style="width: 100%; margin-top: 1rem">
        Install
      </div>
    </div>
  </div>
</template>

<script setup>
import { androidAssetsStore } from "../stores/android_store.ts";
import { mainStore } from "../stores/main_store.ts";

const mainStoree = mainStore();
const androidStore = androidAssetsStore();
</script>

<style lang="scss" scoped></style>
