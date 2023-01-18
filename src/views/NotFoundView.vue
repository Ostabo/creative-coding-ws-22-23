<template>
  <v-col :align="'center'" :justify="'center'" class="px-16 pb-16">
    <h1>404</h1>
    <p>
      The page you are looking for does not exist.
      Redirecting to the main page in {{ sec }} seconds.
    </p>
  </v-col>
</template>

<script>
export default {
  name: "NotFoundView",
  data() {
    return {
      sec: 5
    }
  },
  mounted() {
    setInterval(() => {
      this.sec--
      if (this.sec === 0) {
        this.$router.push('/')
      }
    }, 1000)
  }
}
</script>

<style scoped>

</style>