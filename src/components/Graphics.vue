<template>
  <div class="container">
    <!-- <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/> -->
      <div class="container-graphics">
        <pie-chart v-if="loaded" :data="chartData" :options="chartOptions"></pie-chart>
      </div>
  </div>
</template>

<script>
import PieChart from '../PieChart.ts';

export default {
  name: 'LineChartContainer',
  props: ['todo', 'complete', 'progress', 'loaded'],
  components: {
    PieChart,
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20,
      },
      chartData: {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: ['Todo', 'Completed', 'In progress'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651','#eabf46'],
            data: [this.todo, this.complete, this.progress],
          },
        ],
      },
    };
  },
  // async mounted () {
  //   this.loaded = false
  //   try {
  //     const { userlist } = await fetch('/api/userlist')
  //     this.chartdata = userlist
  //     this.loaded = true
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
};
</script>
<style>
  .container-graphics {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
