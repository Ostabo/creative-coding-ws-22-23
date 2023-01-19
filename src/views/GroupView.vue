<template>
  <v-col :align="'center'" :justify="'center'" class="px-16 pb-16">
    <h1>Gruppe {{ group }}</h1>
    <p>
      {{ json.description }}
    </p>
  </v-col>
  <v-row :align="'center'" :justify="'center'" class="fill-height border-t">
    <iframe
        v-for="ifr in json.iframe"
        :allowfullscreen="'true'"
        :height="ifr.height"
        :src="ifr.src"
        :width="ifr.width"
        class="rounded ma-5 border"
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
}
</script>

<style scoped>

</style>