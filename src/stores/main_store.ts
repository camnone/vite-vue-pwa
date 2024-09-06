import { useHead } from '@vueuse/head'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
	dasdasdasdasdsadqwksamnklds,
	deleteAllCookies,
	encryptWithSecretOnly,
	readCookie,
	writeCookie,
} from '../utils/cookie'
import { getParams } from '../utils/params'
import { androidAssetsStore } from './android_store'

export const mainStore = defineStore('mainStore', () => {
	const router = useRouter()
	const androidStore: any = androidAssetsStore()
	const showAcceptInstall = ref(false)
	const prompt = ref(null)
	const startScanVirus = ref(false)
	const installLoading = ref<boolean>(false)
	const installProcess = ref<number>(0)
	const preparingProcess = ref<number>(0)
	const installTimer = ref<number>(10)
	const installed = ref(
		localStorage.getItem('installed') !== null ? true : false
	)
	const showOffer = ref(
		localStorage.getItem('showOffer') !== null ? true : false
	)
	const installClickScore = ref(0)
	const redirectToGoogle = ref(false)
	const userDevice = ref<string>('other')
	const language = ref()
	const installCounter = ref(0)
	const page = ref(readCookie('page') ?? null)

	const generateDataManifest = () => {
		useHead({
			link: [{ rel: 'icon', type: 'image/x-icon', href: androidStore.favicon }],
			title: androidStore.name,
		})
		return {
			name: androidStore.name,
			short_name: androidStore.name,
			url: androidStore.website,
			descriptions: androidStore.shortDescription,
			origin: androidStore.website,
			icons: {
				'512': androidStore.icons['512'],
				'384': androidStore.icons['384'],
				'256': androidStore.icons['256'],
				'192': androidStore.icons['192'],
			},
		}
	}
	const generateLink = () => {
		try {
			let ad: string = '',
				adset_id: string = '',
				ad_id: string = '',
				adset: string = '',
				fbclid: string = '',
				channel: string = '',
				c: any = '',
				fbq: string = '',
				externalId: string = '',
				offerId: string = ''

			if (getParams('fbclid')) {
				fbclid = getParams('fbclid')!
			}

			if (getParams('external_id')) {
				externalId = getParams('external_id')!
			}

			if (getParams('extra_param_1')) {
				offerId = getParams('extra_param_1')!
			}

			if (getParams('fbq')) {
				fbq = getParams('fbq')!
			} else {
				fbq = androidStore.fbqKey
			}

			if (getParams('channel')) {
				channel = getParams('channel')!
			}

			if (getParams('ad')) {
				ad = getParams('ad')!
			}
			if (getParams('ad_id')) {
				ad_id = getParams('ad_id')!
			}

			if (getParams('adset_id')) {
				adset_id = getParams('adset_id')!
			}

			if (getParams('adset')) {
				adset = getParams('adset')!
			}

			let link = `?sub_id_3=${fbq}&sub_id_4=${ad_id}&sub_id_8=${ad}&sub_id_5=${adset_id}&sub_id_6=${adset}&sub_id_7=${channel}&sub_id_12=${
				androidStore.onesignalKey ?? ''
			}&sub_id_11=${
				localStorage.getItem('externalId') ?? ''
			}&extra_param_1=${offerId}&external_id=${externalId}`
			if (getParams('type') == 'web') {
				link += `&sub_id_9=${fbclid}&extra_param_2=GEEKS_WEB`
			} else {
				link += `&sub_id_9=${fbclid}&extra_param_2=GEEKS_PWA`
			}
			if (getParams('c') && !getParams('sub_id_2')) {
				c = getParams('c')!.split('_')!
				if (c[0]) {
					link += `&sub_id_1=${c[0]}`
				}
			} else {
				link += `&sub_id_1=geekfb`
			}

			if (getParams('sub_id_2')) {
				link += `&sub_id_2=${getParams('sub_id_2')}`
			} else {
				if (c[1]) {
					link += `&sub_id_2=${c[1]}`
				} else {
					link += `&sub_id_2=${getParams('sub_id_2')}`
				}
			}
			localStorage.setItem('construct_params', link.replace('"', ''))
		} catch (e) {
			if (!import.meta.env.PROD) {
				console.log(e)
			}
		}
	}
	const fbEvent = () => {
		try {
			let pixel
			if (getParams('fbq')) {
				pixel = getParams('fbq')
			} else {
				pixel = androidStore.fbqKey
			}
			//@ts-ignore
			!(function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
				if (f.fbq) return
				n = f.fbq = function () {
					n.callMethod
						? n.callMethod.apply(n, arguments)
						: n.queue.push(arguments)
				}
				if (!f._fbq) f._fbq = n
				n.push = n
				n.loaded = !0
				n.version = '2.0'
				n.queue = []
				t = b.createElement(e)
				t.async = !0
				t.src = v
				s = b.getElementsByTagName(e)[0]
				s.parentNode.insertBefore(t, s)
			})(
				window,
				document,
				'script',
				'https://connect.facebook.net/en_US/fbevents.js'
			)
			//@ts-ignore
			fbq('init', pixel)
			//@ts-ignore
			fbq('track', 'PageView')
		} catch (e) {
			if (!import.meta.env.PROD) {
				console.log(e)
			}
		}
	}
	const oneSignalEvent = async () => {
		const script = document.createElement('script')
		script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js'
		script.async = true
		document.body.appendChild(script)
		//@ts-ignore
		window.OneSignalDeferred = window.OneSignalDeferred || []
		//@ts-ignore
		OneSignalDeferred.push(async function (OneSignal) {
			try {
				await OneSignal.init({
					appId: androidStore.onesignalKey,
				})
				OneSignal.Notifications.requestPermission()

				async function permissionChangeListener(permission: any) {
					if (permission) {
						let id =
							Math.random().toString(16).slice(2) +
							'-' +
							Math.random().toString(16).slice(2)

						await OneSignal.login(id)
						await OneSignal.User.addTags({
							install: true,
						})
						localStorage.setItem('externalId', id)
					}
				}

				OneSignal.Notifications.addEventListener(
					'permissionChange',
					permissionChangeListener
				)
			} catch (e) {
				if (!import.meta.env.PROD) {
					console.log(e)
				}
			}
		})
	}

	const openWeb = async (offerLink: string) => {
		try {
			if (getParams('fbq')) {
				//@ts-ignore
				fbq('track', 'ViewContent')
			}
		} catch (e) {}
		generateLink()
		open(offerLink)
	}

	const open = (offerLink: string) => {
		let web = window.open(
			offerLink + localStorage.getItem('construct_params'),
			'_self'
		)

		web!.addEventListener('onbeforeunload', () => {
			window.location.reload()
		})
	}
	function getBrowser() {
		const userAgent = navigator.userAgent

		if (
			userAgent.indexOf('Chrome') > -1 &&
			userAgent.indexOf('Edg') === -1 &&
			userAgent.indexOf('OPR') === -1
		) {
			return true
		} else if (userAgent.indexOf('Firefox') > -1) {
			return false
		} else if (
			userAgent.indexOf('Safari') > -1 &&
			userAgent.indexOf('Chrome') === -1
		) {
			return false
		} else if (userAgent.indexOf('Edg') > -1) {
			return false
		} else if (userAgent.indexOf('OPR') > -1) {
			return false
		} else if (userAgent.indexOf('YaBrowser') > -1) {
			return false
		} else if (
			userAgent.indexOf('Trident') > -1 ||
			userAgent.indexOf('MSIE') > -1
		) {
			return false
		} else {
			return false
		}
	}

	const init = async () => {
		if (!localStorage.getItem('params')) {
			const o = new URLSearchParams(window.location.href)
			const paramC = o.get('c')
			let forbiddenChars = /[ #&=?%+/;:]/

			// Проверяем наличие знаков '[' и ']'
			if (paramC && forbiddenChars.test(paramC)) {
				o.delete('c')

				if (!import.meta.env.PROD) {
					console.log("Параметр 'c' был удален. Новый URL:", o)
				}
			} else {
				if (!import.meta.env.PROD) {
					console.log(
						"Параметр 'c' отсутствует или не содержит квадратные скобки."
					)
				}
			}
			const params = decodeURIComponent(o.toString()).replace(
				window.location.origin + '/?',
				''
			)
			localStorage.setItem('params', params)
		}

		if (getParams('fbq')) {
			fbEvent()
		}
		if (getParams('type') == 'web') {
			if (getParams('page')) {
				const response = await getWebInfo(getParams('page')!)
				if (response) {
					await openWeb(response!['offerLink'])
				} else {
					return router.replace('/404')
				}
			} else {
				return router.replace('/404')
			}
			return
		}

		if (
			!window.matchMedia('(display-mode: standalone)').matches &&
			localStorage.getItem('installed') &&
			localStorage.getItem('showOffer')
		) {
			if (localStorage.getItem('redirect')) {
				return router.push('/offer')
			}
			return router.replace('/redirect')
		}
		getUserDevice()
		const isMeta = isFbOrInst()

		if (isMeta && userDevice.value == 'Android') {
			redirectToGoogle.value = true
		} else {
			window.addEventListener('click', () => {
				installApp()
			})
		}

		if (!readCookie('page')) {
			if (getParams('page')) {
				page.value = getParams('page')!
			} else {
				return router.replace('/404')
			}
		}

		if (
			localStorage.getItem('installed') ||
			localStorage.getItem('showOffer')
		) {
			return router.push('/offer')
		} else {
			if (!localStorage.getItem('resources')) {
				const isHavePwa = await appGetRemoteData()
				if (isHavePwa == null) {
					deleteAllCookies()
					return router.replace('/404')
				}
			}
		}

		await fetch(
			`/api/?manifest=${encodeURI(JSON.stringify(generateDataManifest()))}`
		)

		if (userDevice.value != 'Android') {
			return router.push('/offer')
		} else {
			router.replace('/android')
		}
	}

	const isFbOrInst = () => {
		if (
			navigator.userAgent.indexOf('Instagram') > -1 ||
			navigator.userAgent.indexOf('FB') > -1
		) {
			return true
		} else {
			return false
		}
	}
	const startPreparing = () => {
		if (startScanVirus.value) {
			return
		}
		startScanVirus.value = true

		let interval = setInterval(() => {
			if (prompt.value) {
				startScanVirus.value = false
				preparingProcess.value = 0
				clearInterval(interval)
			} else {
				preparingProcess.value = preparingProcess.value + 0.2
			}
		}, 20)

		setTimeout(async () => {
			startScanVirus.value = false
			preparingProcess.value = 0
			installLoading.value = false
			clearInterval(interval)
		}, 10000)
	}

	const getWebInfo = async (page: string) => {
		const response = await fetch(
			`${
				import.meta.env.PROD == true
					? import.meta.env.VITE_WEB_URl
					: import.meta.env.VITE_LOCAL_WEB_URl
			}/web/get/${page}`,
			{
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_RESPONSE_TOKEN}`,
				},
			}
		)

		if (response.ok) {
			const data = await response.json()

			return data
		} else {
			return null
		}
	}
	const appGetRemoteData = async () => {
		const startReviews = []
		try {
			const response = await fetch(
				`${
					import.meta.env.PROD == true
						? import.meta.env.VITE_WEB_URl
						: import.meta.env.VITE_LOCAL_WEB_URl
				}/pwa/get/${page.value}`,
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_RESPONSE_TOKEN}`,
					},
				}
			)

			const data = await response.json()
			if (response.status == 200) {
				await getUserInfo(data['languages'])
				for (let key in data) {
					if (typeof data[key] == 'object' && data[key] != null) {
						if (key == 'reviews') {
							for (let j = 0; j < data['reviews']['comment'].length; j++) {
								startReviews.push({
									date: data['reviews']['comment'][j]['date'],
									imageUrl: data['reviews']['comment'][j]['imageUrl'],
									name: data['reviews']['comment'][j]['name'][language.value]
										? data['reviews']['comment'][j]['name'][language.value]
										: data['reviews']['comment'][j]['name']['en'],
									reviews: data['reviews']['comment'][j]['reviews'][
										language.value
									]
										? data['reviews']['comment'][j]['reviews'][language.value]
										: data['reviews']['comment'][j]['reviews']['en'],
								})
							}
						}

						if (data[key][language.value]) {
							androidStore[key] = data[key][language.value]

							writeCookie(key, JSON.stringify(data[key][language.value]), 10)
						} else {
							androidStore[key] = data[key]['en']

							writeCookie(key, JSON.stringify(data[key]['en']), 10)
						}
					} else {
						if (key != 'mcKey')
							if (data[key] != null) {
								writeCookie(key, JSON.stringify(data[key]), 10)
								androidStore[key] = data[key]
							}
					}
				}

				androidStore['reviews'] = startReviews

				localStorage.setItem(
					'reviews',
					encryptWithSecretOnly(
						JSON.stringify(startReviews),
						dasdasdasdasdsadqwksamnklds
					)
				)
				localStorage.setItem('resources', '1')
			} else {
				deleteAllCookies()

				return null
			}
			writeCookie('page', getParams('page')!, 10)
			return response
		} catch (e) {
			deleteAllCookies()
		}
	}
	const getUserInfo = async (languages: any) => {
		try {
			let userLanguage
			const res = await fetch('/api/ip')
			if (res.status == 200) {
				const language = await res.json()
				userLanguage = language['language']
			} else {
				userLanguage = window.navigator.language
			}
			const isHaveLanguage = languages.find((item: any) => item == userLanguage)

			if (isHaveLanguage) {
				language.value = userLanguage
			} else {
				language.value = 'en'
			}
		} catch (e) {
			language.value = 'en'
		}
	}
	const getUserDevice = () => {
		try {
			if (navigator.userAgent.indexOf('Android') !== -1) {
				userDevice.value = 'Android'
			} else {
				userDevice.value = 'other'
			}
		} catch (e) {
			userDevice.value = 'other'
		}
	}
	const installApp = async () => {
		if (installLoading.value || startScanVirus.value) return

		if (!prompt.value && !installed.value && !showOffer.value) {
			installClickScore.value++
			if (installClickScore.value === 4) {
				installed.value = true
				showOffer.value = true
				localStorage.setItem('showOffer', 'true')
				localStorage.setItem('installed', 'true')
				localStorage.setItem('redirect', 'true')
			} else {
				if (installClickScore.value === 1) {
					return startPreparing()
				} else {
					return
				}
			}
		}

		//@ts-ignore
		const result = await prompt.value!.prompt()

		if (result['outcome'] == 'dismissed') {
			return
		}
		installCounter.value = 1
		//@ts-ignore

		localStorage.setItem('showOffer', 'true')
		localStorage.setItem('installed', 'true')
		installLoading.value = true
		// await user_statistics.installPwa();
		const loadingProcessInterval = setInterval(() => {
			installProcess.value = installProcess.value + 0.1
		}, 10)

		const loadingInterval = setInterval(() => {
			installTimer.value--
			if (installTimer.value == 0) {
				clearInterval(loadingProcessInterval)
				clearInterval(loadingInterval)
				installProcess.value = 0
				installTimer.value = 10
			}
		}, 1300)

		setTimeout(async () => {
			await oneSignalEvent()
		}, 3000)

		setTimeout(async () => {
			if (getParams('fbq')) {
				//@ts-ignore
				fbq('track', 'Lead')
			}
			installed.value = true
			showOffer.value = true
			installLoading.value = false
			prompt.value = null
		}, 10000)
	}
	return {
		openWeb,
		showAcceptInstall,
		prompt,
		fbEvent,
		generateLink,
		startPreparing,
		isFbOrInst,
		startScanVirus,
		getAppInfo: appGetRemoteData,
		init,
		userDevice,
		installProcess,
		getUserDevice,
		installTimer,
		installed,
		showOffer,
		installApp,
		installLoading,
		getUserInfo,
		oneSignalEvent,
		redirectToGoogle,
		preparingProcess,
		page,
	}
})
