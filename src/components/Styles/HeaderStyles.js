import styled from "styled-components";
import UserImage from "../../assets/UserImage.jpg";

const CursorPointer = {
  cursor: "pointer",
};

export const HeaderContainer = styled.div`
  display: flex;
  min-width: 1219px;
  height: 70px;
  flex-shrink: 0;
  background-color: #fff;
  justify-content: space-between;
  margin-right: 20px;
  height: 70px;
  font-family: "SF Pro Display", sans-serif;
`;
export const RightNav = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &:hover {
    ${CursorPointer}
  }
`;
export const TitleWrapper = styled.div`
  color: #415367;
  font-size: 18px;
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
  font-size: 13px;
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
  &:hover {
    ${CursorPointer};
  }
`;
export const Line = styled.div`
  width: 1px;
  height: 20px;
  background-color: #d1d6dc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-right: 15px;
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
  color: #485c72;
  text-align: right;
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
  color: #a3adb8;
  font-size: 12px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
  text-transform: capitalize;
`;
export const LeftNav = styled.div`
  display: flex;
`;
export const TextTagButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 14px 6px 14px;
  margin: 19px 0px 26px 478px;
  gap: 10px;
  border-radius: 2px;
  border: 1px solid #afc8e1;
  background-color: #edf3f8;
  height: 33px;
  color: #1b63a9;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    ${CursorPointer}
  }
`;
export const HelpButton = styled.div`
  border-radius: 3px;
  background-color: #e4e7ea;
  margin: 19px 15px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  &:hover {
    ${CursorPointer}
  }
`;
