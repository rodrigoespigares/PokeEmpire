import React, { useEffect } from 'react';
import Chart from 'chart.js';

export default function PokemonStatsChart({ pokemonName, stats }) {
  useEffect(() => {
    const ctx = document.getElementById('pokemonStatsChart').getContext('2d');
    const myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['HP', 'Attack', 'Defense', 'Special attack', 'Special defense', 'Speed'],
        datasets: [{
          label: {pokemonName},
          data: {stats},
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2
        }]
      },
      options: {
        scale: {
          pointLabels: { fontSize: 14 },
          ticks: { beginAtZero: true, max: 100 }
        },
        elements: { line: { tension: 0, borderWidth: 3 } },
        legend: { position: 'top' }
      }
    });

    return () => {
      myRadarChart.destroy(); // Limpiar el gráfico al desmontar el componente
    };
  }, [pokemonName, stats]);

  return <canvas id="pokemonStatsChart" width="400" height="400"></canvas>;
};
