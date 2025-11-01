<template>
    <div class="bg-base-200 p-4 rounded  shadow">
      <canvas ref="canvasRef"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js'
  
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale)
  
  const canvasRef = ref(null)
  
  onMounted(() => {
    const ctx = canvasRef.value.getContext('2d')
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [{
          label: 'فروش ماهیانه',
          data: [120000, 150000, 130000, 170000, 160000, 180000],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
          },
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  })
  </script>
  