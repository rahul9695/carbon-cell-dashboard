import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { populationData } from "../data/populationData";

const DoughnutChart = () => {
  const chartRef = useRef(null);

  const labels = populationData.map((item) => item.Year);
  const populations = populationData.map((item) => item.Population);

  const backgroundColors = [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(255, 159, 64)",
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
  ];

  const chartData = {
    labels: labels.reverse(),
    datasets: [
      {
        label: "United states population data",
        data: populations.reverse(),
        backgroundColor: backgroundColors.slice(0, populations.length), // Use the first n colors from backgroundColors array
        hoverOffset: 4,
      },
    ],
  };

  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
                color: "white",
            }
          },
        },
        scales: {
          y: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [populationData]);

  return <canvas ref={chartRef}></canvas>;
};

export default DoughnutChart;
