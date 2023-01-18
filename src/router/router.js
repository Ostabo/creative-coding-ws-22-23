import { createRouter, createWebHistory } from "vue-router";
import GroupView from "@/views/GroupView.vue";
import MainView from "@/views/MainView.vue";
import WeeklyView from "@/views/WeeklyView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: MainView,
        },
        {
            path: "/weekly",
            name: "weekly",
            component: WeeklyView,
        },
        {
            path: "/group/:group",
            name: "group",
            component: GroupView,
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/",
        },
    ],
});

export default router;