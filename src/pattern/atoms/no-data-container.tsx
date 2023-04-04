import React from "react";
import styled from "styled-components";

const NoDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

export default function NoDataContainer({ label }: any) {
  return <NoDataWrapper>{label}</NoDataWrapper>;
}
