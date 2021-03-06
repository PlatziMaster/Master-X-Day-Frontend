<template>
  <div
    class="w-60 h-96 sm:text-sm md:text-md xl:text-xl rounded-xl shadow-xl bg-gray-100"
  >
    <!--Componente de gráfico-->
    <div class="h-3/5 flex flex-wrap content-center justify-center ">
      <mt-dashboard-pie color="#FF8C8C" backgroundColor="#FFE5E5" label="prueba" :percent="50"/>
    </div>
    <div class="bg-MTLightGreen h-1/5 align-middle my-auto flex flex-wrap content-center justify-center text-MTWhite">
      <div class="flex flex-col">
        <span class="text-lg">{{ listName }}</span>
        <span class="text-bold text-sm">List</span>
      </div>
    </div>
    <div class="bg-MTDarkGreen h-1/5 rounded-b-xl align-middle flex flex-wrap content-center justify-center text-MTWhite">
      <span> {{cardsNumber}} Cards</span> 
    </div>
  </div>
</template>

<script>

import MTDashboardPieChart from '@/components/MTDashboardPieChart.vue';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    listName: String,
    cardsNumber: String
  },
  components: {
    'mt-dashboard-pie': MTDashboardPieChart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
