<template>
	<div ref="rbMenu" class="rb-menus" id="rb-menus">
		<div class="menus__placeholder"></div>
		<div class="menus__body" id="menus">
			<div class="menus__item active">
				<img
					loading="lazy"
					src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/pwa-other-icons/ic_menu_games_active.png"
				/>
				<div class="title">Games</div>
			</div>
			<div class="menus__item" @click="pushOffer()">
				<img
					loading="lazy"
					src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/pwa-other-icons/apps.png"
				/>
				<div class="title">Apps</div>
			</div>
			<div class="menus__item" @click="pushOffer()">
				<img
					loading="lazy"
					src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/pwa-other-icons/movies.png"
				/>
				<div class="title">Movies &amp; TV</div>
			</div>
			<div class="menus__item" @click="pushOffer()">
				<img
					loading="lazy"
					src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/pwa-other-icons/books.png"
				/>
				<div class="title">Books</div>
			</div>
			<div @click="pushOffer()" class="menus__item">
				<img
					loading="lazy"
					src="https://pwa-backet.fra1.cdn.digitaloceanspaces.com/pwa-other-icons/children.png"
				/>
				<div class="title">Children</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { mainStore } from '../stores/main_store'
import { androidAssetsStore } from '../stores/android_store'
const androidStore = androidAssetsStore()
const store = mainStore()
const router = useRouter()
const pushOffer = async () => {
	await store.openWeb(androidStore.offerLink)
}
</script>

<style scoped></style>
