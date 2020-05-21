import React from 'react'
import styled from 'styled-components'

const data = [
  'Netcetera',
  'Sorsix',
  'InPlayer',
  'Vox',
  'ITgma',
  'Endava',
  'Allocate',
  'MCA',
  'Vertigo',
  'Sorsico',
  'Allocate',
]

const TeamsListContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
`
const TeamsListHeadlineContainer = styled.div`
  height: 8vh;
  border-bottom: 1px solid #e01c81;
  text-align: left;
  padding-left: 3rem;
  padding-top: 1.5rem;
`
const TeamsListHeadline = styled.p`
  font-family: 'Montserrat-SemiBold';
  font-weight: bold;
  font-size: 22px;
`
const TeamListViewContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 1rem;
  padding-top: 1rem;
`
const TeamListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const LogoViewContainer = styled.div`
  height: 8rem;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`

const TeamsList = () => (
  <TeamsListContainer>
    <TeamsListHeadlineContainer>
      <TeamsListHeadline>Design n Development Team</TeamsListHeadline>
    </TeamsListHeadlineContainer>
    <TeamListViewContainer>
      {data.map((value) => (
        <TeamListItemContainer>
          <LogoViewContainer>
            <p>Logo</p>
          </LogoViewContainer>
          <h5>{value}</h5>
        </TeamListItemContainer>
      ))}
    </TeamListViewContainer>
  </TeamsListContainer>
)

export default TeamsList
