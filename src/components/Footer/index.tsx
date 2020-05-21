import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #efcd4a;
`
const FooterInnerContainer = styled.div`
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: 20% 20% 60%;
`
const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  text-align: left;
`
const FooterHeadline = styled.p`
  color: white;
  font-weight: bold;
`
const FooterLinks = styled.p`
  color: white;
  font-weight: bold;
  opacity: 0.7;
  margin-top: 4px;
  margin-bottom: 0;

  &:hover {
    opacity: 1;
  }
`
const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  text-align: right;
`
const FooterLogoText = styled.p`
  font-size: 20px;
  font-family: 'Spoof';
  color: white;
`
const IconContainer = styled.span`
  color: white;
`
const PrivacyTearmsLinks = styled.a`
  padding-top: 10px;
  color: white;
`
const Footer = () => (
  <FooterContainer>
    <FooterInnerContainer>
      <FooterLinkContainer>
        <FooterHeadline>Find a team</FooterHeadline>
        <FooterLinks>Development</FooterLinks>
        <FooterLinks>Design</FooterLinks>
      </FooterLinkContainer>
      <FooterLinkContainer>
        <FooterHeadline>Company</FooterHeadline>
        <FooterLinks>About us</FooterLinks>
        <FooterLinks>Apply as team</FooterLinks>
      </FooterLinkContainer>
      <FooterSocialContainer>
        <FooterLogoText>TEAM BALKAN</FooterLogoText>
        <IconContainer>Icons</IconContainer>
        <PrivacyTearmsLinks>Terms of use</PrivacyTearmsLinks>
        <PrivacyTearmsLinks>Privacy policy</PrivacyTearmsLinks>
      </FooterSocialContainer>
    </FooterInnerContainer>
  </FooterContainer>
)

export default Footer
