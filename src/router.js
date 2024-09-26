import {createRouter, createWebHistory} from 'vue-router';
// Components for Router
import Home from './components/Home.vue';
import MakeupPage from './components/MakeupPage.vue'
import SkinCarePage from './components/SkinCarePage.vue'
import ShopingPage from './components/ShopingPage.vue'
import HairCarepage from './components/HairCarepage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import ProductPage from './components/ProductPage.vue'

const routes = [
    {
        name: "Home",
        path: '/',
        component: Home
    },
    {
        name: "makeup",
        path: '/makeup',
        component: MakeupPage
    },
    {
        name: "skincare",
        path: '/skincare',
        component: SkinCarePage
    },
    {
        name: "shop",
        path: '/shop',
        component: ShopingPage
    },
    {
        name: "haircare",
        path: '/haircare',
        component: HairCarepage
    },
    {
        name: "AboutPage",
        path: '/about',
        component: AboutPage
    },
    {
        name: "ContactPage",
        path: '/contact',
        component: ContactPage
    },
    {
        name: "ProductPage",
        path: '/product/:id',
        component: ProductPage,
        props:true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
}) 

export default router;