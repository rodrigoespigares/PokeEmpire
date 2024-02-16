import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StatsChart = ({ stats }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!stats || stats.length === 0) {
      return;
    }
    
    const ctx = chartRef.current.getContext('2d');
    const data = {
      labels: stats.map((stat) => stat.stat.name.toUpperCase()),
      datasets: [
        {
          data: stats.map((stat) => stat.base_stat),
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(255,255,255,1)',
          pointBorderColor: 'rgba(255,255,255,1)',
        },
      ],
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
          scales: {
            r: {
              angleLines: {
                display: true,
                color: 'rgba(255,255,255,0.6)', 
              },
              ticks: {
                display: false, 
              },
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
          plugins: {
            legend: {
              display: false, 
            },
          },
        },
      });
  }, [stats]);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default StatsChart;