<template>
  <h2 class="ma-10">Woche {{ week }}</h2>
  <p>{{ json.description }}</p>
  <v-row v-for="person in json.people" :key="person"
         :align="'center'"
         :justify="'center'"
         class="border-t rounded my-5">
    <h3 class="text-disabled w-100 text-start ms-2">{{ person.name }}</h3>
    <v-card v-for="img in person.img" class="ma-6" min-width="300"
            @click="overlay[img] = true">
      <v-img
          :cover="true"
          :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
          :src="getImg(img)"
          height="220px"
          width="380px"
      >
      </v-img>
    </v-card>

    <v-card v-for="ifr in person.iframe" class="ma-6" min-width="300"
            @click="overlay[ifr.src] = true">
      <v-img
          :cover="true"
          :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
          :src="getImg(ifr.thumbnail)"
          height="220px"
          width="380px"
      >
      </v-img>
    </v-card>

    <v-card v-for="pdf in person.pdf" class="ma-6" height="220" min-width="300" width="380"
            @click="overlay[pdf] = true">
      <v-icon :icon="'mdi-file-pdf-box'"
              :size="220"
              class="text-center">
      </v-icon>
    </v-card>

    <v-dialog v-for="ifr in person.iframe" v-model="overlay[ifr.src]" :scrollable="true"
              :width="$vuetify.display.xs || $vuetify.display.sm ? '' : '60%'">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>{{ ifr.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="overlay[ifr.src] = false">
            <v-icon :icon="'mdi-close'"></v-icon>
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

    <v-dialog v-for="img in person.img" v-model="overlay[img]" :scrollable="true"
              :width="$vuetify.display.xs || $vuetify.display.sm ? '' : '60%'">
      <v-card>
        <v-toolbar>
          <v-spacer></v-spacer>
          <v-btn icon @click="overlay[img] = false">
            <v-icon :icon="'mdi-close'"></v-icon>
          </v-btn>
        </v-toolbar>
        <v-img
            :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
            :src="getImg(img)"
        >
        </v-img>
      </v-card>
    </v-dialog>

    <v-dialog v-for="pdf in person.pdf" v-model="overlay[pdf]" :scrollable="true"
              :width="$vuetify.display.xs || $vuetify.display.sm ? '' : '60%'">
      <v-card>
        <v-toolbar>
          <v-btn :href="getPdf(pdf)"
                 download
                 icon>
            <v-icon :icon="'mdi-download'"></v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="overlay[pdf] = false">
            <v-icon :icon="'mdi-close'"></v-icon>
          </v-btn>
        </v-toolbar>
        <VuePdfEmbed :source="getPdf(pdf)"/>
      </v-card>
    </v-dialog>

  </v-row>
</template>

<script>
import week from "../assets/weeks.json";
import VuePdfEmbed from "vue-pdf-embed";

export default {
  name: "WeekComponent",
  components: {VuePdfEmbed},
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
      return img.startsWith('http') ? img : new URL(`../assets/images/${img}`, import.meta.url).href
    },
    getPdf(pdf) {
      return pdf.startsWith('http') ? pdf : new URL(`../assets/pdfs/${pdf}`, import.meta.url).href
    }
  }
}
</script>

<style scoped>
</style>