
import { createMemoryHistory, createRouter } from 'vue-router'
import OfferView from '../routes/offer.vue';
import LoaderView from '../routes/loader.vue';
import AndroidView from '../routes/android.vue';
import ErrorView from '../routes/404.vue';
import RedirectView from '../routes/redirectApp.vue';









const routes = [
    { path: '/', component: LoaderView },
    { path: '/offer', component: OfferView },
    { path: '/android', component: AndroidView },
    { path: '/404', component: ErrorView },
    { path: '/redirect', component: RedirectView },


]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router