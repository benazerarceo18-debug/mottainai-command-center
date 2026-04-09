'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

const data = {
  labels,
  datasets: [
    {
      label: 'Conservative',
      data: [2, 4, 7, 10, 14],
      backgroundColor: '#94a3b8',
      borderRadius: 4,
    },
    {
      label: 'Base',
      data: [3, 6, 12, 18, 24],
      backgroundColor: '#FB923C',
      borderRadius: 4,
    },
    {
      label: 'Aggressive',
      data: [4, 9, 18, 26, 35],
      backgroundColor: '#111827',
      borderRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { position: 'bottom' as const },
    title: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5,
      },
    },
  },
};

export default function StoreGrowthChart() {
  return <Bar data={data} options={options} />;
}
