<template>
  <v-row :align="'center'" :justify="'center'" class="resp em-buffer-y">
    <OverviewCard v-for="(group, i) in json"
                  :key="i"
                  :image="group.thumbnail || ''"
                  :route="'/group/' + i"
                  :subtitle="group.people || ''"
                  :text="group.theme || ''"
                  :title="group.title || 'Gruppe ' + i || ''"
    >
    </OverviewCard>
  </v-row>
</template>
<script>
import OverviewCard from "@/components/OverviewCard.vue";
import groups from "../assets/groups.json";

export default {
  name: "MainView",
  components: {OverviewCard},
  data() {
    return {
      json: groups
    }
  },
  computed: {
    dynamicWidth() {
      return this.$vuetify.display.xs ? '100%' : '600px'
    }
  }
}
</script>

<style scoped>
.resp {
  max-width: 1700px;
  justify-self: center;
}
</style>