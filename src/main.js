import {createApp} from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from "@/router/router";

// Vuetify
import "vuetify/styles";
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {aliases, mdi} from "vuetify/iconsets/mdi";
import {md3} from "vuetify/blueprints";

const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    theme: {
        defaultTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount("#app");