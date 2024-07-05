import { androidAssetsStore } from "./android_store";
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { readCookie, removeCookie, writeCookie } from "../utils/cookie";
import { useHead } from '@vueuse/head'
import axios from 'axios'
import { getParams } from "../utils/params";
export const mainStore = defineStore("mainStore", () => {
    const prompt = ref(null);
    const router = useRouter();
    const startScanVirus = ref(false);
    const androidStore: any = androidAssetsStore();
    const installLoading = ref<boolean>(false);
    const installProcess = ref<number>(0)
    const openWeb = ref(false);
    const preparingProcess = ref<number>(0)
    const installTimer = ref<number>(10);
    const installed = ref();
    const showOffer = ref()
    const redirectToGoogle = ref(false);
    const userDevice = ref<string>("other");
    const language = ref();
    const page = ref(readCookie("page") ?? null);
    const generateDataManifest = () => {
        useHead({
            link: [
                { rel: 'icon', type: 'image/x-icon', href: androidStore.favicon }
            ],
            title: androidStore.name
        })
        return {
            name: androidStore.name,
            short_name: androidStore.name,
            url: androidStore.website,
            descriptions: androidStore.shortDescription,
            origin: androidStore.website,
            icons: {
                "512": androidStore.icons["512"],
                "384": androidStore.icons['384'],
                "256": androidStore.icons['256'],
                "192": androidStore.icons['192']
            }
        };
    }
    const generateLink = () => {
        try {
            const params: any = readCookie("params")!;
            const naming = params.c.split("_")
            const link = androidStore.offerLink + `?sub_id_3=${params.fbq}&sub_id_10=${params.fbclid}&sub_id_2=${naming[1]}`
            androidStore.offerLink = link;
            writeCookie("offerLink", link, 10)
        } catch (e) {

        }
    }
    const fbEvent = () => {
        // //@ts-ignore
        // !(function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        //     if (f.fbq) return;
        //     n = f.fbq = function () {
        //         n.callMethod
        //             ? n.callMethod.apply(n, arguments)
        //             : n.queue.push(arguments);
        //     };
        //     if (!f._fbq) f._fbq = n;
        //     n.push = n;
        //     n.loaded = !0;
        //     n.version = "2.0";
        //     n.queue = [];
        //     t = b.createElement(e);
        //     t.async = !0;
        //     t.src = v;
        //     s = b.getElementsByTagName(e)[0];
        //     s.parentNode.insertBefore(t, s);
        // })(
        //     window,
        //     document,
        //     "script",
        //     "https://connect.facebook.net/en_US/fbevents.js"
        // );
        // //@ts-ignore
        // window?.fbq("init", androidStore.fbqKey);
        // //@ts-ignore
        // window?.fbq("track", "PageView");
    };
    const init = async () => {

        if (!readCookie("page")) {
            if (getParams('page')) {
                page.value = getParams("page")!;

            } else {

                return router.replace("/404")
            }
        }

        // if (!readCookie("params")) {
        //     writeCookie("params", JSON.stringify(getParams('')),10);
        // }

        if (!readCookie("load.resources")) {
            isFbOrInst();
            getUserDevice();
        }


        if (localStorage.getItem("installed") || localStorage.getItem("showOffer")) {
            router.push("/offer")
        } else {
            if (!readCookie("load.resources")) {

                const isHavePwa = await appGetRemoteData();

                if (isHavePwa == null) {
                    removeCookie('page')
                    removeCookie('params')
                    return router.replace("/404")
                }

            } else {
                appGetLocalData();
            }

            await fetch(`/api/?manifest=${encodeURI(JSON.stringify(generateDataManifest()))}`,)
            installed.value =
                localStorage.getItem("installed") !== null ? true : false;
            showOffer.value =
                localStorage.getItem("showOffer") !== null ? true : false;
            router.push("/android")
        }

    }

    const isFbOrInst = () => {
        if (navigator.userAgent.indexOf("instagram") > -1 || navigator.userAgent.indexOf("FB") > -1) {
            redirectToGoogle.value = true;
        }
    };

    watch(prompt, newValue => {
        if (newValue != null) {
            startScanVirus.value = false
        }
    })
    const startPreparing = () => {
        startScanVirus.value = true
        let interval = setInterval(() => {
            preparingProcess.value = preparingProcess.value + 0.1;
        }, 15);
        setTimeout(async () => {
            startScanVirus.value = false;
            if (prompt.value == null) {
                openWeb.value = true;
            }
            preparingProcess.value = 0;
            clearInterval(interval);
        }, 15000);
    };



    const appGetLocalData = () => {
        // for (let key in androidStore) {
        //     if (typeof androidStore[key] != 'function' && key != '$id' && key != '_isOptionsAPI') {
        //         androidStore[key] = readCookie(key);
        //     }


        // }

    }
    const appGetRemoteData = async () => {
        const reviews = [];
        try {
            console.log(page.value);
            const response = await axios.get(`https://app.pwafisting.com/pwa/get/${page.value}`);


            let languages = response.data["languages"];




            getLanguage(languages);
            if (response.data) {
                for (let key in response.data) {
                    if (typeof response.data[key] == 'object') {
                        if (key == "reviews") {
                            for (let j = 0; j < response.data['reviews']["comment"].length; j++) {
                                reviews.push({
                                    date: response.data['reviews']["comment"][j]["date"],
                                    imageUrl: response.data['reviews']["comment"][j]["imageUrl"],
                                    name: response.data['reviews']["comment"][j]["name"][language.value],
                                    reviews: response.data['reviews']["comment"][j]["reviews"][language.value],
                                });

                            }
                        }

                        androidStore[key] = response.data[key][language.value];
                        writeCookie(key, JSON.stringify(
                            response.data[key][language.value]
                        ), 10);

                    } else {
                        writeCookie(key, JSON.stringify(
                            response.data[key]
                        ), 10);
                        androidStore[key] = response.data[key];

                    }
                }
                writeCookie('reviews', JSON.stringify(
                    reviews
                ), 10);
                androidStore['reviews'] = reviews;
                writeCookie("load.resources", 'true', 10);
            } else {
                console.log("pwa not found")
                return null;
            }
            writeCookie("page", getParams('page')!, 10);
            return response.data
        } catch (e) {

            console.log(e);
        }
    };


    const getLanguage = (languages: any) => {
        try {
            let userLanguage = window.navigator.language;
            if (getParams("language")) {
                userLanguage = getParams(language.value)!;
            }
            const isHaveLanguage = languages.find((item: any) => item == userLanguage)
            if (isHaveLanguage) {
                language.value = userLanguage;
            } else {
                language.value = "en";
            }
        } catch (e) {


            language.value = "en";
        }
    };

    const getUserDevice = () => {
        try {
            if (navigator.userAgent.indexOf("Android") !== -1) {
                userDevice.value = "Android";
            } else {
                userDevice.value = "other";
            }
        } catch (e) {
            userDevice.value = "other";
        }



    };

    return {
        prompt,
        fbEvent,
        generateLink,
        startPreparing,
        startScanVirus,
        getAppInfo: appGetRemoteData,
        init,
        openWeb,
        userDevice,
        installProcess,
        getUserDevice,
        installTimer,
        installed,
        showOffer,
        installLoading,
        getLanguage,
        redirectToGoogle,
        preparingProcess,

    }
})