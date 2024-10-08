import { defineStore } from "pinia";
import { ref } from "vue";
import {
  dasdasdasdasdsadqwksamnklds,
  decrypt,
  readCookie,
} from "../utils/cookie";

export const androidAssetsStore = defineStore("androidStore", () => {
  const topBarGoogleWhite = ref(
    "https://pwa-backet.fra1.cdn.digitaloceanspaces.com/RTP_SLOTS/other_images/google-play.png"
  );
  const topBarGoogleBlack = ref(
    "https://pwa-backet.fra1.cdn.digitaloceanspaces.com/google-play-black.png"
  );

  const topBarTopDevWhite = ref(
    "https://pwa-backet.fra1.cdn.digitaloceanspaces.com/RTP_SLOTS/other_images/top-developer.png"
  );
  const topBarTopDevBlack = ref(
    "https://pwa-backet.fra1.cdn.digitaloceanspaces.com/top-developer-black.png"
  );

  const topBarTopDev = ref();

  const topBarGoogle = ref();

  const name = ref(JSON.parse(readCookie("name")! ?? null));
  const fbqKey = ref(JSON.parse(readCookie("fbqKey")! ?? null));
  const onesignalKey = ref(JSON.parse(readCookie("onesignalKey")! ?? null));
  const offerLink = ref(JSON.parse(readCookie("offerLink")! ?? null));
  const description = ref(JSON.parse(readCookie("description")! ?? null));
  const screens = ref(JSON.parse(readCookie("screens")! ?? null));
  const iconUrl = ref(JSON.parse(readCookie("iconUrl")! ?? null));
  const subtitle = ref(JSON.parse(readCookie("subtitle")! ?? null));
  const ratings = ref(JSON.parse(readCookie("ratings")! ?? null));
  const ratingsLength = ref(JSON.parse(readCookie("ratingsLength")! ?? null));
  const installNumbers = ref(JSON.parse(readCookie("installNumbers")! ?? null));
  const shortDescription = ref(
    JSON.parse(readCookie("shortDescription")! ?? null)
  );
  const tags = ref(JSON.parse(readCookie("tags")! ?? null));
  const version = ref(JSON.parse(readCookie("version")! ?? null));
  const updatedTime = ref(JSON.parse(readCookie("updatedTime")! ?? null));
  const size = ref(JSON.parse(readCookie("size")! ?? null));
  const developer = ref(JSON.parse(readCookie("developer")! ?? null));
  const releasedTime = ref(JSON.parse(readCookie("releasedTime")! ?? null));
  const website = ref(JSON.parse(readCookie("website")! ?? null));
  const reviews = ref<any>(
    JSON.parse(
      decrypt(localStorage.getItem("reviews")!, dasdasdasdasdsadqwksamnklds)
    ) ?? null
  );
  const icons = ref<any>(JSON.parse(readCookie("icons")! ?? null));
  const favicon = ref<any>(JSON.parse(readCookie("favicon")! ?? null));
  const video = ref<any>(JSON.parse(readCookie("video")! ?? null));

  return {
    video,
    topBarTopDevBlack,
    topBarTopDevWhite,
    favicon,
    icons,
    website,
    name,
    reviews,
    releasedTime,
    developer,
    size,
    updatedTime,
    version,
    tags,
    shortDescription,
    installNumbers,
    ratingsLength,
    topBarGoogle,
    subtitle,
    fbqKey,
    description,
    topBarGoogleWhite,
    screens,
    topBarGoogleBlack,
    iconUrl,
    ratings,
    onesignalKey,
    offerLink,
    topBarTopDev,
  };
});
