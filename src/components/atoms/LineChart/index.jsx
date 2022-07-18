import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      title: {
        font: {
          size: 14,
          weight: "bold",
        },
        color: "rgb(75 85 99)",
      },

      ticks: {
        font: {
          size: 12,
          weight: "bold",
          family: "Poppins, sans-serif",
        },
        color: "rgb(75 85 99)",
      },
    },

    y: {
      title: {
        font: {
          size: 14,
          weight: "bold",
        },
        color: "rgb(75 85 99)",
      },

      ticks: {
        beginAtZero: true,
        font: {
          size: 10,
          weight: "bold",
          family: "Poppins, sans-serif",
        },
        color: "rgb(75 85 99)",
      },
    },
  },
};

const LineChart = ({ data, labels }) => {
  console.log(data, labels);

  const chartData = {
    labels,
    datasets: [
      {
        label: "COVID-19 Status",
        data,
        borderColor: "#10C091",
        borderWidth: 4,
        backgroundColor: "#10C091",
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default LineChart;
