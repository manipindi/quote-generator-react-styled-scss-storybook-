import { Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { AxiosInstance } from "../../../utils/axios-istance";
import { useAxios } from "../../../utils/hooks";
import { Filter } from "../../molecules/select";
import { NavContainer } from "./styles";
import Logo from "../../../assets/quote.svg";

const LogoLink = styled(Link)`
  height: 40px;
  display: flex;
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 400px){
    background-color: white;
    border-radius: 50%;
    width: 40px ;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      height: 30px;
    }
  }
`;

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = 1;

  const { data: authorResponse }: any = useAxios(`/authors?page=${page}`);
  const authorParam = searchParams.get("author");

  return (
    <NavContainer>
      <div>
        <LogoLink to={"/quotes?page=1"}>
          <Text color={"#8690a0"} fontWeight="extrabold" fontSize={["md", null, "3xl"]} display={["none", null, "block"]}>
            Quote Desk
          </Text>
          <Image src={Logo} h="100%" color={"red"} />
        </LogoLink>
      </div>
      <Filter
        placeHolder="Author"
        selectedParam={authorParam}
        options={authorResponse?.results}
      />
    </NavContainer>
  );
}
