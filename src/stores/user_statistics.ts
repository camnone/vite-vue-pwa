import { defineStore } from "pinia";
import { mainStore } from "./main_store.js";

export const userStatistics = defineStore("userStatistics", () => {
    const main_store = mainStore();
    
    const connectUser = async () => {
        let ip;
        const res = await fetch("/api/ip");
        if (res.status == 200) {
          const language = await res.json();
    
          if (!localStorage.getItem("ip")) {
            localStorage.setItem("ip", language["ip"]);
          }
          if (language.ip != "0") {
            ip = language.ip;
          } else {
            if (!localStorage.getItem("ip")) {
              ip = localStorage.getItem("ip");
            }
          }
          
          await connectUserResponse({
            ip: ip,
            userAgent: language.userAgent,
            geo: language.language,
            pwa: main_store.page,
          });
        }
      };

      const installPwa = async () => {
        try {
          let ip;
    
          if (localStorage.getItem("ip")) {
            ip = localStorage.getItem("ip");
          } else {
            const res = await fetch("/api/ip");
            if (res.status == 200) {
              const language = await res.json();
    
              if (!localStorage.getItem("ip")) {
                localStorage.setItem("ip", language["ip"]);
              }
              if (language.ip != "0") {
                ip = language.ip;
              }
            }
          }
    
          await fetch(
            `https://hammerhead-app-wpsna.ondigitalocean.app/pwa/user/install/${ip}`
          );
        } catch (e) {
          console.log(e);
        }
      };

      const connectUserResponse = async (data: any) => {
        try {
          await fetch(
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
                page: main_store.page,
              }),
            }
          );
        } catch (e) {
          console.log(e);
        }
      };


      return {
        installPwa,
        connectUser
      }
});