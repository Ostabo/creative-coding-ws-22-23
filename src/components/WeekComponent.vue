<template>
  <h2 class="ma-10">Abgabe {{ week }}</h2>
  <v-row v-for="person in json" :key="person" :align="'center'" :justify="'center'" class="border rounded">
    <h3 class="text-disabled w-100 text-start ms-2">{{ person.name }}</h3>
    <v-card v-for="img in person.img" class="ma-6" min-width="300"
            @click="overlay[img] = true">
      <v-img
          :cover="true"
          :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
          :src="getImg(img)"
          max-height="220px"
          max-width="380px"
      >
      </v-img>
    </v-card>

    <v-card v-for="ifr in person.iframe" class="ma-6" min-width="300"
            @click="overlay[ifr.src] = true">
      <v-img
          :cover="true"
          :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
          :src="getImg(ifr.thumbnail)"
          max-height="220px"
          max-width="380px"
      >
      </v-img>
    </v-card>

    <v-dialog v-for="ifr in person.iframe" v-model="overlay[ifr.src]">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>{{ ifr.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="overlay[ifr.src] = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <iframe
            :allowfullscreen="'true'"
            :height="800"
            :src="ifr.src"
            :width="'100%'"
            class="rounded border"
        ></iframe>
      </v-card>
    </v-dialog>
    <v-dialog v-for="img in person.img" v-model="overlay[img]">
      <v-card>
        <v-toolbar>
          <v-spacer></v-spacer>
          <v-btn icon @click="overlay[img] = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-img
            :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
            :src="getImg(img)"
        >
        </v-img>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import week from "../assets/weeks.json";

export default {
  name: "WeekComponent",
  props: {
    week: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      json: week[this.week] || {},
      overlay: {}
    }
  },
  methods: {
    getImg(img) {
      return new URL(`../assets/images/${img}`, import.meta.url).href
    }
  }
}
</script>

<style scoped>
</style>