<template>
  <v-container>
    <h2 class="ma-1">Creative Coding - Projekte</h2>
    <p class="ma-1">
      Lorem epsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </v-container>
  <OverviewCard title="Gruppe-1"
                subtitle="Tester 1, Tester 2, ..."
                image="test.png"
                text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                route="/group/1"
  >
  </OverviewCard>
  <OverviewCard title="Gruppe-2"
                subtitle="Tester 1, Tester 2, ..."
                image="test.png"
                text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                route="/group/2"
  >
  </OverviewCard>
  <OverviewCard title="Gruppe-3"
                subtitle="Tester 1, Tester 2, ..."
                image="test.png"
                text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                route="/group/3"
  >
  </OverviewCard>
  <OverviewCard title="Gruppe-4"
                subtitle="Tester 1, Tester 2, ..."
                image="test.png"
                text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                route="/group/4"
  >
  </OverviewCard>
  <OverviewCard title="Gruppe-5"
                subtitle="Tester 1, Tester 2, ..."
                image="test.png"
                text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                route="/group/5"
  >
  </OverviewCard>
  <OverviewCard title="Gruppe-6"
                subtitle="Tester 1, Tester 2, ..."
                image="test.png"
                text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                route="/group/6"
  >
  </OverviewCard>
  <OverviewCard title="Gruppe-7"
                subtitle="Tester 1, Tester 2, ..."
                image="test.png"
                text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                route="/group/7"
  >
  </OverviewCard>
  <OverviewCard title="Gruppe-8"
                subtitle="Tester 1, Tester 2, ..."
                image="test.png"
                text="This is a project made @ HTWG - Lake of Constance and is a test card to see if this is working !"
                route="/group/8"
  >
  </OverviewCard>
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