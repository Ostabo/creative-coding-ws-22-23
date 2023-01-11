import { createRouter, createWebHistory } from "vue-router";
import GroupView from "@/views/GroupView.vue";
import MainView from "@/views/MainView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: MainView,
        },
        {
            path: "/group1",
            name: "group1",
            component: GroupView
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/",
        },
    ],
});

export default router;