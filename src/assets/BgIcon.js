import React from "react";
import styled from "styled-components";

const Container =styled.div`
    display:flex;
`
const InnerText=styled.div
`color: rgba(0, 0, 0, 0.25);
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */ 
`
const BgIcon = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="238"
        height="32"
        viewBox="0 0 238 32"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 3a3 3 0 0 1 3-3h232a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Z"
          fill="#fff"
        />
        <path
          d="M.5 3A2.5 2.5 0 0 1 3 .5h232a2.5 2.5 0 0 1 2.5 2.5v26a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 29V3Z"
          stroke="#000"
          stroke-opacity=".15"
        />
        <InnerText>
        Jan 07, 2019
        </InnerText>
      </svg>
    </Container>
  );
};

export default BgIcon;
