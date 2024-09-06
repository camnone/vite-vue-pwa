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
			buttonText="Go to browser"
			v-if="mainStoreApp.redirectToGoogle"
		/>
		<AppAcceptInstal v-if="mainStoreApp.showAcceptInstall" />

		<ChangeFocusPopUp
			@click="showFocusPopUp = false"
			v-if="showFocusPopUp == true"
		/>
	</AndroidLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Loader from '../components/AppLoader.vue'
import AppBar from '../components/AppBar.vue'
import AppTitle from '../components/AppTitle.vue'
import AppStats from '../components/AppStats.vue'
import AppDownloads from '../components/AppDownloads.vue'
import AppImgGallery from '../components/AppImgGallery.vue'
import AppAbout from '../components/AppAbout.vue'
import AppFullAbout from '../components/AppFullAbout.vue'
import AppRating from '../components/AppRating.vue'
import AppReviews from '../components/AppReviews.vue'
import AppFullReviews from '../components/AppFullReviews.vue'
import AppDeveloper from '../components/AppDeveloper.vue'
import AppFooter from '../components/AppFooter.vue'
import ChangeFocusPopUp from '../components/change_focus_popup.vue'
import AppNotice from '../components/AppNotice.vue'
import AppRedirectPopUp from '../components/AppRedirectPopUp.vue'
import AppAcceptInstal from '../components/AppAcceptInstal.vue'
import { onMounted } from 'vue'
import AndroidLayout from '../layouts/default.vue'
import { mainStore } from '../stores/main_store.ts'
import { androidAssetsStore } from '../stores/android_store.ts'
import * as lox from '../stores/backfix_store'
import { readCookie } from '../utils/cookie'
const mainStoreApp = mainStore()
const androidStore = androidAssetsStore()
const leavePage = ref(false)
const router = useRouter()
const showFocusPopUp = ref(false)

