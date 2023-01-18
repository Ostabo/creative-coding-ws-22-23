<template>
  <v-card class="ma-6" min-width="300" width="380px">
    <v-img
        :cover="true"
        :lazy-src="'https://via.placeholder.com/380x220.webp?text=Loading...'"
        :src="getImg()"
        alt="Project Preview"
        height="220px">
    </v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>{{ text }}</v-card-text>
    <v-card-actions>
      <RouterLink v-slot="{ navigate }" :to="route" custom>
        <v-btn color="primary" role="link" @click="navigate" @keypress.enter="navigate">VIEW</v-btn>
      </RouterLink>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "OverviewCard",
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
  },
  methods: {
    getImg() {
      return new URL(`../assets/images/${this.image}`, import.meta.url).href
    }
  }
}
</script>

<style scoped>

</style>