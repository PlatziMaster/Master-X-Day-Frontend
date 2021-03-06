<template>
  <div
    class="w-60 h-96 sm:text-sm md:text-md xl:text-xl rounded-xl shadow-xl bg-gray-100"
  >
    <!--Componente de gráfico-->
    <div class="h-3/5 flex flex-wrap content-center justify-center ">
      <mt-dashboard-pie color="#FF8C8C" backgroundColor="#FFE5E5" label="prueba" :percent="50"/>
      <span class="font-bold text-center text-2xl p-4">
        Progreso del tablero
      </span>
    </div>
    
  </div>
</template>

<script>

import MTDashboardPieChart from '@/components/MTDashboardPieChart.vue';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    'mt-dashboard-pie': MTDashboardPieChart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
