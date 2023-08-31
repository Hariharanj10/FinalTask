import React from "react";
import Hamberger from "../assets/hamberger";
import BreadcrumbIcon from "../assets/BreadcrumbIcon";
import DropdownIcon from "../assets/DropdownIcon";
import {
  HeaderContainer,
  RightNav,
  NavWrapper,
  TitleWrapper,
  BreadcrumbWrapper,
  Breadcrumb,
  LeftNav,
  Line,
  Userwrapper,
  UserImg,
  UserName,
  UserRole,
  UserDetails,
  HelpButton,
  TextTagButton,
} from "./Styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <RightNav>
        <Hamberger />
        <NavWrapper>
          <TitleWrapper>North Pacific Mortgage</TitleWrapper>
          <BreadcrumbWrapper>
            <Breadcrumb color="#3D7AB6"> Organizations</Breadcrumb>
            <BreadcrumbIcon />
            <Breadcrumb color="#3D7AB6">Accounts</Breadcrumb>
            <BreadcrumbIcon />
            <Breadcrumb color="#415367">Dashboard</Breadcrumb>
          </BreadcrumbWrapper>
        </NavWrapper>
      </RightNav>
      <LeftNav>
        <TextTagButton>ORG - NORTH PACIFIC</TextTagButton>
        <HelpButton>Help</HelpButton>

        <Line />
        <Userwrapper>
          <UserImg />
          <UserDetails>
            <UserName>Bessie Cooper</UserName>
            <UserRole>Admin</UserRole>
          </UserDetails>

          <DropdownIcon />
        </Userwrapper>
      </LeftNav>
    </HeaderContainer>
  );
};

export default Header;
