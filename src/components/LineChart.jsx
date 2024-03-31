import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { populationData } from "../data/populationData.js"; // Import the populationData array

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = populationData.map((item) => item.Year);
    const populations = populationData.map((item) => item.Population);

    const chartData = {
      labels: labels.reverse(),
      datasets: [
        {
          label: "Population",
          data: populations.reverse(),
          fill: true,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.5,
        },
      ],
    };

    // const chartOptions = {
    //   scales: {
    //     y: {
    //       beginAtZero: false,
    //       title: {
    //         display: true,
    //         text: "Population",
    //       },
    //     },
    //     x: {
    //       title: {
    //         display: true,
    //         text: "Year",
    //       },
    //     },
    //   },
    //   grid: {

    //   }
    // };

    const chartOptions = {
      scales: {
        // responsive: true, // Make the chart responsive
        // maintainAspectRatio: false, // Disable aspect ratio
        // aspectRatio: 1,
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "Population",
            color: "white",
          },
          ticks: {
            color: "white", // Set tick color to white
          },
        },
        x: {
          title: {
            display: true,
            text: "Year",
            color: "white",
          },
          ticks: {
            color: "white", // Set tick color to white
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
      },
      responsive: true, // Make the chart responsive
      // backgroundColor: 'rgba(0, 0, 0, 0.2)', // Set background color with opacity
      borderColor: "rgba(255, 255, 255, 0.1)", // Set border color with opacity
    };

    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create new chart instance
    chartRef.current.chart = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: chartOptions,
    });

    return () => {
      // Cleanup function to destroy chart instance when component unmounts
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
