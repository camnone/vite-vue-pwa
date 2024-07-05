import { createSSRApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router";

const pinia = createPinia()

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(router)
  return { app }
}
