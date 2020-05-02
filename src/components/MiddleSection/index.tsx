import React from 'react'
import {
  MiddleSectionBackground,
  MiddleSectionInnerBackground,
  InstructionContainer,
  FirstHeadline,
  SecondHeadline,
  IconGrid,
  TextGrid,
  TextHeadlineGrid,
  TextParagraphGrid,
  MainGrid,
  ButtonGrid,
  StarterButton,
} from '../../styles/styles'
import quoteicon from '../../assets/TB1.png'
import optionicon from '../../assets/TB2.png'
import contracticon from '../../assets/TB3.png'
import fingericon from '../../assets/TB4.png'

const MiddleSection = () => (
  <MiddleSectionBackground>
    <MiddleSectionInnerBackground>
      <FirstHeadline>Your perfect match in one go</FirstHeadline>
      <SecondHeadline>How it works</SecondHeadline>
      <InstructionContainer>
        <IconGrid src={quoteicon} side="right" />
        <TextGrid>
          <TextHeadlineGrid textside="left">
            Tell us your needs
          </TextHeadlineGrid>
          <TextParagraphGrid textside="left" align="80px">
            Help us to understand the scope of your project and what exactly you
            are looking for.
          </TextParagraphGrid>
        </TextGrid>
        <TextGrid>
          <TextHeadlineGrid textside="right">
            We matchmake your teams
          </TextHeadlineGrid>
          <TextParagraphGrid textside="right">
            We only work with top quality teams and pick the ones that best suit
            your needs.
          </TextParagraphGrid>
        </TextGrid>
        <IconGrid src={optionicon} side="left" />
        <MainGrid />
        <IconGrid src={contracticon} side="right" />
        <TextGrid>
          <TextHeadlineGrid textside="left">You get 5+ quotes</TextHeadlineGrid>
          <TextParagraphGrid textside="left" align="80px">
            We send you tailor-made quotes and proposals from the professionally
            briefed teams.
          </TextParagraphGrid>
        </TextGrid>
        <TextGrid>
          <TextHeadlineGrid textside="right">
            Super fast, perfect match
          </TextHeadlineGrid>
          <TextParagraphGrid textside="right">
            Get quotes in less than 3 days. No obligation to purchase. Find your
            perfect match - for free.
          </TextParagraphGrid>
        </TextGrid>
        <IconGrid src={fingericon} side="left" />
        <ButtonGrid>
          <StarterButton>Get started</StarterButton>
        </ButtonGrid>
      </InstructionContainer>
    </MiddleSectionInnerBackground>
  </MiddleSectionBackground>
)

export default MiddleSection
