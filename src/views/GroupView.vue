<template>
  <v-col :align="'center'" :justify="'center'" class="text-start resp pa-0">
    <h1 class="em-buffer-top">{{ json.title || 'Gruppe ' + group }}</h1>
    <v-label>{{ json.people }}</v-label>
    <h2 class="my-5 text-subtitle-1 font-weight-thin">{{ json.theme }}</h2>
  </v-col>
  <v-row v-if="json.img.length > 0" :align="'center'" :justify="'center'" class="fill-height mt-0">
    <v-responsive :width="dynamicFrameWidth" class="text-left">
      <v-carousel :show-arrows="false"
                  class="change-carousel-theme"
                  color="surface"
                  theme="carousel">
        <v-carousel-item
            v-for="img in json.img"
            :src="getImg(img)"
            cover
        ></v-carousel-item>
      </v-carousel>
      <v-responsive v-if="json.description" :width="dynamicWidth"
                    class="text-left border-t pt-5">
        <p class="text-pre-wrap">
          {{ json.description }}
        </p>
      </v-responsive>
    </v-responsive>
  </v-row>
  <v-row v-if="json.iframe" :align="'center'" :justify="'center'" class="fill-height flex-column">
    <iframe
        v-for="ifr in json.iframe"
        :height="json.customIframeHeight || '800px'"
        :src="ifr"
        :style="'width:' + dynamicFrameWidth"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera; microphone"
        allowfullscreen
        class="mt-5 border frame"
        name="p5js"
        @mouseenter="iframeHover = true"
        @mouseleave="iframeHover = false"
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
      json: groups[this.group] || {},
      iframeHover: false
    }
  },
  watch: {
    iframeHover() {
      if (this.iframeHover && this.json?.iframeNoScroll === "true") {
        this.disableScrolling()
      } else if (!this.iframeHover) {
        this.enableScrolling()
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
    },
    disableScrolling() {
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    },
    enableScrolling() {
      window.onscroll = null
    }
  }
}
</script>

<style lang="scss" scoped>
.resp {
  max-width: 1000px;
  justify-self: center;
}
</style>