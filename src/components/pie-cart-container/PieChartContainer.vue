<template>
  <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PieChart from '../PieChart.js';

@Component({
  components: { PieChart },
})
export default class Chart extends Vue {
  @Prop() private completed!: number;

  @Prop() private notCompleted!: number;

  private chartOptions = {
    hoverBorderWidth: 20,
  };

  private chartData = {
    hoverBackgroundColor: 'red',
    hoverBorderWidth: 10,
    labels: ['Completed', 'Not Completed'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: ['#41B883', '#E46651'],
        data: [this.completed, this.notCompleted],
      },
    ],
  };
}
</script>
<style src="./PieChartContainer.css" lang="css"></style>
