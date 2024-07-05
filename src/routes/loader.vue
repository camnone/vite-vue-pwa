<template>
  <div class="preloader">
    <img src="../assets/icons/loading.svg" />
  </div>
</template>

<script setup lang="ts">
import AppLoader from "../components/AppLoader.vue";
</script>

<style lang="scss">
.preloader {
  display: flex;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #46404041;
  width: 10rem;
  height: 10rem;
  border-radius: 10px;
  justify-content: center;

  img {
    height: 100%;
    width: 50px;
  }
}
</style>
