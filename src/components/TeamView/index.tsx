import React from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt } from 'react-icons/fa'

const datatext = [
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. It is a long established fact that a reader will be distracted by the readabln looking at its layout.It is a long established fact that a reader will be e content of a page whedistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content."',
]
const Container = styled.div`
  height: 190vh;
`
const TeamViewContainer = styled.div`
  width: 70%;
  margin: auto;
  height: 90vh;
`
const TeamViewHeadlineContainer = styled.div`
  height: 20%;
  display: grid;
  grid-template-columns: 70% 25%;
  align-content: space-between;
`

const IdentityContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 23% 50%;
`
const ImageCircle = styled.div`
  border-radius: 50%;
  width: 6.5rem;
  height: 6.5rem;
  border: 1px solid #e6e6e6;

  margin-left: 2rem;
  margin-top: 1rem;
`
const IdentityInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2rem;
`
const IDNameText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`
const LocationContainer = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row;
  opacity: 0.7;
`
const LocationText = styled.p`
  font-size: 1rem;
  color: #1b1919;
  margin-top: 0;
  padding-left: 0.7rem;
  font-weight: lighter;
`
const AboutContainer = styled.div`
  height: 70%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding-top: 3rem;
`
const LabelText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;
  margin-top: 0;
  opacity: 0.7;
  text-align: right;
`
const InfoText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;
  margin-top: 0;
  text-align: left;
`
const TeamViewContainerDesription = styled.div`
  width: 95%;
  margin: auto;
  line-height: 1.3;
`
const TeamViewDesription = styled.p`
  font-family: 'Montserrat-Regular';
  font-weight: lighter;
  text-align: left;
  opacity: 0.6;
`
const TeamViewContainerInformation = styled.div`
  margin: auto;
  width: 90%;
  display: grid;
  grid-template-columns: auto auto;
  padding-top: 1rem;
`
const FoundersServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FoundersContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 6.5rem;
`
const FondersHeadline = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  text-align: left;
`
const FoundersInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const AvatarCircle = styled.div`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #e6e6e6;
`
const FondersTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`
const FoundersName = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
  margin-bottom: 0;
`
const FoundersTitle = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
  margin-top: 10px;
`

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ServicesButtonContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ServiceButton = styled.button`
  width: 10rem;
  height: 2.5rem;
  font-size: 1rem;
  background-color: #efcd4a;
  color: white;
  font-family: 'Montserrat-SemiBold';
  border-radius: 5px;
  border: solid #efcd4a;
  opacity: 0.7;
`
const GetQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`
const GetQuoteButton = styled.button`
  margin-top: 1rem;
  width: 18rem;
  height: 2.5rem;
  background-color: #0b7ef3;
  color: white;
  font-family: 'Montserrat-SemiBold';
  border: solid #0b73f3;
  border-radius: 5px;
`
const PortfolioButton = styled(GetQuoteButton)`
  background-color: #e01c81;
  border: solid #e01c81;
`
const PortfolioContainer = styled(TeamViewContainer)`
  width: 100%;
  padding-top: 10rem;
`
const PortfolioHeadlineContainer = styled.div`
  height: 5rem;
  border-bottom: 1px solid #e01c81;
  text-align: left;
`
const PortfolioHeadline = styled.p`
  padding-top: 2.8rem;
  padding-left: 1rem;
  font-size: 1.2rem;
`
const PortfolioInnerContainer = styled.div`
  height: 35rem;
  border: solid 1px black;
  opacity: 0.3;
  margin-top: 3rem;
`
const TeamView = () => (
  <Container>
    <TeamViewContainer>
      <TeamViewHeadlineContainer>
        <IdentityContainer>
          <ImageCircle />
          <IdentityInnerContainer>
            <IDNameText>Company Name</IDNameText>
            <LocationContainer>
              <FaMapMarkerAlt color="#1b1919" />
              <LocationText>City, Country</LocationText>
            </LocationContainer>
          </IdentityInnerContainer>
        </IdentityContainer>
        <AboutContainer>
          <LabelText>Size</LabelText>
          <InfoText>+10 Talent</InfoText>
          <LabelText>Founded</LabelText>
          <InfoText>2015</InfoText>
          <LabelText>Availability</LabelText>
          <InfoText>Available for work</InfoText>
        </AboutContainer>
      </TeamViewHeadlineContainer>
      <TeamViewContainerDesription>
        <TeamViewDesription>{datatext}</TeamViewDesription>
      </TeamViewContainerDesription>
      <TeamViewContainerInformation>
        <FoundersServicesContainer>
          <FoundersContainer>
            <FondersHeadline>Founder</FondersHeadline>
            <FoundersInnerContainer>
              <AvatarCircle />
              <FondersTitleContainer>
                <FoundersName>Firstname Lastname</FoundersName>
                <FoundersTitle>CEO and Art Director</FoundersTitle>
              </FondersTitleContainer>
            </FoundersInnerContainer>
          </FoundersContainer>
          <ServicesContainer>
            <FondersHeadline>Services</FondersHeadline>
            <ServicesButtonContainer>
              <ServiceButton>Development</ServiceButton>
              <ServiceButton>Design</ServiceButton>
            </ServicesButtonContainer>
          </ServicesContainer>
        </FoundersServicesContainer>
        <GetQuoteContainer>
          <PortfolioButton>Portfolio</PortfolioButton>
          <GetQuoteButton>Get a Quote</GetQuoteButton>
        </GetQuoteContainer>
      </TeamViewContainerInformation>
      <PortfolioContainer>
        <PortfolioHeadlineContainer>
          <PortfolioHeadline>Portfolio</PortfolioHeadline>
        </PortfolioHeadlineContainer>
        <PortfolioInnerContainer></PortfolioInnerContainer>
      </PortfolioContainer>
    </TeamViewContainer>
  </Container>
)

export default TeamView
