<template>
  <v-col :align="'center'" :justify="'space-evenly'" class="mb-6">
    <h1 class="mb-5">Creative Coding</h1>
    <v-responsive :max-width="dynamicWidth" class="text-justify border-t border-b py-5 paragraph">
      <p>
        Lorem epsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem epsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem epsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </v-responsive>
  </v-col>
  <v-row :align="'center'" :justify="'center'">
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
      return this.$vuetify.display.xs ? '100%' : '500px'
    }
  }
}
</script>

<style scoped>
.paragraph {
  min-width: 80vmin;
}
</style>