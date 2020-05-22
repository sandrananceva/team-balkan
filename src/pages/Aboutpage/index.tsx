import React from 'react'
import styled from 'styled-components'
import backimg from '../../assets/Polygon1.png'
import { about } from './about'
const PolygoneContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${backimg});
  background-repeat: no-repeat;
  background-size: 1600px;
  background-position: 60% 30%;
`

const AboutContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 60% 40%;
`
const ReadAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutHeadline = styled.p`
  font-size: 1.5rem;
  padding-top: 2rem;
`
const AboutParagraph = styled.p`
  font-family: 'Montserrat-Regular';
  width: 70%;
  margin: auto;
  text-align: left;
  padding-top: 2rem;
  padding-left: 3rem;
`
const ImageContainer = styled.div`
  padding-top: 13rem;
`
const AboutPage = () => (
  <PolygoneContainer>
    <AboutContainer>
      <ReadAboutContainer>
        <AboutHeadline>The story about us</AboutHeadline>
        <AboutParagraph>{about}</AboutParagraph>
      </ReadAboutContainer>
      <ImageContainer>IMAGE</ImageContainer>
    </AboutContainer>
  </PolygoneContainer>
)

export default AboutPage
