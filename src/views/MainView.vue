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
  <v-row :align="'center'" :justify="'space-evenly'">
    <OverviewCard :image="json['1']?.thumbnail || ''"
                  route="/group/1"
                  subtitle="Linda Sommerhalter "
                  text="Schriftgestaltung"
                  title="Gruppe-1"
    >
    </OverviewCard>
    <OverviewCard :image="json['2']?.thumbnail || ''"
                  route="/group/2"
                  subtitle="Nicolas Müller, Marcel Biselli"
                  text="Typografie"
                  title="Gruppe-2"
    >
    </OverviewCard>
    <OverviewCard :image="json['3']?.thumbnail || ''"
                  route="/group/3"
                  subtitle="Elisabeth Schmidt, Emanuel Kupke"
                  text="Soundvisualisierung"
                  title="Gruppe-3"
    >
    </OverviewCard>
    <OverviewCard :image="json['4']?.thumbnail || ''"
                  route="/group/4"
                  subtitle="Marius Emonts"
                  text="Soundvisualisierung"
                  title="Gruppe-4"
    >
    </OverviewCard>
    <OverviewCard :image="json['5']?.thumbnail || ''"
                  route="/group/5"
                  subtitle="Lukas Schwarz"
                  text="Soundvis. mit Arduino+Touchdesigner"
                  title="Gruppe-5"
    >
    </OverviewCard>
    <OverviewCard :image="json['6']?.thumbnail || ''"
                  route="/group/6"
                  subtitle="Pfeifer Jan, Kim Joy Serden, Lilli Marutschke, Nadine Görzen"
                  text="Poster (Sapere Aude)"
                  title="Gruppe-6"
    >
    </OverviewCard>
    <OverviewCard :image="json['7']?.thumbnail || ''"
                  route="/group/7"
                  subtitle="Oskar Borkenhagen, Paula Tröster"
                  text="Datenvisualisierung"
                  title="Gruppe-7"
    >
    </OverviewCard>
    <OverviewCard :image="json['8']?.thumbnail || ''"
                  route="/group/8"
                  subtitle="Konstantin Zabaznov"
                  text="KI-Modell / Input Klang oder Sprache"
                  title="Gruppe-8"
    >
    </OverviewCard>
    <OverviewCard :image="json['9']?.thumbnail || ''"
                  route="/group/9"
                  subtitle="Anna-Lisa Renner"
                  text="Moiré/Stiftplotter/Coden"
                  title="Gruppe-9"
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
      return this.$vuetify.display.xs ? '100%' : '60%'
    }
  }
}
</script>

<style scoped>
.paragraph {
  min-width: 80vmin;
}
</style>