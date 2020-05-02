import React from "react";
import {
  TopSectionContainer,
  TopSectionInnerContainer,
  TopSectionInnerLeftContainer,
  QuoteContainer,
  QuoteStyle,
  InfoButtonContainer,
  BlueButton,
  WhiteButton,
  TopSectionInnerRightContainer,
  ShowAvanatar,
  AvatarName,
} from "../../styles/styles";

const TopSection = () => (
  <div>
    <TopSectionContainer>
      <TopSectionInnerContainer>
        <TopSectionInnerLeftContainer>
          <QuoteContainer>
            <QuoteStyle>
              Find the perfect design and development team for your business.
            </QuoteStyle>
          </QuoteContainer>
          <InfoButtonContainer>
            <BlueButton>Find a team - It's Free</BlueButton>
            <WhiteButton>Learn how it works</WhiteButton>
          </InfoButtonContainer>
        </TopSectionInnerLeftContainer>
        <TopSectionInnerRightContainer>
          <ShowAvanatar>
            <AvatarName>FirstName Secondname, Company</AvatarName>
          </ShowAvanatar>
        </TopSectionInnerRightContainer>
      </TopSectionInnerContainer>
    </TopSectionContainer>
  </div>
);

export default TopSection;
