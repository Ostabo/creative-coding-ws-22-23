import {createRouter, createWebHashHistory} from "vue-router";
import GroupView from "@/views/GroupView.vue";
import MainView from "@/views/MainView.vue";
import WeeklyView from "@/views/WeeklyView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

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
            name: "Projekte",
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
    scrollBehavior() {
        return {
            top: 0
        }
    },
});

export default router;