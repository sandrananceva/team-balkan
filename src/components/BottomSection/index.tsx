import React from 'react'
import styled from 'styled-components'
import codeIcon from '../../assets/codeicon.png'
import designIcon from '../../assets/designicon.png'

const data1 = ['Allocate', 'Netcetera', 'Sorsix', 'InPlayer']
const data2 = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
]
const BottomSectionContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const BottomHeadlineContainer = styled.div`
  height: 15vh;
  border-bottom: 1px solid #efcf4a;
`
const BottomHeadlineTypography = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  padding-top: 3.2rem;
  padding-left: 2rem;
`
const CompanyListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  padding-top: 30px;
  border-bottom: 1px solid #efcf4a;
`
const CompanyItemContainer = styled.div`
  width: 16vw;
  height: 38vh;
  display: flex;
  flex-direction: column;
`
const LogoContainer = styled.div`
  border: 1px solid rgba(27, 25, 25, 0.5);
  border-radius: 8px;
  height: 40%;
  text-align: center;
`
const NameHeadline = styled.p`
  font-size: 18px;
  text-align: left;
  padding-left: 0.2rem;
  margin-bottom: 0px;
`
const Description = styled.p`
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  text-align: left;
  padding-left: 0.2rem;
  font-weight: bold;
  opacity: 0.6;
`
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const CategoryHeadline = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  padding-left: 2rem;
`
const CategoryInnerContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  align-content: space-between;
  align-content: center;
`
const DevelopmentButton = styled.button`
  background-color: #1b1919;
  color: white;
  border-radius: 10px;
  border: 5px solid #e6e6e6;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Montserrat-SemiBold';
  height: 20vh;
  width: 80%;
`
const DesignButton = styled.button`
  background-color: #e01c81;
  color: white;
  border-radius: 10px;
  border: 5px solid #e6e6e6;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Montserrat-SemiBold';
  height: 20vh;
  width: 95%;
`

const BottomSection = () => (
  <BottomSectionContainer>
    <BottomHeadlineContainer>
      <BottomHeadlineTypography>Meet the teams</BottomHeadlineTypography>
    </BottomHeadlineContainer>
    <CompanyListContainer>
      {data1.map((value, index) => (
        <CompanyItemContainer>
          <LogoContainer>{value}</LogoContainer>
          <NameHeadline>{value}</NameHeadline>
          <Description>{data2[0]}</Description>
        </CompanyItemContainer>
      ))}
    </CompanyListContainer>
    <CategoryContainer>
      <CategoryHeadline>Explore teams by category</CategoryHeadline>
      <CategoryInnerContainer>
        <DevelopmentButton>Development Teams</DevelopmentButton>
        <DesignButton>Design Teams</DesignButton>
      </CategoryInnerContainer>
    </CategoryContainer>
  </BottomSectionContainer>
)

export default BottomSection
