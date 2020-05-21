import React from 'react'
import styled from 'styled-components'
import codeIcon from '../../assets/codeicon.png'
import designIcon from '../../assets/designicon.png'
import {
  BottomSectionContainer,
  BottomHeadlineContainer,
  BottomHeadlineTypography,
  CompanyItemContainer,
  CompanyListContainer,
  LogoContainer,
  NameHeadline,
  Description,
} from '../../styles/styles'

const data1 = ['Allocate', 'Netcetera', 'Sorsix', 'InPlayer']
const data2 = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
]

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
  </BottomSectionContainer>
)

export default BottomSection
