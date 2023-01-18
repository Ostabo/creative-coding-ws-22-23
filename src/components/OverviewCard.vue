<template>
  <v-card width="380px" class="ma-6">
    <v-img
      :src="getImg()"
      alt="Project Preview"
      max-height="300px">
    </v-img>
    <v-card-title>{{title}}</v-card-title>
    <v-card-subtitle>{{subtitle}}</v-card-subtitle>
    <v-card-text>{{text}}</v-card-text>
    <v-card-actions>
      <RouterLink :to="route" custom v-slot="{ navigate }">
        <v-btn color="primary" @click="navigate" @keypress.enter="navigate" role="link">VIEW</v-btn>
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