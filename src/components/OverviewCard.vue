<template>
  <v-hover v-slot="{ isHovering, props }">
    <RouterLink v-slot="{ navigate }" :to="route" custom>
      <v-card :hover="isHovering" class="ma-1" min-width="300" v-bind="props" width="380px"
              @click="navigate">
        <v-img
            :cover="true"
            :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
            :src="getImg(image)"
            alt="Project Preview"
            height="220px">
        </v-img>
        <v-card-title :title="title">{{ title }}</v-card-title>
        <v-card-subtitle :title="subtitle" class="flex-wrap">{{ subtitle }}</v-card-subtitle>
        <v-card-actions :title="text" class="ms-2">{{ text }}
          <v-spacer></v-spacer>
          <RouterLink v-slot="{ navigate }" :to="route" custom>
            <v-btn :icon="'mdi-location-enter'"
                   color="primary"
                   role="link"
                   @click="navigate"
                   @keypress.enter="navigate"></v-btn>
          </RouterLink>
        </v-card-actions>
      </v-card>
    </RouterLink>
  </v-hover>
</template>

<script>
export default {
  name: "OverviewCard",
  methods: {
    getImg(img) {
      return img.startsWith('http') ? img : new URL(`../assets/images/${img}`, import.meta.url).href
    },
    getPdf(pdf) {
      return pdf.startsWith('http') ? pdf : new URL(`../assets/pdfs/${pdf}`, import.meta.url).href
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>