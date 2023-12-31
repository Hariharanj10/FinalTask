import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 18px;
`;

const GreenProgress = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="87"
        height="42"
        viewBox="0 0 87 42"
        fill="none"
      >
        <path
          opacity=".15"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.064 0C66.315 0 85.266 18.504 86.13 41.658h-6.04C79.231 21.854 62.983 6.063 43.064 6.063c-19.918 0-36.167 15.791-37.026 35.595H0C.863 18.504 19.813 0 43.064 0Z"
          fill="#000"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.064 0C55.647 0 66.971 5.42 74.85 14.063l-4.45 4.094C63.624 10.724 53.886 6.063 43.064 6.063c-19.918 0-36.167 15.791-37.026 35.595H0C.863 18.504 19.813 0 43.064 0Z"
          fill="#47BA78"
        />
        <text
          x="30"
          y="40"
          font-family="sans-serif"
          font-size="13px"
          font-style="normal"
          font-weight="600"
          fill="#000"
          text-align="center"
          line-height="normal"
        >
          61.2%
        </text>
      </svg>
    </Container>
  );
};

export default GreenProgress;
