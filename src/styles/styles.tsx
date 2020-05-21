import styled from 'styled-components'
import img from '../assets/yellow.png'
import avt from '../assets/klea11.png'
import path from '../assets/Path.png'
// Top Section Style
export const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 2680px;
  top: 93px;
`
export const TopSectionInnerContainer = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: row;
`
export const TopSectionInnerLeftContainer = styled.div`
  width: 45%;
  height: 100vh;
`
export const TopSectionInnerRightContainer = styled.div`
  width: 50%;
  height: 100vh;
  padding-left: 70px;
`

export const QuoteContainer = styled.div`
  padding-top: 60px;
  width: 100%;
`
export const QuoteStyle = styled.p`
  font-size: 42px;
  text-align: left;
`

export const InfoButtonContainer = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BlueButton = styled.button`
  width: 240px;
  height: 45px;
  border: 3px solid #85bef9;
  background-color: rgb(11, 126, 243);
  border-radius: 10px;
  color: #e6e6e6;
  font-family: 'Montserrat-SemiBold';
  font-size: 18px;
  font-weight: bold;

  &:hover {
    background-color: rgba(11, 126, 243, 0.8);
  }
`

export const WhiteButton = styled.button`
  width: 240px;
  height: 45px;
  border: 3px solid #e6e6e6;
  background-color: #e6e6e6;
  border-radius: 10px;
  font-family: 'Montserrat-SemiBold';
  font-size: 18px;
  font-weight: bold;

  &:hover {
    border: 2px solid #1b1919;
    background-color: rgba(230, 230, 230, 0.8);
  }
`

export const ShowAvanatar = styled.div`
  max-width: 100%;
  height: 100vh;
  background-image: url(${avt});
  background-repeat: no-repeat;
  background-size: 566.5px;
`
export const AvatarName = styled.p`
  color: #e01c81;
  font-size: 14px;
  padding-top: 600px;
  padding-left: 190px;
`

//Middle Section

export const MiddleSectionBackground = styled.div`
  width: 100%;
  height: 150vh;
  background-color: #e6e6e6;
`
export const MiddleSectionInnerBackground = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
`
export const FirstHeadline = styled.p`
  padding-top: 60px;
  font-size: 15px;
`
export const SecondHeadline = styled.p`
  margin-top: 10px;
  font-size: 45px;
  padding-bottom: 30px;
`
export const InstructionContainer = styled.div`
  display: grid;
  grid-template-columns: 42% auto 42%;
  height: 90vh;
`
export const IconGrid = styled.div<{ src: any; side: string }>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 130px;
  background-position: ${(props) => props.side};
  height: 25vh;
`
export const MainGrid = styled.div`
  grid-area: 1 / 2 / 5;
  background-image: url(${path});
  background-repeat: no-repeat;
  background-position: top;
  background-size: 50px;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
`

export const TextGrid = styled.div`
  font-size: 30px;
  height: 25vh;
`
export const TextHeadlineGrid = styled.p<{ textside: string }>`
  font-weight: bold;
  font-size: 23px;
  text-align: ${(props) => props.textside};
`
export const TextParagraphGrid = styled.p<{ textside: string; align: string }>`
  font-family: Montserrat-Regular;
  font-weight: bold;
  opacity: 0.6;
  font-size: 18px;
  text-align: ${(props) => props.textside};
  margin-left: ${(props) => props.align}
  width: 70%%;`
export const ButtonGrid = styled.div`
  grid-area: 5/ 1 / 5/ 4;
`
export const StarterButton = styled.button`
  font-family: Montserrat-Semibold;
  border: 3px solid #85bef9;
  background-color: rgb(11, 126, 243);
  color: white;
  font-size: 20px;
  width: 22%;
  margin: auto;
  height: 7vh;
  &:hover {
    background-color: rgba(11, 126, 243, 0.8);
  }
`
// Bottom Section

export const BottomSectionContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 60vh;
`

export const BottomHeadlineContainer = styled.div`
  height: 15vh;
  border-bottom: 1px solid #efcf4a;
`
export const BottomHeadlineTypography = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  padding-top: 3.2rem;
  padding-left: 2rem;
`
export const CompanyListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  padding-top: 30px;
  border-bottom: 1px solid #efcf4a;
`
export const CompanyItemContainer = styled.div`
  width: 16vw;
  height: 38vh;
  display: flex;
  flex-direction: column;
`
export const LogoContainer = styled.div`
  border: 1px solid rgba(27, 25, 25, 0.5);
  border-radius: 8px;
  height: 40%;
  text-align: center;
`
export const NameHeadline = styled.p`
  font-size: 18px;
  text-align: left;
  padding-left: 0.2rem;
  margin-bottom: 0px;
`
export const Description = styled.p`
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  text-align: left;
  padding-left: 0.2rem;
  font-weight: bold;
  opacity: 0.6;
`
export const CategoryContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 4.7rem;
`
export const CategoryHeadline = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  padding-left: 2rem;
`
export const CategoryInnerContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  align-content: space-between;
  align-content: center;
`
export const DevelopmentButton = styled.button`
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
export const DesignButton = styled.button`
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