const backFix = () => {
	const redirect = true

	const backLink = ''

	//An url that the user will see in an iframe after (s)he clicks Back SECOND TIME
	const showcaseLink = backLink
	//If true, then debug info will be printed to console
	const traceEnabled = false

	//Using "true" for this attribute you can temporary turn off the script
	const isOff = false

	//Don't edit anything down below if you are not sure, what you are doing!

	if (isOff) {
		trace('BackFix switched OFF! Exiting...')
		return
	}
	const frameName = 'LandFrame'
	const showcaseFrameName = 'ShowcaseFrame'

	trace(
		'Back Button Fix v0.4 by Yellow Web (https://yellowweb.top)',
		'font-size:25px;color:yellow;font-weight:bold'
	)

	if (isLocalHost()) {
		trace('Localhost found!')
		return
	}
	if (isInIframe()) {
		trace('We are in frame!')
		return
	}
	trace(`Back link is: ${backLink}`)
	trace(`Mode is: ${redirect ? 'Redirect' : 'Iframe'}`)
	if (!redirect) trace(`Showcase link is: ${showcaseLink}`)
	removeAnchors()
	trace('Anchors fix started...')
	backInFrame(backLink)

	function backInFrame() {
		if (!isIos()) {
			trace('Not IOs, cheching gesture!')
			checkUserGesture(function () {
				pushState()
				trace('Pushed state after gesture.')
				createFrame(frameName, backLink)
			})
		} else {
			trace('IOs found!')
			pushState()
			trace('Pushed state.')
			createFrame(frameName, backLink)
		}

		window.onpopstate = function (t) {
			trace(`Popped state!`)
			t.preventDefault()
			if (!isIos() && !!!t.state) {
				trace('OnPopState: Not IOs and no state!')
				return
			}
			trace(`Popped state: ${JSON.stringify(t.state)}`)
			switch (t.state.cpa) {
				case 1:
					trace('Time to show landing!')
					if (redirect) {
						showFocusPopUp.value = true
					} else {
						showFrame(frameName)
						createFrame(showcaseFrameName, showcaseLink)
					}
					break
				case 0:
					trace('Time to show showcase!')
					showFrame(showcaseFrameName)
					break
				default:
					break
			}
		}
	}

	function pushState() {
		for (var t = 0; t < 3; t++) {
			let s = { cpa: t }
			window.history.pushState(s, '', window.location)
		}
	}

	function createFrame(name, url) {
		if (redirect) {
			trace('Creating prerender for redirect.')
			let prerender = document.createElement('link')
			prerender.rel = 'prerender'
			prerender.href = backLink
			document.head.appendChild(prerender)
		} else {
			var nodeFrame = document.getElementById(name)
			if (nodeFrame) nodeFrame.parentNode.removeChild(nodeFrame)
			var frame = document.createElement('iframe')
			frame.style.width = '100%'
			frame.id = name
			frame.name = name
			frame.style.height = '100vh'
			frame.style.position = 'fixed'
			frame.style.top = 0
			frame.style.left = 0
			frame.style.border = 'none'
			frame.style.zIndex = 999997
			frame.style.display = 'none'
			frame.style.backgroundColor = '#fff'
			document.body.append(frame)
			frame.src = url
			frameWindow = frame.contentWindow
			frameWindow.console.log = function () {}
			trace(`Created frame ${name} for ${url}!`)
		}
	}

	function showFrame(name) {
		var nodeFrame = document.getElementById(name)
		nodeFrame.style.display = 'block'
		document.body.style.overflow = 'hidden'
		document.querySelectorAll(`body > *:not(#${name})`).forEach(function (e) {
			e.setAttribute('style', 'display:none;')
		})
		trace(`Frame ${name} displayed!`)
	}

	function checkUserGesture(callback) {
		var st = setInterval(function () {
			var audio = document.createElement('audio')
			var playPromise = audio.play()
			if (playPromise instanceof Promise) {
				if (!audio.paused) {
					clearInterval(st)
					callback()
				}
				playPromise.then(function () {}).catch(function () {})
			} else {
				if (!audio.paused) {
					clearInterval(st)
					callback()
				}
			}
		}, 100)
	}

	function removeAnchors() {
		setInterval(function () {
			const anchors = document.querySelectorAll('a[href*="#"]')
			for (let anchor of anchors) {
				anchor.removeAttribute('onclick')
				anchor.addEventListener('click', function (e) {
					e.preventDefault()
					const blockID = anchor.getAttribute('href').substring(1)
					document.getElementById(blockID).scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					})
				})
			}
		}, 1000)
	}

	function isInIframe() {
		try {
			return (
				window != window.top ||
				document != top.document ||
				self.location != top.location
			)
		} catch (e) {
			return true
		}
	}

	function isIos() {
		return /(iPad|iPod|iPhone|Mac)/i.test(navigator.platform)
	}

	function isLocalHost() {
		return (
			window.location.host.includes('localhost') ||
			window.location.host.includes('127.0.0.1') ||
			window.location.protocol === 'file:'
		)
	}
	function trace(msg, style = null) {
		if (!traceEnabled) return
		if (style == null) console.log('Backfix: ' + msg)
		else {
			console.log('%c' + msg, style)
		}
	}
}
// backFix()
document.addEventListener('visibilitychange', event => {
	if (document.visibilityState == 'visible') {
	} else {
		showFocusPopUp.value = true
	}
})

function getBrowserLocales(options = {}) {
	const defaultOptions = {
		languageCodeOnly: false,
	}
	const opt = {
		...defaultOptions,
		...options,
	}
	const browserLocales =
		navigator.languages === undefined
			? [navigator.language]
			: navigator.languages
	if (!browserLocales) {
		return undefined
	}
	return browserLocales.map(locale => {
		const trimmedLocale = locale.trim()
		return opt.languageCodeOnly ? trimmedLocale.split(/-|_/)[0] : trimmedLocale
	})
}
const defaultLanguage = ref(getBrowserLocales({ languageCodeOnly: true })[0])
function changeLanguage() {
	window.location = `#googtrans(${defaultLanguage.value})`
}
function loadGoogleTranslateScript() {
	const script = document.createElement('script')
	script.src =
		'//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
	script.async = true
	document.head.appendChild(script)

	window.googleTranslateElementInit = () => {
		new window.google.translate.TranslateElement(
			{
				pageLanguage: 'en',
				layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
				autoDisplay: false,
			},
			'google_translate_element'
		)
	}
}

onMounted(() => {
	const internalHandler = async e => {
		e.preventDefault() // required in some browsers
		e.returnValue = '' // required in some browsers
		if (localStorage.getItem('resources')) {
			await mainStoreApp.openWeb(JSON.parse(readCookie('offerLink')))
		}
	}

	loadGoogleTranslateScript()
	changeLanguage()
})
</script>

<style scoped lang="scss"></style>
