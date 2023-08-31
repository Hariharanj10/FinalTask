import React from "react";
import styled from "styled-components";
import ReviewProduct from "./ReviewProduct";
import Contact from "./Contact";
import BoxIcon from "../assets/BoxIcon";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductContainer = () => {
  return (
    <Container>
      <ReviewProduct TitleValue="Review" TotalCountValue="8,483" TotalValue="23" ProfileValue="Agent" CountValue="24" TextProfilesValue="hello" />
      <ReviewProduct TitleValue="Social Monitor" TotalCountValue="2,432" TotalValue="23" ProfileValue="Agent" CountValue="24" TextProfilesValue="hello" />
      <ReviewProduct TitleValue="Listings" TotalCountValue="357" TotalValue="23" ProfileValue="Agent" CountValue="24" TextProfilesValue="hello" />
      <ReviewProduct TitleValue="Profiles" TotalCountValue="372" TotalValue="23" ProfileValue="Agent" CountValue="24" TextProfilesValue="hello" />


      <Contact Icon={<BoxIcon/>} BrandTitle="Sites" DescriptionText="Enable Sites to enjoy more benefits"/>
      <Contact Icon={<BoxIcon/>} BrandTitle="Sites" DescriptionText="Enable Sites to enjoy more benefits"/>
      <Contact Icon={<BoxIcon/>} BrandTitle="Sites" DescriptionText="Enable Sites to enjoy more benefits"/>
      <Contact Icon={<BoxIcon/>} BrandTitle="Sites" DescriptionText="Enable Sites to enjoy more benefits"/>
    </Container>
  );
};

export default ProductContainer;
