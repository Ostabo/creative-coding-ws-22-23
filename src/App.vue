<template>
  <v-app>
    <v-app-bar :collapse="collapse">
      <v-app-bar-nav-icon :icon="'mdi-home'" to="/">
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon :icon="'mdi-format-list-text'" to="/weekly">
      </v-app-bar-nav-icon>
      <v-app-bar-title v-if="!$vuetify.display.xs" class="mx-5">Creative Coding</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-label class="mx-5">{{ $route.name }}</v-label>
    </v-app-bar>

    <v-main>
      <v-container :fluid="true">
        <RouterView/>
      </v-container>
    </v-main>
    <v-footer class="justify-center">
      <v-label>HTWG Konstanz</v-label>
      <v-spacer></v-spacer>
      <v-label>2023</v-label>
    </v-footer>
  </v-app>
</template>

<script>
import {RouterView} from "vue-router";

export default {
  name: "App",
  components: {
    RouterView
  },
  data() {
    return {
      collapse: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.collapse = e.target.documentElement.scrollTop > 100
    }
  }
}
</script>

<style lang="scss">
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1);
}

*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

*::-webkit-scrollbar-track {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  margin: 5px 0;
}

*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}

*::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}

*::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, .9);
}
</style>