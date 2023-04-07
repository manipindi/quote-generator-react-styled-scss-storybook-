import { Text } from "@chakra-ui/react";
import styled, { css } from "styled-components";
import QuoteImage from "../../../assets/quote.png";
import "./quote-card.scss";

const QuoteCardContainer: any = styled.div`
  width: ${({ width }: any) => (width ? width : "280px")};
  height: ${({ height }: any) => (height ? height : "280px")};
  background-color: #fff;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.94)
    ),
    url(${QuoteImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 180px 180px;
  border-radius: 10px;
  color: #8690a0;
  font-family: "Allerta Stencil", sans-serif;
  box-shadow: rgba(119, 119, 129, 0.25) 0px 6px 12px -2px,
    rgba(145, 145, 145, 0.3) 0px 3px 7px -3px;
  margin-bottom: ${({marginBottom}:any)=>marginBottom && marginBottom};
  z-index: 0;

  position: relative;

  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 1080px) {
    width: 340px;
    height: 340px;
    font-size: 16px;
  }

  ${({ isModal }: any) =>
    isModal &&
    css`
      width: 500px;
      height: 500px;
      font-size: 25px;
      background-size: 300px 300px;
      box-shadow: none;
      @media screen and (min-width: 768px) {
        width: 440px;
        font-size: 20px;
      }
    `}

  :hover {
    .quote-overlay {
      opacity: 1;
      animation-name: fadeIn;
      animation-duration: 0.9s;
    }
  }
`;

export const QuoteCard = ({ quoteData, expandHandler, isModal, ...rest }: any) => {
  const expandEvtHandler = () => {
    expandHandler(quoteData);
  };

  return (
    <QuoteCardContainer {...rest} isModal={isModal}>
      {quoteData && (
        <>
          <Text>{quoteData.content}</Text>
          <Text
            fontWeight={"semibold"}
            color={"#8690a0"}
            position={"absolute"}
            bottom="20px"
          >
            {quoteData.author}
          </Text>
        </>
      )}
      {!isModal && (
        <div className="quote-overlay">
          <button className="card-button" onClick={expandEvtHandler}>
            <span>Expand</span>
          </button>
        </div>
      )}
    </QuoteCardContainer>
  );
};
