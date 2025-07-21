import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("./views/Home.vue"),
        },
        {
            path: "/products",
            name: "Products",
            component: () => import("./views/Products.vue"),
        },
    ],
});

export default router;
