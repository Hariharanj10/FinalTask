import React from "react";
import styled from "styled-components";
import { HeaderContainer } from "./HeaderStyles";
import Hamberger from "../assets/hamberger";
import BreadcrumbIcon from "../assets/BreadcrumbIcon";
import TextTag from "../assets/TextTag";
import UserImage from "../assets/UserImage.jpg";
import DropdownIcon from "../assets/DropdownIcon";
import HelpButton from "../assets/HelpButton";
export const RightNav = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const TitleWrapper = styled.div`
  color: var(--grey-s-10, #415367);
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
export const Breadcrumb = styled.div`
  color: ${(props) => props?.color};
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
export const BreadcrumbWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const StyledButton = styled.button`
  display: flex;
  padding: 16px 8px;
  align-items: center;
  gap: 8px;
`;
export const ButtonText = styled.div`
  color: var(--grey-s-30, #324050);
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  // font-weight: 400;
  line-height: normal;
`;
export const Line = styled.div`
  width: 1px;
  height: 20px;
  background-color: #d1d6dc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:17px;
`;
export const Userwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const UserImg = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 30px;
  background: url(${UserImage}), lightgray 50% / cover no-repeat;
`;
export const UserName = styled.div`
  color: var(--grey-100, #485c72);
  text-align: right;
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
`;
export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;
export const UserRole = styled.div`
  color: var(--grey-t-50, #a3adb8);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
  text-transform: capitalize;
`;
export const LeftNav =styled.div`
  display:flex;

`
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
      <TextTag />
      <HelpButton />

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
