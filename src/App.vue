<template>
  <v-app>
    <v-app-bar :collapse="collapse" elevation="0">
      <v-app-bar-nav-icon :icon="'mdi-home'" aria-label="Home Navigation" to="/">
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon :icon="'mdi-format-list-text'" aria-label="Weekly Navigation" to="/weekly">
      </v-app-bar-nav-icon>
      <v-app-bar-title v-if="!$vuetify.display.xs" class="mx-5">Programme entwerfen – Creative Coding</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-label class="mx-5">{{ $route.name }}</v-label>
    </v-app-bar>

    <v-main>
      <v-container :fluid="true" class="d-flex flex-column justify-center align-center">
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
import {useTheme} from "vuetify";

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
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: (themeName) => theme.global.name.value = themeName
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
  },
  computed: {
    pathToColor() {
      switch (this.$route.path) {
        case '/weekly':
          this.toggleTheme('weeklyTheme')
          return '#db1f11'
        default:
          this.toggleTheme('ccTheme')
          return '#004594'
      }
    }
  }
}
</script>

<style lang="scss">
$text-color: v-bind(pathToColor);
$font-family: 'Roboto Mono';
$font-family-headers: 'Ogg Roman';

h1, h2, h3, h4, h5, h6 {
  color: $text-color !important;
  font-family: $font-family-headers !important;
}

.v-application {
  [class*='text-'] {
    color: $text-color !important;
  }

  color: $text-color !important;
  font-family: $font-family, monospace !important;
}
</style>