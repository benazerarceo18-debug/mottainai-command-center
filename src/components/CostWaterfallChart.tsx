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

const categories = ['Noodles', 'Broth', 'Protein', 'Toppings', 'Packaging', 'Other'];
const values = [15, 18, 20, 8, 5, 4];
const total = values.reduce((s, v) => s + v, 0);

const data = {
  labels: categories,
  datasets: [
    {
      label: 'Cost (₱)',
      data: values,
      backgroundColor: [
        '#FB923C',
        '#b8911f',
        '#a78018',
        '#d4b44a',
        '#e0c76d',
        '#ecd98f',
      ],
      borderRadius: 4,
    },
  ],
};

const options = {
  indexAxis: 'y' as const,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: `Food Cost Waterfall — Average Bowl (₱${total} total)`,
      font: { size: 14, weight: 'bold' as const },
      color: '#111827',
    },
    tooltip: {
      callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: (ctx: any) => `₱${ctx.parsed.x}`,
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      title: { display: true, text: '₱', color: '#64748b' },
      ticks: { color: '#64748b' },
      grid: { color: '#f1f5f9' },
    },
    y: {
      ticks: { color: '#111827', font: { weight: 'bold' as const } },
      grid: { display: false },
    },
  },
};

export default function CostWaterfallChart() {
  return (
    <div className="relative" style={{ height: 320 }}>
      <Bar data={data} options={options} />
      <div className="absolute top-2 right-4 bg-[#111827] text-white text-sm font-bold px-3 py-1 rounded-lg">
        Total: ₱{total}
      </div>
    </div>
  );
}
