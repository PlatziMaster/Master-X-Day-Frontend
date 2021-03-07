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
import PieChart from '../PieChart';

export default {
  name: 'LineChartContainer',
  props: ['Pmayor', 'Pmenor', 'loaded', 'labelg'],
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
        labels: [this.labelg],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651'],
            data: [this.Pmayor, this.Pmenor],
          },
        ],
      },
    };
  },
};
</script>
<style>
  .container-graphics {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
