<template>
  <div class="preloader">
    <img loading="lazy" src="../assets/icons/loading.svg" />
  </div>
</template>

<style lang="scss">
.preloader {
  img {
    display: flex;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8rem;
    height: 8rem;
    border-radius: 10px;
  }
}
</style>
