<script setup lang="ts">
import { ref } from 'vue'
import AppFixedFooter from '../components/AppFixedFooter.vue'
</script>

<template>
	<section class="store">
		<div class="page">
			<slot />
		</div>
		<AppFixedFooter />
	</section>
</template>

<style scoped lang="scss"></style>
