import React from "react";
import styled from "styled-components";
import ReviewProduct from "./ReviewProduct";
import BoxIcon from "../assets/BoxIcon";
import MoreApps from "./MoreApps";
import Tableau from "./Tableau";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const productsAndTableaus = [
  {
    component: ReviewProduct,
    props: {
      TitleValue: "Review",
      TotalCountValue: "8,483",
      TotalValue: "23",
      ProfileValue: "Total Reviews",
      CountValue: "24",
      TextProfilesValue: "New Reviews",
    },
  },
  {
    component: ReviewProduct,
    props: {
      TitleValue: "Social Monitor",
      TotalCountValue: "2,432",
      TotalValue: "23",
      ProfileValue: "Total Alerts",
      CountValue: "24",
      TextProfilesValue: "Escalated",
    },
  },
  {
    component: ReviewProduct,
    props: {
      TitleValue: "Listings",
      TotalCountValue: "357",
      TotalValue: "23",
      ProfileValue: "Total Locations",
      CountValue: "24",
      TextProfilesValue: "Published",
    },
  },
  {
    component: ReviewProduct,
    props: {
      TitleValue: "Profiles",
      TotalCountValue: "372",
      TotalValue: "23",
      ProfileValue: "Total Profiles",
      CountValue: "24",
      TextProfilesValue: "Agent Profiles",
    },
  },
  {
    component: Tableau,
    props: {
      Icon: <BoxIcon />,
      BrandTitle: "Sites",
      DescriptionText: "Enable Sites to enjoy more benefits",
    },
  },
  {
    component: Tableau,
    props: {
      Icon: <BoxIcon />,
      BrandTitle: "BrandWatch",
      DescriptionText: "Brandwatch is a 3rd party plugin. It helps you...",
    },
  },
  {
    component: Tableau,
    props: {
      Icon: <BoxIcon />,
      BrandTitle: "Tableau",
      DescriptionText: "Tableau is a 3rd party plugin. It helps you...",
    },
  },
];

const ProductContainer = () => {
  return (
    <Container>
      {productsAndTableaus.map(({ component: Component, props }, index) => (
        <Component key={index} {...props} />
      ))}
      <MoreApps />
    </Container>
  );
};

export default ProductContainer;
