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
            props: true,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFoundView,
        },
    ],
    strict: true,
});

export default router;