import styled from "styled-components";
import img from "../assets/yellow.png";
import avt from "../assets/klea11.png";

// Top Section Style
export const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 2630px;
  position: fixed;
  top: 121px;
`;
export const TopSectionInnerContainer = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: row;
`;
export const TopSectionInnerLeftContainer = styled.div`
  width: 50%;
  height: 100vh;
`;
export const TopSectionInnerRightContainer = styled.div`
  width: 50%;
  height: 100vh;
`;

export const QuoteContainer = styled.div`
  padding-top: 45px;
`;
export const QuoteStyle = styled.p`
  font-size: 42px;
  text-align: left;
`;

export const InfoButtonContainer = styled.div`
  width: 88%;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const BlueButton = styled.button`
  width: 240px;
  height: 45px;
  border: 3px solid #85bef9;
  background-color: rgb(11, 126, 243);
  border-radius: 10px;
  color: #e6e6e6;
  font-family: "Montserrat-SemiBold";
  font-size: 18px;
  font-weight: bold;

  &:hover {
    background-color: rgba(11, 126, 243, 0.8);
  }
`;

export const WhiteButton = styled.button`
  width: 240px;
  height: 45px;
  border: 3px solid #1b1919;
  background-color: #e6e6e6;
  border-radius: 10px;
  font-family: "Montserrat-SemiBold";
  font-size: 18px;
  font-weight: bold;

  &:hover {
    border: 3.3px solid #1b1919;
    background-color: rgba(230, 230, 230, 0.8);
  }
`;

export const ShowAvanatar = styled.div`
  max-width: 100%;
  height: 100vh;
  background-image: url(${avt});
  background-repeat: no-repeat;
  background-size: 570px;
`;
export const AvatarName = styled.p`
  color: #e01c81;
  font-size: 14px;
  padding-top: 600px;
  padding-left: 190px;
`;
