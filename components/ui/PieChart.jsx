// components/ReviewDonutChart.js
'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ReviewDonutChart = () => {
  const data = {
    labels: ['total applicants', 'total reviewed'],
    datasets: [
      {
        data: [1376, 3904],
        backgroundColor: ['#e2e1e7', '#9400D3'], // light gray, purple
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    cutout: '70%', // makes it look like a donut
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#666',
          font: {
            size: 12,
          },
          boxWidth: 12,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            let value = context.formattedValue || '';
            return `${label}: ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: '342px',
        height: '222',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 0 4px rgba(0,0,0,0.1)',
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ReviewDonutChart;
