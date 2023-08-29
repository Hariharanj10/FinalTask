import React from 'react'
import styled from "styled-components";

const Container=styled.div`
width: 794px;
display:flex;
height: 281px;
flex-shrink: 0;
border-radius: 3px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`
const ImageContainer = () => {
  return (
    <Container>ImageContainer</Container>
  )
}

export default ImageContainer