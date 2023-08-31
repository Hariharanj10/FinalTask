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
  Tooltip
}  from "chart.js";

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
);

const Container =styled.div`
  display:flex;
  width:547px;
  margin:29px 25px 28px 18px ;
`;
const LineChart = () => {
  const data={
    labels: ["06 Jan", "08 Jan", "10 Jan", "12 Jan", "15 Jan", "20 Jan", "25 Jan"],
    datasets: [
      {
        label:'Transaction Completed',
        label:'Survey Completed',
        data: [0,2000, 4000, 6000, 8000],
        backgroundColor:'aqua',
        borderColor: ' #3D7AB6',
        pointBorderColor:'#3D7AB6'
      }]
  }
  const options ={
    plugins:{
      
      legend: {
        display: true,
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 50,
            bottom: 10
          }
        }
      }
    },
    scales:{
      y:{
        min:3,
        max:6
      }
    }
  }
  return (
    <Container>
      <Line data={data} >
      options={options}
      </Line>
    </Container>
  );
};

export default LineChart;
