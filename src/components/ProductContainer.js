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
      <ReviewProduct
        TitleValue="Review"
        TotalCountValue="8,483"
        TotalValue="23"
        ProfileValue="Total Reviews"
        CountValue="24"
        TextProfilesValue="New Reviews"
      />
      <ReviewProduct
        TitleValue="Social Monitor"
        TotalCountValue="2,432"
        TotalValue="23"
        ProfileValue="Total Alerts"
        CountValue="24"
        TextProfilesValue="Escalated"
      />
      <ReviewProduct
        TitleValue="Listings"
        TotalCountValue="357"
        TotalValue="23"
        ProfileValue="Total Locations"
        CountValue="24"
        TextProfilesValue="Published"
      />
      <ReviewProduct
        TitleValue="Profiles"
        TotalCountValue="372"
        TotalValue="23"
        ProfileValue="Total Profiles"
        CountValue="24"
        TextProfilesValue="Agent Profiles"
      />

      <Contact
        Icon={<BoxIcon />}
        BrandTitle="Sites"
        DescriptionText="Enable Sites to enjoy more benefits"
      />
      <Contact
        Icon={<BoxIcon />}
        BrandTitle="Brandwatch"
        DescriptionText="Brandwatch is a 3rd party plugin. It helps you..."
      />
      <Contact
        Icon={<BoxIcon />}
        BrandTitle="Sites"
        DescriptionText="Tableau is a 3rd party plugin. It helps you..."
      />
      <Contact
        Icon={<BoxIcon />}
        BrandTitle="Sites"
        DescriptionText="Find More Apps"
      />
    </Container>
  );
};

export default ProductContainer;
