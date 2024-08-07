import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LeetcodeCharts = ({ contestStats }) => {
  // Data for the line chart
  const lineChartData = {
    labels: [
      'Jun 08, 2024',
      'Jun 15, 2024',
      'Jun 22, 2024 (Biweekly)',
      'Jun 22, 2024 (Weekly)',
      'Jun 29, 2024'
    ],
    datasets: [
      {
        label: 'Contest Rating',
        data: [1504, 1521, 1631, 1660, 1740],
        borderColor: '#FF9900',
        backgroundColor: '#FF9900',
        fill: false,
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#FF9900',
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Contest Rating</h3>
      <Line data={lineChartData} />
    </div>
  );
};

export default LeetcodeCharts;
