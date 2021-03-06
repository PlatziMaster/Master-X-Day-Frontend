<template>
  <div class="about pb-24">
    <div class="text-white mb-12 text-center md:text-left md:ml-32">
      <h1 class="underline text-4xl font-bold mb-2">{{ "Dashboard name" }}</h1>
      <h2 class="text-2xl font-bold">{{ "3" }} Lists</h2>
      <h3 class="text-md">{{ "80" }} Cards</h3>
    </div>
    <div class="w-full flex flex-col content-center ">

      <div class="grid grid-cols-1 gap-x-8 gap-y-8 mx-auto pb-8 ">
        <div class="hidden md:block">
          <MTDashboardCardLarge />
        </div>
        <div class="block md:hidden">
          <MTDashboardCardSmall />
        </div>
        
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mx-auto">
          <MTDashboardCard listName="To-Do" cardsNumber="50" />
          <MTDashboardCard listName="In Progress" cardsNumber="20" />
          <MTDashboardCard listName="Done" cardsNumber="10" />
      </div>
    </div>
  </div>
</template>
<script>

// @ is an alias to /src
import MTDashboardCard from "@/components/MTDashboardCard.vue";
import MTDashboardCardLarge from "@/components/MTDashboardCardLarge.vue";
import MTDashboardCardSmall from "@/components/MTDashboardCardSmall.vue";

export default {
  name: "Dashboard",
  components: {
    MTDashboardCard,
    MTDashboardCardLarge,
    MTDashboardCardSmall
  },
};
</script>
