'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

const data = {
  labels,
  datasets: [
    {
      label: 'Conservative',
      data: [48, 97, 168, 240, 336],
      borderColor: '#94a3b8',
      backgroundColor: 'rgba(148,163,184,0.1)',
      fill: true,
      tension: 0.3,
    },
    {
      label: 'Base',
      data: [72, 145, 290, 435, 580],
      borderColor: '#c9a227',
      backgroundColor: 'rgba(201,162,39,0.1)',
      fill: true,
      tension: 0.3,
      borderWidth: 3,
    },
    {
      label: 'Aggressive',
      data: [97, 218, 435, 629, 847],
      borderColor: '#1a1a2e',
      backgroundColor: 'rgba(26,26,46,0.1)',
      fill: true,
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { position: 'bottom' as const },
    title: { display: false },
    tooltip: {
      callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: (ctx: any) =>
          `${ctx.dataset.label ?? ''}: ₱${ctx.parsed.y}M`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: string | number) => `₱${value}M`,
      },
    },
  },
};

export default function RevenueChart() {
  return <Line data={data} options={options} />;
}
