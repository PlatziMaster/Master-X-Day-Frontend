<template>
  <div class="about">
    <MTDashboardCard listName="To-Do" cardsNumber="50"/>
    <MTDashboardCard listName="In Progress" cardsNumber="20"/>
    <MTDashboardCard listName="Done" cardsNumber="10"/>
  </div>
  
</template>
<script>
// @ is an alias to /src
import MTDashboardCard from "@/components/MTDashboardCard.vue";

export default {
  name: "Dashboard",
  components: {
    MTDashboardCard
  }
};
</script>