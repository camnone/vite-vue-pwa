
import { createApp } from './main'
import './assets/scss/main.scss'
const { app } = createApp()
import { createHead } from "@vueuse/head";

app.use(createHead()).mount('#app')
