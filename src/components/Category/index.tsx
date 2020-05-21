import React from 'react'
import {
  CategoryContainer,
  CategoryHeadline,
  CategoryInnerContainer,
  DevelopmentButton,
  DesignButton,
} from '../../styles/styles'

const Category = () => (
  <CategoryContainer>
    <CategoryHeadline>Explore teams by category</CategoryHeadline>
    <CategoryInnerContainer>
      <DevelopmentButton>Development Teams</DevelopmentButton>
      <DesignButton>Design Teams</DesignButton>
    </CategoryInnerContainer>
  </CategoryContainer>
)

export default Category
