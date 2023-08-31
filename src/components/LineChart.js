import React from "react";
import { Line } from "react-chartjs-2";
import { styled } from "styled-components";
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const Container = styled.div`
  display: flex;
  width: 547px;
  margin: 29px 25px 28px 18px;
`;

const LineChart = () => {
  const data = {
    labels: [
      "06 Jan",
      "08 Jan",
      "10 Jan",
      "12 Jan",
      "15 Jan",
      "20 Jan",
      "25 Jan",
    ],
    datasets: [
      {
        data: [0, 2000, 2500, 4000, 6000,5000],
        backgroundColor: "#3D7AB6",
        borderColor: "#3D7AB6",
        pointBorderColor: "#3D7AB6",
        pointStyle: "circle", 
        pointRadius: 3, 
      },
      {  
        data: [1000, 3500, 2500, 4000,3500,6000],
        backgroundColor: "#5DC288",
        borderColor: "#5DC288",
        pointBorderColor: "#5DC288",
        pointStyle: "circle", 
        pointRadius: 3, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio:false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: true,
          drawBorder: false,
        },
        ticks: {
          values: [0, 2000, 4000, 6000, 8000],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 50,
            bottom: 10,
          },
        },
      },
    },
  };

  return (
    <Container>
      <Line data={data} options={options} height={190}/>
    </Container>
  );
};

export default LineChart;
