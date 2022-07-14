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

const labels = [
  "2022-07-05",
  "2022-07-06",
  "2022-07-07",
  "2022-07-08",
  "2022-07-09",
  "2022-07-10",
  "2022-07-11",
];

const data = {
  labels,
  datasets: [
    {
      label: "COVID-19 Status",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#10C091",
      borderWidth: 4,
      backgroundColor: "#10C091",
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
