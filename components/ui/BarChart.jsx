'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: [
      'Private Equity - Associate',
      'Associate - Software Engineer',
      'Frontend - trainee',
    ],
    datasets: [
      {
        label: 'Job Postings',
        data: [80, 50, 110],
        backgroundColor: ['#9400D3', '#9370DB', '#87CEFA'], // Violet, Medium Purple, Light Blue
        borderRadius: 10,
        barThickness: 50,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // This makes it horizontal
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#444',
        },
        grid: {
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
          color: '#444',
          font: {
            size: 14,
            weight: '500',
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Your Job Postings
      </h3>
      <Bar data={data} options={options} />
      <div className="flex flex-row justify-center gap-6 mt-6">
        <LegendItem color="#9400D3" label="Private Equity - Associate" />
        <LegendItem color="#9370DB" label="Associate - Software Engineer" />
        <LegendItem color="#87CEFA" label="Frontend - trainee" />
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }) => (
  <div className="flex items-center space-x-2 text-2xl font-bold">
    <span
      className="inline-block w-8 h-8 rounded-sm"
      style={{ backgroundColor: color }}
    ></span>
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);

export default BarChart;
