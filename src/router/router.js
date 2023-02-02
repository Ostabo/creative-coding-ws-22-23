import {createRouter, createWebHashHistory} from "vue-router";
import GroupView from "@/views/GroupView.vue";
import MainView from "@/views/MainView.vue";
import WeeklyView from "@/views/WeeklyView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const weeklyName = "Projekte";
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Projekt-Übersicht",
            component: MainView,
        },
        {
            path: "/weekly",
            name: weeklyName,
            component: WeeklyView,
        },
        {
            path: "/group/:group",
            name: "Projekt",
            component: GroupView,
            props: true,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: NotFoundView,
        },
    ],
    strict: true,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition)
            return {
                ...savedPosition,
                behavior: "smooth",
            };
        return {
            top: 0,
            behavior: "smooth",
        };
    },
});

export default router;