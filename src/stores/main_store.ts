import { useHead } from "@vueuse/head";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import {
  dasdasdasdasdsadqwksamnklds,
  deleteAllCookies,
  encryptWithSecretOnly,
  getCook,
  readCookie,
  writeCookie,
} from "../utils/cookie";
import { getParams } from "../utils/params";
import { androidAssetsStore } from "./android_store";

export const mainStore = defineStore("mainStore", () => {
  const router = useRouter();
  const androidStore: any = androidAssetsStore();
  const showAcceptInstall = ref(false);
  const prompt = ref(null);
  const startScanVirus = ref(false);
  const installLoading = ref<boolean>(false);
  const installProcess = ref<number>(0);
  const preparingProcess = ref<number>(0);
  const installTimer = ref<number>(10);
  const allowBackFix = ref(true);
  const installTrue = ref(false);
  const installed = ref(
    localStorage.getItem("installed") !== null ? true : false
  );
  const showOffer = ref(
    localStorage.getItem("showOffer") !== null ? true : false
  );
  const installClickScore = ref(0);
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
  };

  watch(prompt, (_, newValue) => {
    if (newValue != null) {
      startScanVirus.value = false;
    }
  });
  const generateLink = async () => {
    try {
      let ad: string = "",
        adset_id: string = "",
        ad_id: string = "",
        adset: string = "",
        fbclid: string = "",
        channel: string = "",
        c: any = "",
        fbq: string = "",
        externalId: string = "",
        offerId: string = "";

      if (getParams("fbclid")) {
        fbclid = getParams("fbclid")!;
      }

      if (getParams("external_id")) {
        externalId = getParams("external_id")!;
      }

      if (getParams("extra_param_1")) {
        offerId = getParams("extra_param_1")!;
      }

      if (getParams("fbq")) {
        fbq = getParams("fbq")!;
      } else {
        fbq = androidStore.fbqKey;
      }

      if (getParams("channel")) {
        channel = getParams("channel")!;
      }

      if (getParams("ad")) {
        ad = getParams("ad")!;
      }
      if (getParams("ad_id")) {
        ad_id = getParams("ad_id")!;
      }

      if (getParams("adset_id")) {
        adset_id = getParams("adset_id")!;
      }

      if (getParams("adset")) {
        adset = getParams("adset")!;
      }

      let link = `?sub_id_3=${fbq}&sub_id_4=${ad_id}&sub_id_8=${ad}&sub_id_5=${adset_id}&sub_id_6=${adset}&sub_id_7=${channel}&sub_id_12=${
        androidStore.onesignalKey ?? ""
      }&sub_id_11=${
        localStorage.getItem("externalId") ?? ""
      }&extra_param_1=${offerId}&external_id=${externalId}&ad_campaign_id=${getParams(
        "c"
      )!}`;
      if (getParams("type") == "web") {
        link += `&sub_id_9=${fbclid}&extra_param_2=GEEKS_WEB`;
      } else {
        link += `&sub_id_9=${fbclid}&extra_param_2=GEEKS_PWA`;
      }
      if (getParams("c") && !getParams("sub_id_2")) {
        c = getParams("c")!!.split("_")!;
        if (c[0]) {
          link += `&sub_id_1=${c[0]}`;
        }
      } else {
        link += `&sub_id_1=geekfb`;
      }

      if (getParams("sub_id_2")) {
        link += `&sub_id_2=${getParams("sub_id_2")!}`;
      } else {
        if (c[1]) {
          link += `&sub_id_2=${c[1]}`;
        } else {
          link += `&sub_id_2=${getParams("sub_id_2")!}`;
        }
      }

      if (getCook("_fbc")) {
        link += `&extra_param_3=${getCook("_fbc")}`;
      }
      if (getCook("_fbp")) {
        link += `&extra_param_4=${getCook("_fbp")}`;
      }

      localStorage.setItem("construct_params", link.replace('"', ""));
    } catch (e) {
      if (!import.meta.env.PROD) {
        console.log(e);
      }
    }
  };

  const openWeb = async (offerLink: string) => {
    generateLink();
    //@ts-ignore
    fbq("track", "ViewContent");
    open(offerLink);
  };

  const open = (offerLink: string) => {
    let web = window.open(
      offerLink + localStorage.getItem("construct_params"),
      "_self"
    );

    web!.addEventListener("onbeforeunload", () => {
      window.location.reload();
    });
  };

  const init = async () => {
    const resourcesAvailable = localStorage.getItem("resources");
    const isWebType = getParams("type") === "web";
    const pageParam = getParams("page");

    if (resourcesAvailable) {
      generateDataManifest();
    }

    if (isWebType) {
      if (pageParam) {
        const response = await getWebInfo(pageParam);
        if (response) {
          await openWeb(response.offerLink);
        } else {
          return router.replace("/404");
        }
      } else {
        return router.replace("/404");
      }
      return;
    }

    const isStandAlone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    const isInstalled = localStorage.getItem("installed");
    const showOffer = localStorage.getItem("showOffer");

    if (!isStandAlone && isInstalled && showOffer) {
      return router.replace("/offer");
    }

    getUserDevice();
    const isMeta = isFbOrInst();

    if (isMeta && userDevice.value === "Android") {
      redirectToGoogle.value = true;
    }

    if (!readCookie("page")) {
      if (pageParam) {
        page.value = pageParam;
      } else {
        return router.replace("/404");
      }
    }

    if (isInstalled || showOffer) {
      return router.replace("/offer");
    }

    if (!resourcesAvailable) {
      const isHavePwa = await appGetRemoteData();
      if (isHavePwa == null) {
        deleteAllCookies();
        return router.replace("/404");
      }
      generateDataManifest();
    }

    return router.replace(
      userDevice.value === "Android" ? "/android" : "/offer"
    );
  };

  const isFbOrInst = () => {
    if (
      navigator.userAgent.indexOf("Instagram") > -1 ||
      navigator.userAgent.indexOf("FB") > -1
    ) {
      return true;
    } else {
      return false;
    }
  };
  const startPreparing = () => {
    if (startScanVirus.value) {
      return;
    }

    startScanVirus.value = true;

    let interval = setInterval(() => {
      if (prompt.value) {
        startScanVirus.value = false;
        preparingProcess.value = 0;
        clearInterval(interval);
      } else {
        preparingProcess.value = preparingProcess.value + 0.2;
      }
    }, 20);

    setTimeout(async () => {
      startScanVirus.value = false;
      preparingProcess.value = 0;
      installLoading.value = false;
      clearInterval(interval);
    }, 4000);
  };

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
    );

    if (response.ok) {
      return await response.json();
    } else {
      return null;
    }
  };
  const appGetRemoteData = async () => {
    const startReviews = [];
    const cookiesToWrite = {};

    try {
      const url = import.meta.env.PROD
        ? import.meta.env.VITE_WEB_URl
        : import.meta.env.VITE_LOCAL_WEB_URl;
      const response = await fetch(`${url}/pwa/get/${page.value}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_RESPONSE_TOKEN}`,
        },
      });

      const data = await response.json();
      if (response.status === 200) {
        await getUserInfo(data.languages);

        if (data.reviews && Array.isArray(data.reviews.comment)) {
          const reviewPromises = data.reviews.comment.map((j: any) => {
            return {
              date: j.date,
              imageUrl: j.imageUrl,
              name: j.name[language.value] || j.name.en,
              reviews: j.reviews[language.value] || j.reviews.en,
            };
          });
          startReviews.push(...(await Promise.all(reviewPromises)));
        }

        for (const key in data) {
          if (typeof data[key] === "object" && data[key] != null) {
            const langValue = data[key][language.value] || data[key].en;
            //@ts-ignore
            cookiesToWrite[key] = JSON.stringify(langValue);
            androidStore[key] = langValue;
          } else {
            if (key !== "mcKey" && data[key] != null) {
              //@ts-ignore
              cookiesToWrite[key] = JSON.stringify(data[key]);
              androidStore[key] = data[key];
            }
          }
        }

        androidStore.reviews = startReviews;
        localStorage.setItem(
          "reviews",
          encryptWithSecretOnly(
            JSON.stringify(startReviews),
            dasdasdasdasdsadqwksamnklds
          )
        );
        localStorage.setItem("resources", "1");

        // Записываем куки батчем
        Object.entries(cookiesToWrite).forEach(([key, value]) =>
          writeCookie(key, value, 10)
        );
        writeCookie("page", getParams("page")!, 10);

        return response;
      } else {
        deleteAllCookies();
        return null;
      }
    } catch (e) {
      deleteAllCookies();
    }
  };
  const getUserInfo = async (languages: any) => {
    try {
      let userLanguage = localStorage.getItem("language");

      const isHaveLanguage = languages.find(
        (item: any) => item == userLanguage
      );

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
  const installApp = async () => {
    if (installLoading.value || startScanVirus.value) {
      return;
    }

    if (!prompt.value && !installed.value && !showOffer.value) {
      installClickScore.value++;
      if (installClickScore.value > 4) {
        installed.value = true;
        showOffer.value = true;
        localStorage.setItem("showOffer", "true");
        localStorage.setItem("installed", "true");
        localStorage.setItem("redirect", "true");
      } else {
        if (installClickScore.value > 1) {
          //return startPreparing();
        } else {
          return;
        }
      }
    }

    //@ts-ignore
    const result = await prompt.value!.prompt();
    if (result["outcome"] == "dismissed") {
      return;
    }
    //@ts-ignore
    fbq("track", "Lead");

    installCounter.value = 1;
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

    setTimeout(async () => {
      installed.value = true;
      showOffer.value = true;
      installLoading.value = false;
      prompt.value = null;
    }, 10000);
  };
  return {
    openWeb,
    showAcceptInstall,
    prompt,

    allowBackFix,
    generateLink,
    startPreparing,
    isFbOrInst,
    startScanVirus,
    getAppInfo: appGetRemoteData,
    init,
    userDevice,
    installProcess,
    installTrue,
    getUserDevice,
    installTimer,
    installed,
    showOffer,
    installApp,
    installLoading,
    getUserInfo,
    redirectToGoogle,
    preparingProcess,
    page,
  };
});
