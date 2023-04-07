import { Button } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const NoDataWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.48);
  z-index: 10;
`;

export default function LoadingOverlay({ label }: any) {
  return <NoDataWrapper>{label ? label : <Button bg={"transparent"} fontSize="4xl" isLoading color={"white"}></Button>}</NoDataWrapper>;
}
