import React from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ContestRatingChart = ({ data }) => {
  const chartData = {
    labels: data.map((contest) => contest.date),
    datasets: [
      {
        label: 'Contest Rating',
        data: data.map((contest) => contest.rating),
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: false,
        pointBackgroundColor: 'white',
        pointBorderColor: 'orange',
        pointHoverBackgroundColor: 'orange',
        pointHoverBorderColor: 'white',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          color: '#ffffff',
        },
        ticks: {
          color: '#ffffff',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rating',
          color: '#ffffff',
        },
        ticks: {
          color: '#ffffff',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ContestRatingChart;
