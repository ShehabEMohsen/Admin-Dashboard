<template>
    <div class="w-[1021px] h-96 rounded-2xl bg-neutral-white border border-solid border-neutral-500 p-4">
      <Bar :data="data" :options="options" :style="{color:'blue'}" />
    </div>
</template>
<script  lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return chartConfig
  }
}
</script>
<style></style>