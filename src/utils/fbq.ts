//@ts-nocheck

export const fbqInit = () => {
  const params = new URLSearchParams(
    window.localStorage.getItem("params") ?? encodeURI(window.location.search)
  );

  if (params.get("fbq")) {
    !(function (f, b, e, v, n, t, s) {
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
    let pixel = params.get("fbq");

    if (pixel) {
      fbq("init", `${pixel}`);
      fbq("track", "PageView");
    } else {
      console.log("ошибка в пикселе");
    }
  } else {
    console.log(321);
  }
};
