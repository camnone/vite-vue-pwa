//@ts-ignore
import CryptoJS from "crypto-js";
export const dasdasdasdasdsadqwksamnklds =
  "djknaskjbndskjfnbiu2bnfiusalndasjknd32uiofbdsijfn;adioasnfbipu23fbdsn;fnasdkasm;lkdnasoufb2fn;jdsfaiofnasoknf";

export function encryptWithSecretOnly(
  text: string,
  dnsadnlsandasnjknjk: string
) {
  return CryptoJS.AES.encrypt(text, dnsadnlsandasnjknjk);
}

export function decrypt(text: string, dnsadnlsandasnjknjk: string) {
  try {
    var bytes = CryptoJS.AES.decrypt(text, dnsadnlsandasnjknjk);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return null;
  }
}

export const writeCookie = async (name: string, val: any, expires: number) => {
  try {
    var date = new Date();

    date.setDate(date.getDate() + expires);

    document.cookie =
      name +
      "=" +
      encryptWithSecretOnly(val, dasdasdasdasdsadqwksamnklds) +
      "; path=/; expires=" +
      date.toUTCString();
  } catch (e) {}
};

export const readCookie = (name: string) => {
  try {
    var matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );

    return matches
      ? decrypt(matches[1], dasdasdasdasdsadqwksamnklds)
      : undefined;
  } catch (e) {
    console.log(e);
  }
};

export const reedDeepCookie = (name: string) => {
  var matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );

  return matches ? decrypt(matches[1], dasdasdasdasdsadqwksamnklds) : undefined;
};

export const removeCookie = (name: string) => {
  var date = new Date();

  document.cookie = name + date.toUTCString() + "=; Max-Age=-99999999;";
};

export const deleteAllCookies = () => {
  document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  });
};
