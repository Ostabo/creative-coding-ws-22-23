<template>
  <v-col :align="'center'" :justify="'center'">
    <h1 class="em-buffer-top">{{ json.title || 'Gruppe ' + group }}</h1>
    <h2 class="my-5 text-subtitle-1 font-weight-thin">- {{ json.theme }} -</h2>
    <v-label class="em-buffer-bot">{{ json.people }}</v-label>
    <v-responsive v-if="json.description" :width="dynamicWidth"
                  class="text-left border-t py-5 mb-5">
      <p>
        {{ json.description }}
      </p>
    </v-responsive>
  </v-col>
  <v-row v-if="json.img.length > 0" :align="'center'" :justify="'center'" class="fill-height">
    <v-responsive :width="dynamicFrameWidth" class="text-left">
      <v-carousel class="change-carousel-theme"
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
    <v-responsive :max-width="dynamicWidth" class="text-left py-5 mt-5">
      <p>
        {{ json.filler }}
      </p>
    </v-responsive>
  </v-row>
  <v-row v-if="json.iframe" :align="'center'" :justify="'center'" class="fill-height flex-column">
    <iframe
        v-for="ifr in json.iframe"
        :allowfullscreen="'true'"
        :height="json.customIframeHeight || '800px'"
        :src="ifr"
        :style="'width:' + dynamicFrameWidth"
        class="mt-5 border frame"
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
      return this.$vuetify.display.xs ? '100%' : '600px'
    },
    dynamicFrameWidth() {
      return this.$vuetify.display.width < 1000 ? '100vw' : '1000px'
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
</style>