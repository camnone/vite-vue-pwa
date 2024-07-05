
import { createMemoryHistory, createRouter } from 'vue-router'
import OfferView from '../routes/offer.vue';
import LoaderView from '../routes/loader.vue';
import AndroidView from '../routes/android.vue';
import ErrorView from '../routes/404.vue';








const routes = [
    { path: '/', component: LoaderView },
    { path: '/offer', component: OfferView },
    { path: '/android', component: AndroidView },
    { path: '/404', component: ErrorView },


]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router