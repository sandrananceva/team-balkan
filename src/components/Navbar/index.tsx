import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: row;
  position: sticky;
  top: 0;
  height: 80px;
  align-items: baseline;
`;

const NavBarInnerLeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
`;
const NavBarInnerRightContainer = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LogoText = styled.p`
  font-size: 23px;
  font-family: "Spoof";

  &:hover {
    color: #0b7ef3;
  }
`;
const NavText = styled.p`
  font-size: 14px;
  margin-left: 25px;

  &:hover {
    color: #0b7ef3;
  }
`;

const NavBar = () => (
  <NavBarContainer>
    <NavBarInnerLeftContainer>
      <LogoText>TEAM BALKAN</LogoText>
    </NavBarInnerLeftContainer>
    <NavBarInnerRightContainer>
      <NavText>MEET THE TEAMS</NavText>
      <NavText>FIND A MATCH</NavText>
      <NavText>ABOUT US</NavText>
    </NavBarInnerRightContainer>
  </NavBarContainer>
);

export default NavBar;
