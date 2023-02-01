<template>
  <v-responsive max-width="1550px">
    <h1 class="text-left em-buffer-top">Woche {{ week }}</h1>
    <div class="text-left em-buffer-bot">{{ json.description }}</div>
    <v-row v-for="person in json?.people?.filter(p => hasSomething(p))"
           :key="person"
           :align="'center'"
           :justify="'center'"
           class="my-5">
      <div class="text-disabled w-100 text-start ms-4">{{ person.name }}</div>
      <v-card v-for="img in person.img" class="ma-1" elevation="0" height="220" min-width="300" rounded="0" width="380"
              @click="overlay[img] = true">
        <v-icon v-if="img.toString().endsWith('.gif')"
                :icon="'mdi-file-gif-box'"
                :size="220"
                class="text-center">
        </v-icon>
        <v-img v-else
               :cover="true"
               :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
               :src="getImg(img)"
               height="220px"
               width="380px"
        >
        </v-img>
      </v-card>

      <v-card v-for="ifr in person.iframe" class="ma-1" elevation="0" min-width="300" rounded="0"
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

      <v-card v-for="pdf in person.pdf" class="ma-1" elevation="0" height="220" min-width="300" rounded="0" width="380"
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
            <v-btn :href="ifr.src" icon target="_blank">
              <v-icon :icon="'mdi-open-in-new'"></v-icon>
            </v-btn>
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
              class="border"
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
  </v-responsive>
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
    },
    hasSomething(person) {
      return person.img?.length > 0 || person.iframe?.length > 0 || person.pdf?.length > 0
    }
  }
}
</script>

<style scoped>
</style>