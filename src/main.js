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

const ccTheme = {
    dark: false,
    colors: {
        background: '#e3e3e4',
        surface: '#fdfdfe',
        primary: '#000001',
        secondary: '#3f3f40',
        error: '#77434b',
        info: '#86adc2',
        success: '#78b079',
        warning: '#deaf72',
    }
}

const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    theme: {
        defaultTheme: 'ccTheme',
        themes: {
            ccTheme,
            carousel: {
                colors: {
                    background: '#e3e3e4',
                    surface: '#fdfdfe',
                    primary: '#e3e3e4',
                    secondary: '#3f3f40',
                    error: '#77434b',
                    info: '#86adc2',
                    success: '#78b079',
                    warning: '#deaf72'
                }
            }
        }
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
