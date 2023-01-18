<template>
  <v-app>
    <v-app-bar
        :collapse="true"
        :title="'Creative Coding'"
        class="px-2">
      <v-btn :icon="'mdi-home'" to="/">
      </v-btn>
      <v-btn :icon="'mdi-format-list-text'" to="/weekly">
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container :fluid="true">
        <RouterView/>
      </v-container>
    </v-main>
    <v-footer class="justify-center">
      2023 - HTWG Konstanz
    </v-footer>
  </v-app>
</template>

<script>
import {RouterView} from "vue-router";

export default {
  name: "App",
  components: {
    RouterView
  }
}
</script>

<style lang="scss" scoped></style>