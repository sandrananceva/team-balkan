import React from 'react'
import styled from 'styled-components'

const AdminContainer = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const AdminHeadline = styled.p`
  font-family: 'Spoof';
  font-size: 1.5rem;
  margin: auto;
  padding-top: 10rem;
`

const AdminButtonContainer = styled.div`
  height: 8rem;
  background-color: #e6e6e6;
`
const AdminButton = styled.button`
  font-size: 1rem;
  font-family: 'Montserrat-SemiBold';
  margin-top: 3rem;
`
const AdminPage = () => (
  <AdminContainer>
    <AdminHeadline>TEAM BALKAN</AdminHeadline>
    <AdminButtonContainer>
      <AdminButton>Log in with Google Account</AdminButton>
    </AdminButtonContainer>
  </AdminContainer>
)

export default AdminPage
