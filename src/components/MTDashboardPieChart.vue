<template>
  <div>
    <canvas :id="id" />
    <h1 class="text-2xl legend">{{ percent }} %</h1>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "sc-doughnut-chart",
  props: {
    id: {
      type: String,
      required: true,
    },
    labelDone: {
      type: String,
      default: () => {
        return "";
      },
    },
    labelNotDone: {
      type: String,
      default: () => {
        return "";
      },
    },
    color: {
      type: String,
      default: () => {
        return "";
      },
    },
    backgroundColor: {
      type: String,
      default: () => {
        return "";
      },
    },
    percent: {
      type: Number,
      default: () => {
        return 0;
      },
    },
    options: {
      type: Object || undefined,
      default: () => {
        return Chart.defaults.doughnut;
      },
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    percent: function() {
      if (this.chart && this.chart.data && this.chart.data.datasets) {
        this.chart.data.datasets[0].data = this.dataset;
        this.chart.data.labels = this.labels;
        this.chart.update();
      }
    },
  },
  mounted() {
    this.createChart({
      datasets: [
        {
          data: [this.percent, 100 - this.percent],
          backgroundColor: [this.color, this.backgroundColor],
          borderWidth: 0,
        },
      ],
      labels: [this.labelDone, this.labelNotDone],
    });
  },
  methods: {
    createChart(chartData) {
      debugger;
      const canvas = document.getElementById(this.id);
      const options = {
        type: "pie",
        data: chartData,
        options: {
          plugins: {
            datalabels: {
              display: false,
            },
          },
          legend: {
            display: false,
          },
        },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
      };
      this.chart = new Chart(canvas, options);
    },
  },
};
</script>

<style lang="sass" scoped>
.legend
    font-weight: bold
    margin-top: 10px
</style>
