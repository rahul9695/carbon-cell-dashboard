import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { populationData } from "../data/populationData";

const BarChart = () => {
  const chartRef = useRef(null);
  console.log(populationData);

  useEffect(() => {
    const labels = populationData.map((item) => item.Year);
    const populations = populationData.map((item) => item.Population);

    const chartData = {
      labels: labels.reverse(),
      datasets: [
        {
          label: "Population",
          data: populations.reverse(),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
        },
      ],
    };

    const chartOptions = {
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              color: 'white', // Set y-axis label color to white
            }
          },
          x: {
            ticks: {
              color: 'white', // Set x-axis label color to white
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' // Set legend label color to white
            }
          }
        }
      };

    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance
    let chartInstance = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });

    return () => {
      // Cleanup function to destroy chart instance when component unmounts
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChart;
