<template>
  <v-col :align="'center'">
    <WeekComponent v-for="i in 6" :key="i" :week="i"></WeekComponent>
  </v-col>
</template>

<script>
import WeekComponent from "@/components/WeekComponent.vue";

export default {
  name: "WeeklyView",
  components: {WeekComponent}
}
</script>

<style scoped>

</style>