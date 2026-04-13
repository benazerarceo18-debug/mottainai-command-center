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
  type Plugin,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Custom plugin: draw 🍜 emoji at every data point
const ramenPointPlugin: Plugin<'line'> = {
  id: 'ramenPoints',
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    chart.data.datasets.forEach((_, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      if (meta.hidden) return;
      meta.data.forEach((point) => {
        const { x, y } = point.getProps(['x', 'y'], true) as { x: number; y: number };
        ctx.save();
        ctx.font = '18px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🍜', x, y);
        ctx.restore();
      });
    });
  },
};

const labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];

const data = {
  labels,
  datasets: [
    {
      label: 'Conservative',
      data: [158, 315, 551, 788, 1103],
      borderColor: '#94a3b8',
      backgroundColor: 'rgba(148,163,184,0.1)',
      fill: true,
      tension: 0.3,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
    {
      label: 'Base',
      data: [270, 540, 1080, 1620, 2160],
      borderColor: '#FB923C',
      backgroundColor: 'rgba(201,162,39,0.1)',
      fill: true,
      tension: 0.3,
      borderWidth: 3,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
    {
      label: 'Aggressive',
      data: [450, 1013, 2025, 2925, 3938],
      borderColor: '#111827',
      backgroundColor: 'rgba(26,26,46,0.1)',
      fill: true,
      tension: 0.3,
      pointRadius: 0,
      pointHoverRadius: 0,
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
  return <Line data={data} options={options} plugins={[ramenPointPlugin]} />;
}
