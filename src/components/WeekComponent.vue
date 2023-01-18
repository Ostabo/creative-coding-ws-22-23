<template>
  <h2 class="ma-10">Abgabe {{ week }}</h2>
  <v-row v-for="person in json" :key="person" :align="'center'" :justify="'center'" class="border">
    <h3 class="px-10 pt-5">{{ person.name }}</h3>
    <v-card v-for="img in person.img" class="ma-6" min-width="300">
      <v-img
          :cover="true"
          :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
          :src="getImg(img)"
          max-height="220px"
          max-width="380px"
      >
      </v-img>
    </v-card>
    <iframe
        v-for="ifr in person.iframe"
        :allowfullscreen="'true'"
        :height="ifr.height"
        :src="ifr.src"
        :width="ifr.width"
        class="rounded ma-5 border"
    ></iframe>
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
      json: week[this.week] || {}
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