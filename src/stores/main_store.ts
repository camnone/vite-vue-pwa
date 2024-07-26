import { androidAssetsStore } from "./android_store";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { deleteAllCookies, readCookie, writeCookie } from "../utils/cookie";
import { useHead } from "@vueuse/head";

import { getParams } from "../utils/params";
export const mainStore = defineStore("mainStore", () => {
  const showAcceptInstall = ref(false);
  const prompt = ref(null);
  const router = useRouter();
  const startScanVirus = ref(false);
  const androidStore: any = androidAssetsStore();
  const installLoading = ref<boolean>(false);
  const installProcess = ref<number>(0);
  const openWeb = ref(false);
  const preparingProcess = ref<number>(0);
  const installTimer = ref<number>(10);
  const installed = ref(
    localStorage.getItem("installed") !== null ? true : false
  );
  const showOffer = ref(
    localStorage.getItem("showOffer") !== null ? true : false
  );
  const redirectToGoogle = ref(false);
  const userDevice = ref<string>("other");
  const language = ref();
  const installCounter = ref(0);
  const page = ref(readCookie("page") ?? null);

  const generateDataManifest = () => {
    useHead({
      link: [{ rel: "icon", type: "image/x-icon", href: androidStore.favicon }],
      title: androidStore.name,
    });
    return {
      name: androidStore.name,
      short_name: androidStore.name,
      url: androidStore.website,
      descriptions: androidStore.shortDescription,
      origin: androidStore.website,
      icons: {
        "512": androidStore.icons["512"],
        "384": androidStore.icons["384"],
        "256": androidStore.icons["256"],
        "192": androidStore.icons["192"],
      },
    };
  };
  const generateLink = () => {
    try {
      const params = new URLSearchParams(readCookie("params")!);
      let ad: any = "",
        adset_id: any = "",
        adset: any = "",
        fbclid: any = "",
        channel: any = "",
        c: any = "",
        fbq: any = "",
        externalId: any = "",
        offerId: any = "";

      if (params.get("fbclid")) {
        fbclid = params.get("fbclid");
      }

      if (params.get("external_id")) {
        externalId = params.get("external_id");
      }

      if (params.get("extra_param_1")) {
        offerId = params.get("extra_param_1");
      }
      if (params.get("fbq")) {
        fbq = params.get("fbq");
      } else {
        fbq = androidStore.fbqKey;
      }
      if (params.get("channel")) {
        channel = params.get("channel");
      }
      if (params.get("ad")) {
        ad = params.get("ad");
      }
      if (params.get("adset_id")) {
        adset_id = params.get("adset_id");
      }
      if (params.get("adset")) {
        adset = params.get("adset");
      }

      let link = `?sub_id_3=${fbq}&sub_id_4=${ad}&sub_id_5=${adset_id}&sub_id_6=${adset}&sub_id_7=${channel}&sub_id_10=${fbclid}&sub_id_11=newPWA&extra_param_1=${offerId}&external_id=${externalId}`;
      if (params.get("c")) {
        c = params.get("c")!.split("_");
        if (c[0]) {
          link += `&sub_id_1=${c[0]}`;
        }
        if (c[1]) {
          link += `&sub_id_2=${c[1]}`;
        }
      }

      localStorage.setItem("construct_params", link.replace('"', ""));
    } catch (e) {
      console.log(e);
    }
  };

  const fbEvent = () => {
    try {
      const params = new URLSearchParams(readCookie("params")!);
      let pixel;

      if (params.get("fbq")) {
        pixel = params.get("fbq");
      } else {
        pixel = androidStore.fbqKey;
      }
      //@ts-ignore
      !(function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      //@ts-ignore
      fbq("init", pixel);
      //@ts-ignore
      window?.fbq("track", "PageView");
    } catch (e) {
      console.log(e);
    }
  };

  const oneSignalEvent = () => {
    const script = document.createElement("script");
    script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
    script.async = true;
    document.body.appendChild(script);
    //@ts-ignore
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    //@ts-ignore
    OneSignalDeferred.push(async function (OneSignal) {
      await OneSignal.init({
        appId: androidStore.onesignalKey,
        notifyButton: {
          enable: true,
        },
        serviceWorkerPath: "public/OneSignalSDKWorker.js",
      });
    });
  };
  const init = async () => {
    if (
      !window.matchMedia("(display-mode: standalone)").matches &&
      localStorage.getItem("installed") &&
      localStorage.getItem("showOffer")
    ) {
      if (localStorage.getItem("redirect")) {
        generateLink();
        return window.open(
          androidStore.offerLink + localStorage.getItem("construct_params"),
          "_self"
        );
      }
      return router.replace("/redirect");
    }

    const isMeta = isFbOrInst();

    if (isMeta) {
      redirectToGoogle.value = true;
    }

    getUserDevice();
    fbEvent();

    if (!readCookie("params") && window.location.search.length > 1) {
      writeCookie("params", JSON.stringify(window.location.search), 10);
    }

    await connectUser();

    if (userDevice.value != "Android") {
      router.replace("/offer");
    }

    if (!readCookie("page")) {
      if (getParams("page")) {
        page.value = getParams("page")!;
      } else {
        return router.replace("/404");
      }
    }

    if (
      localStorage.getItem("installed") ||
      localStorage.getItem("showOffer")
    ) {
      router.replace("/offer");
    } else {
      if (!readCookie("load.resources")) {
        const isHavePwa = await appGetRemoteData();

        if (isHavePwa == null) {
          deleteAllCookies();
          return router.replace("/404");
        }
      }

      await fetch(
        `/api/?manifest=${encodeURI(JSON.stringify(generateDataManifest()))}`
      );

      router.replace("/android");
    }

    oneSignalEvent();

    if (!localStorage.getItem("construct_params")) {
      generateLink();
    }
  };

  const isFbOrInst = () => {
    if (
      navigator.userAgent.indexOf("instagram") > -1 ||
      navigator.userAgent.indexOf("FB") > -1
    ) {
      return true;
    }
  };

  const startPreparing = () => {
    startScanVirus.value = true;

    let interval = setInterval(() => {
      if (prompt.value) {
        startScanVirus.value = false;
        preparingProcess.value = 0;
        clearInterval(interval);
      } else {
        preparingProcess.value = preparingProcess.value + 0.4;
      }
    }, 40);

    setTimeout(async () => {
      startScanVirus.value = false;
      preparingProcess.value = 0;
      clearInterval(interval);
    }, 8000);
  };
  const connectUser = async () => {
    const res = await fetch("/api/ip");
    if (res.status == 200) {
      const language = await res.json();

      await connectUserResponse({
        ip: language.ip,
        userAgent: language.userAgent,
        geo: language.language,
        pwa: page.value,
      });
    }
  };

  const installRemotePwa = async () => {
    try {
      const res = await (await fetch("/api/ip")).json();

      await fetch(
        `https://hammerhead-app-wpsna.ondigitalocean.app/pwa/user/install/${res["ip"]}`
      );
    } catch (e) {
      console.log(e);
    }
  };
  const appGetRemoteData = async () => {
    const startReviews = [];
    try {
      const response = await (
        await fetch(
          `https://hammerhead-app-wpsna.ondigitalocean.app/pwa/get/${page.value}`
        )
      ).json();
      await getUserInfo(response["languages"]);

      if (response) {
        for (let key in response) {
          if (typeof response[key] == "object" && response[key] != null) {
            if (key == "reviews") {
              for (let j = 0; j < response["reviews"]["comment"].length; j++) {
                startReviews.push({
                  date: response["reviews"]["comment"][j]["date"],
                  imageUrl: response["reviews"]["comment"][j]["imageUrl"],
                  name: response["reviews"]["comment"][j]["name"][
                    language.value
                  ]
                    ? response["reviews"]["comment"][j]["name"][language.value]
                    : response["reviews"]["comment"][j]["name"]["en"],
                  reviews: response["reviews"]["comment"][j]["reviews"][
                    language.value
                  ]
                    ? response["reviews"]["comment"][j]["reviews"][
                        language.value
                      ]
                    : response["reviews"]["comment"][j]["reviews"]["en"],
                });
              }
            }
            if (response[key][language.value]) {
              androidStore[key] = response[key][language.value];

              writeCookie(
                key,
                encodeURI(JSON.stringify(response[key][language.value])),
                10
              );
            } else {
              androidStore[key] = response[key]["en"];

              writeCookie(
                key,
                encodeURI(JSON.stringify(response[key]["en"])),
                10
              );
            }
          } else {
            if (response[key] != null) {
              writeCookie(key, encodeURI(JSON.stringify(response[key])), 10);
              androidStore[key] = response[key];
            }
          }
        }

        androidStore["reviews"] = startReviews;
        writeCookie("reviews", JSON.stringify(startReviews), 10);
        writeCookie("load.resources", encodeURI(JSON.stringify("true")), 10);
      } else {
        deleteAllCookies();
        console.log("pwa not found");
        return null;
      }
      writeCookie("page", getParams("page")!, 10);
      return response;
    } catch (e) {
      deleteAllCookies();
    }
  };

  const getUserInfo = async (languages: any) => {
    try {
      const res = await fetch("/api/ip");
      let userLanguage;
      if (res.status == 200) {
        const language = await res.json();
        userLanguage = language["language"];
      } else {
        userLanguage = window.navigator.language;
      }
      const isHaveLanguage = languages.find(
        (item: any) => item == userLanguage
      );

      if (isHaveLanguage) {
        language.value = userLanguage;
      } else {
        language.value = "en";
      }

      return await res.json();
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

  const installApp = async () => {
    if (installLoading.value) {
      return;
    }

    if (
      !prompt.value &&
      !installed.value &&
      !showOffer.value &&
      installCounter.value == 0
    ) {
      return startPreparing();
    }
    //@ts-ignore
    const result = await prompt.value!.prompt();

    if (result["outcome"] == "dismissed") {
      return;
    }
    installCounter.value = 1;
    await installRemotePwa();
    try {
      //@ts-ignore
      window?.fbq("track", "Lead");
    } catch (e) {
      console.log("error fb event");
    }
    localStorage.setItem("showOffer", "true");
    localStorage.setItem("installed", "true");
    installLoading.value = true;

    const loadingProcessInterval = setInterval(() => {
      installProcess.value = installProcess.value + 0.1;
    }, 10);

    const loadingInterval = setInterval(() => {
      installTimer.value--;
      if (installTimer.value == 0) {
        clearInterval(loadingProcessInterval);
        clearInterval(loadingInterval);
        installProcess.value = 0;
        installTimer.value = 10;
      }
    }, 1300);

    setTimeout(() => {
      installed.value = true;
      showOffer.value = true;
      installLoading.value = false;
      prompt.value = null;
    }, 10000);
  };

  watch(prompt, (newValue) => {
    if (newValue != null) {
      startScanVirus.value = false;
    }
  });

  const connectUserResponse = async (data: any) => {
    try {
      const user = await fetch(
        "https://hammerhead-app-wpsna.ondigitalocean.app/pwa/user/connect",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip: data["ip"],
            userAgent: data["userAgent"],
            geo: data["geo"],
            page: Number(page.value),
          }),
        }
      );

      console.log(await user.json());
    } catch (e) {
      console.log(e);
    }
  };

  return {
    showAcceptInstall,
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
    installApp,
    installLoading,
    getLanguage: getUserInfo,
    redirectToGoogle,
    preparingProcess,
    oneSignalEvent,
  };
});
