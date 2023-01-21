<template>
  <v-col :align="'center'" :justify="'center'">
    <h1 class="mb-5">Gruppe {{ group }}</h1>
    <v-label class="mb-5">{{ json.people }}</v-label>
    <v-responsive :max-width="dynamicWidth" class="text-justify border-t border-b py-5 paragraph">
      <p>
        {{ json.description }}
      </p>
    </v-responsive>
  </v-col>
  <v-row :align="'center'" :justify="'center'" class="fill-height">
    <v-responsive :max-width="dynamicWidth" class="text-justify border-b pa-5 pb-10 ma-5 paragraph">
      <v-carousel class="rounded v-card--variant-elevated change-carousel-theme"
                  color="surface"
                  theme="carousel">
        <v-carousel-item
            v-for="img in json.img"
            :src="getImg(img)"
            cover
        ></v-carousel-item>
      </v-carousel>
    </v-responsive>
  </v-row>
  <v-row v-if="json.filler" :align="'center'" :justify="'center'" class="fill-height">
    <v-responsive :max-width="dynamicWidth" class="text-justify border-b pa-5 pb-10 paragraph">
      <p>
        {{ json.filler }}
      </p>
    </v-responsive>
  </v-row>
  <v-row :align="'center'" :justify="'center'" class="fill-height py-5">
    <iframe
        v-for="ifr in json.iframe"
        :allowfullscreen="'true'"
        :src="ifr"
        :width="dynamicWidth"
        class="rounded ma-5 border frame v-card--variant-elevated"
        name="p5js"
    ></iframe>
  </v-row>
</template>

<script>
import groups from "../assets/groups.json";

export default {
  name: "GroupView",
  props: {
    group: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      json: groups[this.group] || {}
    }
  },
  computed: {
    dynamicWidth() {
      return this.$vuetify.display.xs ? '100%' : '60%'
    }
  },
  methods: {
    getImg(img) {
      return img.startsWith('http') ? img : new URL(`../assets/images/${img}`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.frame {
  min-width: 80vmin;
  min-height: 80vmin;
}

.paragraph {
  min-width: 80vmin;
}
</style>