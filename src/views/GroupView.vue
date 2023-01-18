<template>
  <v-col :align="'center'" :justify="'center'" class="px-16 pb-16">
    <h1>Gruppe {{ group }}</h1>
    <p>
      {{ description }}
    </p>
  </v-col>
  <v-row :align="'center'" :justify="'center'" class="fill-height border-t">
    <iframe
        :allowfullscreen="'true'"
        :height="json.iframe.height"
        :src="json.iframe.src"
        :width="json.iframe.width"
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
    description: {
      type: String,
      default: "No description available.",
      required: false
    }
  },
  data() {
    return {
      json: groups[this.group]
    }
  },
}
</script>

<style scoped>

</style>