<template>
  <v-row :align="'center'" :justify="'center'" class="px-16 pb-16">
    <h1 class="mb-5">Creative Coding</h1>
    <p class="text-justify">
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
  </v-row>
  <v-row :align="'center'" :justify="'center'" class="border-t">
    <OverviewCard image="test.png"
                  route="/group/1"
                  subtitle="Tester 1, Tester 2, ..."
                  text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                  title="Gruppe-1"
    >
    </OverviewCard>
    <OverviewCard image="test.png"
                  route="/group/2"
                  subtitle="Tester 1, Tester 2, ..."
                  text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                  title="Gruppe-2"
    >
    </OverviewCard>
    <OverviewCard image="test.png"
                  route="/group/3"
                  subtitle="Tester 1, Tester 2, ..."
                  text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                  title="Gruppe-3"
    >
    </OverviewCard>
    <OverviewCard image="test.png"
                  route="/group/4"
                  subtitle="Tester 1, Tester 2, ..."
                  text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                  title="Gruppe-4"
    >
    </OverviewCard>
    <OverviewCard image="test.png"
                  route="/group/5"
                  subtitle="Tester 1, Tester 2, ..."
                  text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                  title="Gruppe-5"
    >
    </OverviewCard>
    <OverviewCard image="test.png"
                  route="/group/6"
                  subtitle="Tester 1, Tester 2, ..."
                  text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                  title="Gruppe-6"
    >
    </OverviewCard>
    <OverviewCard image="test.png"
                  route="/group/7"
                  subtitle="Tester 1, Tester 2, ..."
                  text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                  title="Gruppe-7"
    >
    </OverviewCard>
    <OverviewCard image="test.png"
                  route="/group/8"
                  subtitle="Tester 1, Tester 2, ..."
                  text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                  title="Gruppe-8"
    >
    </OverviewCard>
  </v-row>
</template>
<script>
import OverviewCard from "@/components/OverviewCard.vue";

export default {
  name: "MainView",
  components: {OverviewCard},
}
</script>

<style scoped>

</style>