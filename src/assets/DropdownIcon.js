import React from "react";
import styled from "styled-components";

const Container=styled.div`
width: 16px;
height: 16px;
margin-top:-17px;

`
const DropdownIcon = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="m4.334 7.167 3.667 3.666 3.666-3.666"
          stroke="#3A4A5B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Container>
  );
};

export default DropdownIcon;
