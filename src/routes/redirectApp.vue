<template>
	<div class="popup" @click="openApp">
		<div class="popup-inner">
			<div class="img">
				<img :src="androidStore.iconUrl" :alt="androidStore.name" />
			</div>
			<div v-if="precessing" class="redirect-text">
				Completing installation...
			</div>
			<button class="button" :class="{ loaderBtn: precessing }">
				<div v-if="!precessing" class="text">Open</div>
				<img
					v-if="precessing"
					class="loader"
					src="../assets/icons/loading.svg"
				/>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { androidAssetsStore } from '../stores/android_store.ts'
import { mainStore } from '../stores/main_store'
import { ref } from 'vue'

const mainAndroidStore = mainStore()
const androidStore = androidAssetsStore()
const precessing = ref(true)
setTimeout(() => {
	precessing.value = false
}, 4000)

const openApp = () => {
	localStorage.setItem('redirect', true)
	window.open(window.location.href, '_blank')
}
</script>

<style scoped>
.text {
	font-size: 1.4rem;
}
.loaderBtn {
	background: #131313;
	.loader {
		width: 1.8rem;
	}
}

.redirect-text {
	margin-bottom: 0.6rem;
}
</style>
