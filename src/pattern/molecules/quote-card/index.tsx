import { Text } from "@chakra-ui/react";
import styled, { css } from "styled-components";
import QuoteImage from "../../../assets/quote.png";
import { Button } from "../../atoms/button";

const QuoteCardOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  /* backdrop-filter: blur(8px) brightness(80%); */
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuoteCardContainer: any = styled.div`
  width: ${({width}:any) => width ? width : "280px"};
  height: ${({height}:any) => height ? height : "280px"};
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
  color: #bbc4d3;

  position: relative;

  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ isModal }: any) =>
    isModal &&
    css`
      width: 500px;
      height: 500px;
      font-size: 25px;
      background-size: 300px 300px;
    `}

  :hover {
    ${QuoteCardOverlay} {
      opacity: 1;
    }
  }
`;

export const QuoteCard = ({ quoteData, expandHandler, isModal }: any) => {

  const expandEvtHandler = () => {
    expandHandler(quoteData);
  };

  return (
    <QuoteCardContainer isModal={isModal}>
      {quoteData && (
        <>
          <Text>{quoteData.content}</Text>
          <Text
            fontWeight={"semibold"}
            color={"#B8C8D8"}
            position={"absolute"}
            bottom="20px"
          >
            {quoteData.author}
          </Text>
        </>
      )}
      {!isModal && (
        <QuoteCardOverlay>
          <Button onClick={expandEvtHandler}>Expand</Button>
        </QuoteCardOverlay>
      )}
    </QuoteCardContainer>
  );
};
