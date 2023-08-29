import React from 'react';
import { DatePicker } from 'antd';
import { styled } from 'styled-components';


const Container=styled.div`
display:flex;
width: 238px;
height: 32px;
flex-shrink: 0;
`
const { RangePicker } = DatePicker;

const DateRangePicker = () => {
  return (
    <Container>
       <RangePicker />
    </Container>
   
  );
};

export default DateRangePicker;
