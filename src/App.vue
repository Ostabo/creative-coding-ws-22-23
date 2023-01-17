<template>
  <v-app>
    <v-app-bar>
      <v-btn :icon="'mdi-home'" to="/">
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
          :prepend-icon="theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          @click="toggleTheme"
      >Toggle Theme
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="d-flex justify-center align-center flex-column">
        <RouterView/>
      </v-container>
    </v-main>
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
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  }
}
</script>

<style lang="scss" scoped></style>