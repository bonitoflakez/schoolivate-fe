import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// register bar elements in chartjs
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// options for bar graph
export const options = {
  responsive: true,
  indexAxis: "x", // Set to "y" for vertical bars
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
    title: {
      display: false,
      text: "Tuition",
    },
  },
  scales: {
    x: {
      display: true, // Hide x-axis
    },
    y: {
      beginAtZero: true,
      max: 100,
      min: 0,
      ticks: {
        stepSize: 50, // Set step size to 50 for ticks
      },
      grid: {
        display: true,
        drawBorder: false, // Hide y-axis border
      },
    },
  },
};

// labels for bar graph
const labels = ["T1", "T2", "T3", "T4", "T4", "T5", "T6", "T7", "T8"];

// random sample data for tuitions
export const data = {
  labels,
  datasets: [
    {
      label: "Tuition",
      data: labels.map(() => Math.floor(Math.random() * 100)), // add data here
      backgroundColor: "#cbc4f1", // use global css variable instead
      borderRadius: 10,
    },
  ],
};

/**
 *
 * render performance graph
 */
const Performance = () => {
  return (
    <div className="w-3/5 px-4 py-2 rounded-lg">
      <h3 className="font-normal text-2xl">Performance</h3>
      <div className="h-72 my-2">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Performance;
